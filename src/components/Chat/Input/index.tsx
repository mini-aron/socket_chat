import { useState } from "react";
import * as S from "./style";

interface Props {
  sendMessage: (value: string) => void;
}

const ChatInput = ({ sendMessage }: Props) => {
  const [value, setValue] = useState<string>("");

  return (
    <S.Wrapper
      onSubmit={(event) => {
        event.preventDefault();
        sendMessage(value);
        setValue("");
      }}
    >
      <S.Input value={value} onChange={(e) => setValue(e.target.value)} />
      <S.SubmitButton type="submit">보내기</S.SubmitButton>
    </S.Wrapper>
  );
};

export default ChatInput;
