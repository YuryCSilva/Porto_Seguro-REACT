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

    p{
        margin: 21px 0;
        font: normal normal normal 15px/20px Open Sans, sans-serif;
        color: #4B4B4B;
    }

    @media (min-width: 1024px) {
        margin: 42px 0px;
        padding: 0 103px;

        p{
            margin-top: 19px;
            margin-bottom: 18px;
            font: normal normal normal 20px/27px Open Sans, sans-serif;
            color: #4B4B4B;
        }

        div{
            display: flex;
            justify-content: space-between;
        }

        div.cardsContainer{
            gap: 16px;
        }
      }
`;

export const PlansBenefis = styled.div`
      padding:0 16px;

      @media(min-width: 1024px){
          padding: 0 103px;

          div.cardsContainer{
              padding: 0 39px;
              display: flex;
              justify-content: space-between;
              gap:32px;
          }
          
      }
`
