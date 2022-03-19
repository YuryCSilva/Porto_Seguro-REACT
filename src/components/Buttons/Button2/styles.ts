import styled from "styled-components";

interface ContainerProps {
  color: string;
}

export const Container = styled.button<ContainerProps>`
  background-color: ${(props) => props.color};
  border-radius: 19px;
  padding: 9px 21px 10px 21px;
  max-height: 37px;
  align-items: center;
  box-shadow: 0px 3px 6px #0000008a;
  font: normal normal normal 600 13px/18px Open Sans, sans-serif;
  color: #fff;
  text-transform: uppercase;

  @media (min-width: 1024px){
    padding: 15px 30px;
    max-height: 62px;
    font: normal normal 600 21px/28px Open Sans;, sans-serif;
    border-radius: 31px;
    letter-spacing: 2.1px;
  }
`;
