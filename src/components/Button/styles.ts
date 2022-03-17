import styled from "styled-components"

interface ContainerProps{
    typeB: string;
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
    0px 3px 6px #00000029;
    justify-content: center;

    span:nth-child(2){
        text-align: left;
        margin-left: 10px;
        font: normal normal bold 15px/20px Open Sans, sans-serif;
        color: #FFF;
        text-transform: uppercase;
    }
`