import styled from "@emotion/styled";

interface Props {
  userId: string;
}

export const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  width: 22rem;
  height: 35rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  box-shadow: 0px 4px 24px 0px rgba(76, 75, 91, 0.12);
`;

export const Title = styled.h1`
  text-align: center;
  color: red;
`;

export const Input = styled.input`
  box-sizing: border-box;
  border-radius: 4px;
  width: 80%;
  padding: 10px;
  border: 0;
  background-color: #f7f7f8;
`;

export const Button = styled.button<Props>`
  box-sizing: border-box;
  border-radius: 4px;
  border: 0;
  text-decoration: none;
  width: 80%;
  padding: 10px 0;
  text-align: center;
  transition: background-color 0.3s ease;
  ${(props) =>
    props.userId.length > 0
      ? `cursor: pointer; background-color: #2260ff; color:#fff;`
      : `background-color: #8AABFF;`}
  :hover {
    ${(props) =>
      props.userId.length > 0
        ? `cursor: pointer; background-color: #0035BD; color:#fff;`
        : `background-color: #E1E2E4;`}
  }
`;
