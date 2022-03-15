import React from "react";
import { Container } from "./styles";

const Menu: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({children}) => <Container>{children}</Container>

export default Menu;