import React from "react";
import { Container } from "./styles";

interface PropsToggle {
  active: boolean;
  clickEvent(): void;
}

const Toggle: React.FC<PropsToggle> = ({active, clickEvent }) => (
  <Container active={active} onClick={clickEvent}>
    <span></span>
    <span></span>
    <span></span>
  </Container>
);

export default Toggle;
