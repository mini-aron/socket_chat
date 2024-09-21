"use client";
import { ChatContainer, Template } from "@/templates/ChatPageTemplate";
import ChatScrollSection from "@/components/Chat/ChatScrollSection";
import { useEffect, useRef, useState } from "react";
import MessageType from "@/types/MessageType";
import Input from "@/components/Chat/Input";

const MainPage = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      name: "아론",
      message: "머해",
      createdAt: new Date(),
    },
  ]);
  const webSocket = useRef<WebSocket | null>(null);
  const GetMessage = (event: MessageEvent) => {
    setMessages([...messages, event.data]);
  };

  useEffect(() => {
    webSocket.current = new WebSocket(
      `ws://${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/ws/chat`
    );
    webSocket.current.onopen = () => {
      console.log("WebSocket 연결!");
    };
    webSocket.current.onclose = (error) => {
      console.log(error);
    };
    webSocket.current.onerror = (error) => {
      console.log(error);
    };
    webSocket.current.onmessage = (event: MessageEvent) => {
      GetMessage(event);
      console.log("event", event);
    };
  }, []);

  const sendMessage = (value: string) => {
    webSocket.current?.send(value);
  };

  return (
    <Template>
      <ChatContainer>
        <ChatScrollSection messages={messages} userId={"aron"} />
        <Input sendMessage={sendMessage} />
      </ChatContainer>
    </Template>
  );
};

export default MainPage;
