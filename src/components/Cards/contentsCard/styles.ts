import styled from "styled-components";

interface Card1ContainerProps {
  active: boolean;
}

export const ContainerCard1 = styled.div<Card1ContainerProps>`
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
      width: 100%;
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

    @media(min-width: 1024px){
      width: auto;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 12px;
      padding: 61.5px 51.75px;
      

      p{
        font: normal normal normal 20px/27px Open Sans, sans-serif;
        width: 50%;
      }
      hr {
        width: 0.5px;
        margin: 0 30.5px;
        height: auto;
      }

      div.complementsContainer{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
      }
      div.complements { 
        display: flex;
        justify-contente: flex-start;
        font: normal normal normal 20px/27px Open Sans,sans-serif;
        span {
              padding-right: 15px; 
              padding-left: 3px;    
              a 
        }
        .bold {
          font: normal normal bold 20px/27px Open Sans, sans-serif;
          padding: 0;
          margin-right: 10px;
        }
      }
      div.complements:last-child{
        margin-bottom: 0;
      }
  
    }
`;
