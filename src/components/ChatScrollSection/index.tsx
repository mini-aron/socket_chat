import * as S from "./style";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const ChatScrollSection = ({ children }: Props) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default ChatScrollSection;
