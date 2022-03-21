import React from "react";
import { Button3 } from "../../Buttons";
import { ModalContainer } from "./styles";
import DownloadIcon from "../../../assets/img/mobile/download-icon.png"


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
      <Button3 onClick={setClose} color={"#9A6D0C"}><span><img src={DownloadIcon} alt="Ícone de download" /></span>Baixe a Lista Completa de Hospitais</Button3>
    </div>
  </ModalContainer>
);

export default ModalContainer1;
