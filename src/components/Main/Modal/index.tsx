import React, { ReactNode } from "react";
import styled from "styled-components";
import { Button3 } from "../../Buttons";
import { ModalContainer } from "./styles";

interface ModalProps {
  open: boolean;
  setClose: () => void;
}

const ModalContainer1: React.FC<ModalProps> = ({
  children,
  setClose,
  open,
}) => (
  <ModalContainer open={open}>
    <div className="Content">
      <button className="closeModal" onClick={setClose}>
        <span></span>
        <span></span>
      </button>
      <div className="ContentModal">{children}</div>
      <Button3 onClick={setClose} color={"#9A6D0C"}>Baixe a Lista Completa de Hospitais</Button3>
    </div>
  </ModalContainer>
);

export default ModalContainer1;
