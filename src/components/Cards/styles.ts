import styled from "styled-components";

interface Card1ContainerProps {
  active: boolean;
}

export const Card1Container = styled.div<Card1ContainerProps>`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;
  margin-bottom: 23px;
  padding-bottom:${(props) => (props.active ? "0" : "11.67px")};


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
    text-align: center;
  }

  button.arrow {
    width: 20px;
    height: 12.33px;
    position: relative;
    cursor: pointer;
    transform: rotate(${(props) => (props.active ? "180" : "0")}deg);
    transition: .6s;
    background: none;
    border: none;
    
  
    span {
      display: block;
      width: 11px;
      height: 2.5px;
      background-color: #bfbfbf;
      position: absolute;
      top: 0;
    }

    span:first-child {
      transform: rotate(45deg) translate(50%,0 );
      left: -2.3px;
    }

    span:last-child {
      transform: rotate(-45deg) translate(-50%,0 );
      left: calc(50% + 2.3px);
      
    }
  }

  @media(min-width: 1024px){
  max-width: 27.52vw;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;
  margin-bottom: 23px;
  overflow: hidden;

  img {
      
    margin-bottom: 9px;
    width: 100%;
    height: 230px;
  }

  h3 {
    width: 162px;
    height: 20px;
    font: normal normal bold 15px/20px Open Sans, sans-serif;
    color: #e8bb15;
    margin-bottom: 7px;
  }

  button.arrow {
    width: 20px;
    height: 12.33px;
    position: relative;
    cursor: pointer;
    transform: rotate(${(props) => (props.active ? "180" : "0")}deg);
    transition: .6s;
    background: none;
    border: none;
    
  
    span {
      display: block;
      width: 11px;
      height: 2.5px;
      background-color: #bfbfbf;
      position: absolute;
      top: 0;
    }

    span:first-child {
      transform: rotate(45deg) translate(50%,0 );
      left: -2.3px;
    }

    span:last-child {
      transform: rotate(-45deg) translate(-50%,0 );
      left: calc(50% + 2.3px);
      
    }
  }
  div.contents {
    color: #4b4b4b;
    letter-spacing: 0px;
    color: #4b4b4b;
    display: block;
    box-sizing: content-box;
    height: ${(props) => (props.active ? "auto" : "0")};
    opacity: ${(props) => (props.active ? "1" : "0")};
    visibility: ${(props) => (props.active ? "visible" : "hidden")};
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
    div.complements:last-child{
      margin-bottom: ${(props) => (props.active ? "36px" : "0")};
    }
  }
}`;

export const Card2Container = styled.div`
  height: 100%;
  margin: 18px 0 24px 0;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 162px;
    object-fit: cover;
    object-position: center center;
  }

  div.cardContainer {
    margin: 7.5px 0 33px 0;
    padding: 0 27px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font: normal normal bold 15px/20px Open Sans, sans-serif;
      letter-spacing: 0px;
      color: #e8bb15;
      text-align: center;
      margin-bottom: 7.94px;
    }

    p {
      color: #404040;
      letter-spacing: 0px;
      font: normal normal normal 12px/17px Open Sans, sans-serif;
      margin-bottom: 17.56px;
    }

    button {
      width: 271px;
    }
  }
  @media (min-width: 1024px) {
    margin-top: 38px;
    width: 504px;

    img {
      height: 266px;
    }

    div.cardContainer {
      margin: 42.26px 0 95px 0;
      padding: 0 51px;

      h3 {
        font: normal normal bold 30px/41px Open Sans, sans-serif;
        margin-bottom: 30px;
      }
      p {
        color: #1a1a1a;
        font: normal normal normal 25px/33px Open Sans;
        min-height: 198px;
        margin-bottom: 19.7px;
      }

      button {
        width: 100%;
        font: normal normal bold 14px/19px Open Sans, sans-serif;
      }
    }
  }
`;
export const Card3Container = styled(Card2Container)`
  img {
    margin-bottom: 0;
    height: 24.32vh;
  }
  div.cardContainer {
    margin: 15.5px 0 21.56px 0;
    padding: 0 32px;
    h3 {
      width: 195px;
      margin-bottom: 7.94px;
    }
  }
  @media (min-width: 1024px) {
    height:inherit;
    img {
      height: 256px;
    }
    div.cardContainer{
      margin: 16.6px 0 81.49px 0;
      h3{
        width: 375px;
        margin-bottom: 25.04px
      }
      p:last-child{
        min-height: auto;
      }
    }
  }
`;
