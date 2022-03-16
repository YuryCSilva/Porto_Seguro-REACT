import styled from "styled-components";

export const Container = styled.nav`
  position: absolute;
  width: 100%;
  height: calc(100% - 60px);
  background-color: #9a6d0c;
  left: 0;
  top: 60px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  

  ul {
    li {
      font-size: 21px;
      text-transform: uppercase;
      letter-spacing: 4.2px;
      border-bottom: 1px solid #efc566;

      a {
        width: 100%;
        padding: 12px 20px;
        display: block;

        span {
          font: normal normal 600 21px/28px Open Sans, sans-serif;
        }
      }
    }
  }
`;
