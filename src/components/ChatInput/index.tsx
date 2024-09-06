import { useState } from "react";
import * as S from "./style";

const ChatInput = () => {
  const [value, setValue] = useState("");

  return (
    <S.Wrapper onSubmit={() => {}}>
      <S.Input value={value} onChange={(e) => setValue(e.target.value)} />
      <S.SubmitButton type="submit">보내기</S.SubmitButton>
    </S.Wrapper>
  );
};

export default ChatInput;
