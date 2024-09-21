import * as S from "./style";

interface Props {
  message: string;
  title: string;
  date: Date;
  isMy: boolean;
}
export function ChatWrapper(value: string) {
  return (
    <S.UserChatWrapper>
      <S.ChatWrapper backgroundColor="#272727" color="#fff">
        {value}
      </S.ChatWrapper>
    </S.UserChatWrapper>
  );
}
const ChatBox = ({ message, title, isMy }: Props) => {
  return (
    <S.ChatBoxWrapper isMy={isMy}>
      <S.ChatInformationWrapper>
        <S.Name>{title}</S.Name>
        <S.ChatWrapper>{message}</S.ChatWrapper>
      </S.ChatInformationWrapper>
    </S.ChatBoxWrapper>
  );
};
export default ChatBox;
