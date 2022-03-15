import styled from "styled-components";

interface ContainerProps{
    active: boolean;
}

export const Container = styled.a<ContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => props.active?"center" : "space-between"};
    width: 35px;
    height: 22px;
    cursor: pointer;
    position: relative;
    span {
      content: "";
      display: block;
      height: 2px;
      width: 100%;
      background-color: #000;
      transition: .3s;
      
    };

    span:first-child{
        transform: rotate(${(props) => props.active?"135deg" : "0"});
        position: ${(props) => props.active?"absolute" : "static"};
        left: -0.5px;
    }
    span:nth-child(2){
        display: ${(props) => props.active?"none" : "block"};
    }
    span:nth-child(3){
        transform: rotate(${(props) => props.active?"-135deg" : "0"});
        position: ${(props) => props.active?"absolute" : "static"};
        left: 0.5px;
    }
`