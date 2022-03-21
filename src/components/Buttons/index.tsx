import React, { ReactNode } from "react";
import { Container, Container2, Container3, Container4 } from "./styles";

interface ButtonProps{
  color: string;
}

const Button1: React.FC<ButtonProps> = (props) => (
  <Container color={props.color}>{props.children}</Container>
);

const Button2: React.FC<ButtonProps> = ({ children, color }) => (
  <Container2 color={color}>{children}</Container2>
);

interface ButtonProps3 extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  color: string;
  children: ReactNode;
}

const Button3: React.FC<ButtonProps3> = ({ children, color, ...rest }) => (
  <Container3 color={color} {...rest}>
    {children}
  </Container3>
);

interface ButtonSubmitProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  children: ReactNode;
}

const ButtonSubmit: React.FC<ButtonSubmitProps> = ({ children, color,...rest }) => (
  <Container4 type="submit" color={color} {...rest}>
    {children}
  </Container4>
);

export { Button1, Button2, Button3, ButtonSubmit };
