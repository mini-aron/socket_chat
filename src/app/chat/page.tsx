"use client";
import { ChatContainer, Template } from "@/templates/ChatPageTemplate";
import ChatScrollSection from "@/components/Chat/ChatScrollSection";
import { useEffect, useRef, useState } from "react";
import MessageType from "@/types/MessageType";
import Input from "@/components/Chat/Input";
import { useRouter } from "next/navigation";

async function fetchInitialMessages() {
  const response = await fetch(
    `https://${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/chat`
  );
  return response.json();
}

const ChatPage = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [userId, setUserId] = useState<string>("");
  const webSocket = useRef<WebSocket | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      router.push("/");
    }
  }, [router]);

  const connectWebSocket = () => {
    webSocket.current = new WebSocket(
      `wss://${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/ws/chat`
    );

    webSocket.current.onopen = () => {
      console.log("WebSocket 연결됨");
    };

    webSocket.current.onclose = (error) => {
      console.log("WebSocket 연결 끊김:", error);
      setTimeout(connectWebSocket, 3000);
    };

    webSocket.current.onerror = (error) => {
      console.log("WebSocket 오류:", error);
      webSocket.current?.close();
    };

    webSocket.current.onmessage = (event: MessageEvent) => {
      setMessages((prevMessages) => [...prevMessages, JSON.parse(event.data)]);
    };
  };

  useEffect(() => {
    fetchInitialMessages().then((initialMessages) => {
      setMessages(initialMessages);
    });

    connectWebSocket();

    return () => {
      webSocket.current?.close();
    };
  }, []);

  const sendMessage = (value: string) => {
    const jsonMessage = {
      name: userId,
      message: value,
    };
    webSocket.current?.send(JSON.stringify(jsonMessage));
  };

  return (
    <Template>
      <ChatContainer>
        <ChatScrollSection messages={messages} userId={userId} />
        <Input sendMessage={sendMessage} />
      </ChatContainer>
    </Template>
  );
};

export default ChatPage;
