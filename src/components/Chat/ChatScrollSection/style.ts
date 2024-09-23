import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: #ffffff;
  height: 91%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
    background: #f7f7f8;
  }
  ::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
  }
`;
