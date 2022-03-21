import { ReactNode } from "react";
import styled from "styled-components";

interface ContainerProps {
  color: string;
}

export const Container = styled.button<ContainerProps>`
  background-color: ${(props) => props.color};
  display: flex;
  border-radius: 12px;
  padding: 12px 44px;
  margin: 8px 20px 0;
  max-height: 75px;
  width: 100%;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;
  justify-content: flex-start;
  cursor: pointer;

  span:nth-child(2) {
    text-align: left;
    margin-left: 10px;
    font: normal normal bold 15px/20px Open Sans, sans-serif;
    color: #fff;
    text-transform: uppercase;
  }
`;

export const Container2 = styled.button<ContainerProps>`
  background-color: ${(props) => props.color};
  border-radius: 19px;
  padding: 9px 21px 10px 21px;
  max-height: 37px;
  align-items: center;
  box-shadow: 0px 3px 6px #0000008a;
  font: normal normal normal 600 13px/18px Open Sans, sans-serif;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;

  @media (min-width: 1024px){
    padding: 15px 30px;
    max-height: 62px;
    font: normal normal 600 21px/28px Open Sans;, sans-serif;
    border-radius: 31px;
    letter-spacing: 2.1px;
  }
`;

interface ContainerProps3 extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  children: ReactNode;
}

export const Container3 = styled.button<ContainerProps3>`
  background-color: ${({ color }) => color};
  border-radius: 16px;
  padding: 9px 36px 9px 35px;
  max-height: 31px;
  box-shadow: 0px 3px 6px #00000029;
  font: normal normal bold 9px/13px Open Sans, sans-serif;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;

  img{
    width: 12px;
    height: 13px;
    margin-right: 5px;
  }

  @media (min-width: 1024px){
    padding: 15px 30px;
    max-height: 62px;
    font: normal normal 600 18px/20px Open Sans;, sans-serif;
    width: auto;
    border-radius: 31px;
    letter-spacing: 1.5px;
    img{
      width: 18.5px;
      height: 20px;
      margin-right: 8px;
    }
  }

  @media (min-width: 1366px){
    font: normal normal 600 21px/28px Open Sans, sans-serif;
    letter-spacing: 2.1px;
`;

interface ContainerProps4 {
  color: string;
}
export const Container4 = styled(Container3)<ContainerProps4>``;
