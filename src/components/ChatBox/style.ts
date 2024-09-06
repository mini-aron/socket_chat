import styled from "@emotion/styled";

interface Props {
  isMy?: boolean;
  color?: string;
  backgroundColor?: string;
}
export const ChatBoxWrapper = styled.div`
  display: flex;
  flex-direction: ${({ isMy }: Props) => (isMy ? "row-reverse" : "row")};
`;

export const UserChatWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
`;

export const ChatWrapper = styled.div`
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  max-width: 300px;
  white-space: pre-wrap; /* 줄 바꿈 유지 */
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: 400;
  background-color: ${({ backgroundColor }: Props) => backgroundColor};
  color: ${({ color }: Props) => color};
  padding: 10px;
`;
export const ChatInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
`;
export const Name = styled.div`
  font-family: 400;
  margin-bottom: 5px;
  font-size: 0.8rem;
`;
