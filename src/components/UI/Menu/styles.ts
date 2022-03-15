import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 15px 21px;
  max-height: 60px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;

  img:first-child {
    padding-right: 20px;
  }

  img:nth-child(2) {
    padding-left: 20px;
  }
`;
