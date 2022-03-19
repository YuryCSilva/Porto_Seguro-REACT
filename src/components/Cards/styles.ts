import styled from "styled-components";

interface Card1ContainerProps{
    active: boolean;
}

export const Card1Container = styled.div<Card1ContainerProps>`
  min-height: 268px;
  width: 100%;
  max-width: 712px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;
  margin-bottom: 23px;
  @media(min-width: 712px){
    width: 340px;     
 }
 overflow: hidden;


  img {
      
    margin-bottom: 9px;
    width: 100%;
  }

  h3 {
    width: 162px;
    height: 20px;
    font: normal normal bold 15px/20px Open Sans, sans-serif;
    color: #e8bb15;
    margin-bottom: 7px;
  }

  div.arrow {
    margin-bottom: 11.67px;
    width: 20px;
    height: 12.33px;
    position: relative;
    transform: translateY(25%);
    span {
      display: block;
      content: "";
      width: 50%;
      height: 2.5px;
      background-color: #bfbfbf;
      position: absolute;
      top: 0;
    }

    span:first-child {
      transform: rotate(-45deg);
      left: 40%;
    }

    span:last-child {
      transform: rotate(45deg);
      right: 40%;
    }
  }
  div.contents {
    color: #4b4b4b;
    letter-spacing: 0px;
    color: #4b4b4b;
    display: block;
    box-sizing: content-box;
    margin-bottom:  ${(props) => props.active ? '254px' : '0'};
    height: 0;
    padding: 0 27px 0 24px;
    transition: .6s;

    p {
      margin: 0 0 17px 0;
      color: #4b4b4b;
      font: normal normal normal 12px/17px Open Sans, sans-serif;
    }

    hr {
      margin: 19.5px 0;
      width: 289px;
      border: 0.5px solid #c5ccd9;
    }

    div.complements {
      display: flex;
      justify-contente: flex-start;
      font: normal normal normal 12px/17px Open San,sans-serif;
      span {
            padding-right: 15px; 
            padding-left: 3px;    
            a 
      }
      .bold {
        font: normal normal bold 12px/17px Open Sans, sans-serif;
        padding: 0;
      }
    }
  }
`;
