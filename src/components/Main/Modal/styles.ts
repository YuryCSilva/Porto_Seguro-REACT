import styled from "styled-components";

interface ModalProps {
  open: boolean;
}

export const ModalContainer = styled.div<ModalProps>`
    display: ${(props) => (props.open ? "flex" : "none")};
  width: 100vw;
  height: 100vh;
  top: 30px;
  position: fixed;
  background-color: ${(props) => (props.open ? "rgba(0,0,0,0.5)" : "0")};
  justify-content: center;
  align-items: center;

  div.Content {
    background: #fff;
    width: 84.42vw;
    height: auto;
    border-radius: 12px;
    opacity: 1;
    box-shadow: 0px 3px 6px #00000029;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 14px;

    button.closeModal {
      margin-top: 18px;
      margin-right: 21px;
      width: 14px;
      height: 14px;
      background: none;
      border: none;
      align-self: flex-end;
      position: relative;
      cursor: pointer;
      span {
        content: "";
        display: block;
        height: 2px;
        width: 18px;
        background-color: #c9c9c9;
        position: absolute;
        top: 0;
      }

      span:first-child {
        transform: rotate(-45deg) translate(-50%, -50%);
        left: 50%;
      }
      span:last-child {
        transform: rotate(45deg) translate(50%, -50%);
        left: -50%;
      }
    }
    div.ContentModal {
      padding: 0 44px;
      width: 100%;

      h2 {
        font: normal normal bold 19px/26px Open Sans, sans-serif;
        letter-spacing: 0px;
        color: #e8bb15;
        margin-bottom: 10px;
      }
      li {
        font: normal normal normal 12px/20px Open Sans;
        letter-spacing: 0px;
        color: #1a1a1a;
      }
      .provincy{
          margin-bottom: 40px;
      }
    }
  }
  @media(min-width: 1024px){
    top: 46px;
    div.Content{
      width: 686px;

      div.ContentModal{
        padding:0 41px 0 42px;
        width: 100%;
        height: auto;
  
        h2{
          font: normal normal bold 30px/41px Open Sans, sans-serif;
          margin-bottom: 15px;
        }
  
        li{
          font: normal normal normal 20px/27px Open Sans, sans-serif;
        }
      }  
      button:last-child{
        width: 481px;
        font: normal normal bold 17px/23px Open Sans, sans-serif;
        padding:11px 61.25px 10px 61px; 
        letter-spacing: 0px;
        border-radius: 22px;
        margin-bottom: 49px;
      }      
    }
  }
`;
