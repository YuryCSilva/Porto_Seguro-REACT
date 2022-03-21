import { useDataCard } from "../../../hooks/userDataCard";
import { ContainerCard1 } from "./styles";
import CallIcon from "../../../assets/img/mobile/call-icon.png"
import MapIcon from "../../../assets/img/mobile/map-icon.png"


interface DataProps {
  id: string;
  createdAt: string;
  name: string;
  image: string;
  detail: string;
  address: string;
  phone: string | number;
}

interface ContentsDivCard1Props {
  value?: DataProps;
  active: boolean;
}

const ContentsDivCard1: React.FC<ContentsDivCard1Props> = ({ value, active }) => {

  const {dataCard} = useDataCard()

  return (
    <ContainerCard1 active={active}>
      <p>{value?.detail || dataCard?.detail}</p>
      <hr />
      <div className="complementsContainer">
        <div className="complements">
        <span><img src={MapIcon} width={11} height={16} alt="Icone Mapa" /></span>
          <span className="bold">Endereço:</span>
          <span>{value?.address || dataCard?.address}</span>
        </div>
        <div className="complements">
        <span><img src={CallIcon} width={11} height={16} alt="Icone Telefone" /></span>
          <span className="bold">Telefone:</span>
          <span>{value?.phone || dataCard?.phone}</span>
        </div>
      </div>
    </ContainerCard1>
  );
};

export { ContentsDivCard1 };
