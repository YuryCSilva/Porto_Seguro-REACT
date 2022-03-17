import React from "react";
import { Container } from "./styles";

interface ButtonProps{
    type: string;
    color: string
}

const Button: React.FC<ButtonProps> = (props) => (
    <Container typeB={props.type} color={props.color}>
        {props.children}
    </Container>
)

export default Button;