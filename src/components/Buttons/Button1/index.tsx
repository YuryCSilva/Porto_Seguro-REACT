import React from "react";
import { Container } from "./styles";

interface ButtonProps{
    color: string
}

const Button: React.FC<ButtonProps> = (props) => (
    <Container color={props.color}>
        {props.children}
    </Container>
)

export default Button;