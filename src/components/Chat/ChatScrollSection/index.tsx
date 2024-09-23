import ChatBox from "../ChatBox";
import { ReactNode, useEffect, useRef } from "react";
import MessageType from "@/types/MessageType";
import * as S from "./style";

interface Props {
  children?: ReactNode;
  messages: MessageType[] | [];
  userId: string;
}

const ChatScrollSection = ({ messages, userId }: Props) => {
  const scrollSectionRef = useRef(null);

  const scrollToBottom = (element: HTMLDivElement | null) => {
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
      console.log("스클로");
    }
  };

  useEffect(() => {
    scrollToBottom(scrollSectionRef.current);
  }, [messages]);

  return (
    <S.Wrapper>
      {messages.length > 0 &&
        messages.map((message, idx) => (
          <ChatBox
            key={idx}
            message={message.message}
            title={message.name}
            isMy={userId === message.name}
            date={message.createdAt}
          />
        ))}
      <div ref={scrollSectionRef} />
    </S.Wrapper>
  );
};

export default ChatScrollSection;
