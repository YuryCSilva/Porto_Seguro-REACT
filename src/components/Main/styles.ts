import styled from "styled-components";

export const ImgSection = styled.div`
        position: relative;
        width: inherit;
        height: calc(100vh - 60px);
        margin-top: 60px;
        left: 0;
           
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
        z-index: -1; 
      }

      div.ImgContents{
        letter-spacing: 0px;
        color: #FFFFFF;
        margin: 0 16px;
        display: flex;
        flex-direction: column; 
        justify-content: flex-end;
        height: 100%;

          
        h1{
            font: normal normal bold 30px/41px Open Sans, sans-serif;
            text-shadow: 0px 3px 4px #00000082;
            margin-bottom: 8px;     
            margin: 0 3px;       
        }

        span.planGoldHeader{
            display:none; 
        }
  
        hr{
          width: 50%;          
          border: 1px solid #FFF;
          margin-top: 8px; 
          margin-bottom: 17px
        }

        div.valueSection{
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            margin-left: 1px
            

            button{
                margin-right: 16px;
                margin-bottom: 9px;
            }
    

            div.ContentValue{
                font: italic normal normal 17px/26px Open Sans, sans-serif;
                display: flex;

                span{
                    display: flex;
                    align-items: center;
                    white-space: nowrap;              
                }
    
                span.currency{
                    font-weight: bold;
                    padding:0 3px;
                }
    
                span.value{
                    font: normal normal bold 33px/26px Open Sans, sans-serif;
                    padding-top: 9px;
                    widht: 57px;
                }
            }
        }

        span.valueRefer {
            font:normal normal normal 8px/10px Open Sans, sans-serif;
            letter-spacing: 0px;
            opacity: 0.5;
            height: 31px;
            display: block;
            margin-bottom: 30px;

        }
      }
  @media(min-width: 1024px){
        height: calc(100vh - 92px);
        margin-top: 92px;

        div.ImgContents{
            letter-spacing: 0px;
            color: #FFFFFF;
            margin: 0 32px;
            display: flex;
            flex-direction: column; 
            justify-content: flex-end;
            height: 100%;
            width: 529px;

            h1{
                font: normal normal bold 40px/55px Open Sans, sans-serif;
                text-shadow: 0px 3px 4px #00000082;
                margin-bottom: 18px;  
                width: 438px;         
            }

            hr{
                margin-left: 0.5px;
                width: 14.64vw;
            }

            span.planGoldHeader{
                display: block;
                width: 327px;
                font: normal normal normal 25px/34px Open Sans, sans-serif;
                margin-bottom: 18px;
            }
      
            div.valueSection{
                display: flex;
                align-items:top;
    
                button{
                    margin-bottom: 0;
                }
        
    
                div.ContentValue{
                    font: italic normal normal 22px/34px Open Sans;, sans-serif;
    
                    span{
                        display: flex;
                        align-items: flex-start;
                        white-space: nowrap;              
                    }
        
                    span.currency{
                        font: normal normal bold 35px/54px Open Sans, sans-serif;
                        margin-left: 17px;
                    }

                    span.currency:last-child{
                        font: normal normal bold 30px/43px Open Sans, sans-serif;
                        margin-left: 0;
                    }
        
                    span.value{
                        font: normal normal bold 54px/43px Open Sans, sans-serif;
                        padding-top: 12px;
                    }
                }
            }
    
            span.valueRefer {
                font:normal normal normal normal 12px/15px Open Sans, sans-serif;
                letter-spacing: 0px;
                opacity: 0.5;
                height: 47px;
                width: 476px;
                display: block;
                margin-bottom: 30px;
    
        }
    }
`;

export const HospitalsHighlights = styled.div`
  margin: 40px 0px;
  padding: 0 16px;
  width: 100%;
  display: block;

  p {
    margin: 21px 0;
    font: normal normal normal 15px/20px Open Sans, sans-serif;
    color: #4b4b4b;
  }

  @media (min-width: 1024px) {
    margin: 42px 0px;
    padding: 0 103px;

    p {
      margin-top: 19px;
      margin-bottom: 18px;
      font: normal normal normal 20px/27px Open Sans, sans-serif;
      color: #4b4b4b;
    }

    div {
      display: flex;
      justify-content: space-between;
    }

    div.cardsContainer {
      gap: 16px;
    }
  }
`;

export const PlansBenefis = styled.div`
  padding: 0 16px;

  @media (min-width: 1024px) {
    padding: 0 103px;

    div.cardsContainer {
      padding: 0 39px;
      display: flex;
      justify-content: space-between;
      gap: 32px;
    }
  }
`;

export const KnowMore = styled.div`
  padding: 0 18px;
  display: flex;
  flex-direction: column;
  align-self: center;
  div.KnowMoreContent1 {
    display: flex;
    margin: 21px 0;
    img {
      width: 101.22px;
      height: 101.23px;
      margin-right: 12.4px;
    }

    p {
      font: normal normal normal 15px/20px Open Sans, sans-serif;
      letter-spacing: 0px;
      color: #404040;
    }
  }
  div.KnowMoreContent2 {
    display: flex;
    flex-direction: column;
    width: 100%;
    div.FormDiv {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 26px;
      label {
        display: flex;
        width: 100%;
        flex-direction: column;
        font: normal normal bold 12px/17px Open Sans, sans-serif;
        color: #e8bb15;
        text-transform: uppercase;
        margin-bottom: 20px;

        input {
          border: 1px solid #9a6d0c;
          padding: 6px;
          margin-top: 4px;
        }
      }
    }

    img.Recapatcha {
      width: 100%;
      height: 101px;
      margin-bottom: 19px;
    }

    button {
      box-shadow: 0px 3px 6px #00000029;
      font: normal normal 600 15px/20px Open Sans, sans-serif;
      margin: 0 calc(41px - 16px);
      padding: 12px 61px 11px 61px;
      max-height: 100%;
      letter-spacing: 3px;
    }
    span.textMenu:first-child {
      color: #4b4b4b;
      letter-spacing: 0px;
      margin-bottom: 6px;
    }

    span.textMenu:nth-child(2) {
      color: #e8bb15;
      letter-spacing: 0px;
      margin-bottom: 13px;
    }

    div.buttonGroup {
      button {
        margin: 0;
        margin-bottom: 26px;
      }

      button:last-child {
        margin-bottom: 10px;
      }
    }
    span.finalText {
      color: #a7a7a7;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 1024px) {
    padding: 0 103px;

    div.KnowMoreContent1 {
      margin: 60px 0 83.69px 0;
      align-items: center;

      img {
        width: 138.3px;
        height: 138.3px;
        margin-right: 41.7px;
      }

      p {
        font: normal normal normal 20px/27px Open Sans, sans-serif;
      }
    }
    div.KnowMoreContent2 {
      flex-direction: row;
      align-items: center;
      div.FormDiv {
        border-right: 1px solid rgba(112,112,112,0.24);

        width: 50%;
        padding-right: 53.76px;
        label {
          font: normal normal bold 18px/24px Open Sans, sans-serif;
          color: #ecc63c;
          letter-spacing: 0px;

          input {
            border: 1px solid #d0bc90;
            padding: 16.5px;
            margin-top: 11.48px;
          }
        }
        label:last-child {
          margin-bottom: 41.37px;
        }

        img.Recapatcha {
          width: 214px;
          height: 63px;
          margin-bottom: 33.7px;
        }
      }
      div:last-child {
        width: 407px;
        margin-left: 53.76px;
        display: flex;
        flex-direction: column;
        align-items: center;

        div.buttonGroup {
          width: 407px;
        }
      }
    }
  }
`;
