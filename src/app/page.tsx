"use client";
import { ChatContainer, Template } from "@/templates/ChatPageTemplate";
import ChatScrollSection from "@/components/ChatScrollSection";
import ChatBox from "@/components/ChatBox";
import ChatInput from "@/components/ChatInput";
import { useEffect, useRef, useState } from "react";
import WebSocketSetting from "@/service/WebSocket";

const MainPage = () => {
  const [message, setMessage] = useState([]);
  const webSocket = useRef<WebSocket | null>(null);
  const GetMessage = (event: MessageEvent) => {
    setMessage([...message, event.data]);
  };

  useEffect(() => {
    webSocket.current = new WebSocket(
      "ws://e86d-106-101-2-188.ngrok-free.app/ws/chat"
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
    };
    // WebSocketSetting({ webSocket, GetMessage });
  }, []);

  return (
    <Template>
      <ChatContainer>
        <ChatScrollSection>
          <ChatBox message="집가고싶어" title="이아론" date="" isMy={false} />
          <ChatBox message="집 가" title="노현주" date="" isMy={true} />
          <ChatBox message="극T야 그냥;" title="이아론" date="" isMy={false} />
          <ChatBox message="나는 F긴해" title="강민수" date="" isMy={false} />
          <ChatBox message="집가고싶어" title="이아론" date="" isMy={false} />
          <ChatBox message="집 가" title="노현주" date="" isMy={true} />
          <ChatBox message="극T야 그냥;" title="이아론" date="" isMy={false} />
          <ChatBox message="나는 F긴해" title="강민수" date="" isMy={false} />
          <ChatBox message="집가고싶어" title="이아론" date="" isMy={false} />
          <ChatBox message="집 가" title="노현주" date="" isMy={true} />
          <ChatBox message="극T야 그냥;" title="이아론" date="" isMy={false} />
          <ChatBox message="나는 F긴해" title="강민수" date="" isMy={false} />
        </ChatScrollSection>
        <ChatInput />
      </ChatContainer>
    </Template>
  );
};

export default MainPage;
