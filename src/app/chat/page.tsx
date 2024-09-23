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
  useEffect(() => {
    fetchInitialMessages().then((initialMessages) => {
      setMessages(initialMessages);
    });

    webSocket.current = new WebSocket(
      `wss://${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/ws/chat`
    );
    webSocket.current.onopen = () => {};
    webSocket.current.onclose = (error) => {
      console.log(error);
    };
    webSocket.current.onerror = (error) => {
      console.log(error);
    };
    webSocket.current.onmessage = (event: MessageEvent) => {
      setMessages((prevMessages) => [...prevMessages, JSON.parse(event.data)]);
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
