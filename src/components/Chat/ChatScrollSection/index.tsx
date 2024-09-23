import ChatBox from "../ChatBox";
import { ReactNode, useEffect } from "react";
import MessageType from "@/types/MessageType";
import * as S from "./style";

interface Props {
  children?: ReactNode;
  messages: MessageType[];
  userId: string;
}

const ChatScrollSection = ({ messages, userId }: Props) => {
  useEffect(() => {
    console.log(messages);
    console.log(userId);
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
    </S.Wrapper>
  );
};

export default ChatScrollSection;
