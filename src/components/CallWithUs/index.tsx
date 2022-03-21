import { Button1 } from "../Buttons";
import { Container } from "./styles";
import Phone from "../../assets/img/mobile/phone.png";
import Whatsapp from "../../assets/img/mobile/whatsapp-icon.png";

const ContentsMenu: React.FC = () => {
  return (
    <Container>
      <span className="textMenu">Fale Conosco Agora Mesmo:</span>
      <span className="textMenu">4020-6440</span>
      <div className="buttonGroup">
        <Button1 color="#F7B53D">
          <span>
          <img src={Whatsapp} alt="Whatsapp" width={51} height={51} />
          </span>
          <span>Clique aqui para enviar uma mensagem</span>
        </Button1>
        <Button1 color="#F7B53D">
          <span>
            <img src={Phone} alt="Telefone" width={51} height={51} />
          </span>
          <span>Clique aqui para Ligar</span>
        </Button1>
      </div>
      <span className="finalText">Horário de Atendimento de 8h às 17h</span>
    </Container>
  );
};

export default ContentsMenu;
