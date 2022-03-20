import React, { ReactNode } from "react";
import { Container, Container2, Container3 } from "./styles";

interface ButtonProps extends HTMLButtonElement {
  color: string;
}

const Button1: React.FC<ButtonProps> = (props) => (
  <Container color={props.color}>{props.children}</Container>
);

const Button2: React.FC<ButtonProps> = ({ children, color }) => (
  <Container2 color={color}>{children}</Container2>
);

interface ButtonProps3 {
  color: string;
  onClick: (e: Event) => void | null;
  children: ReactNode;
}

const Button3: React.FC<ButtonProps3> = ({ children, color, onClick }) => (
  <Container3 color={color} onClick={onClick}>
    {children}
  </Container3>
);

export { Button1, Button2, Button3 };
