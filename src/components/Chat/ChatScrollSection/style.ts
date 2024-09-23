import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: #ffffff;
  height: 91%;
  box-sizing: border-box;
  padding: 0 0 15px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
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
