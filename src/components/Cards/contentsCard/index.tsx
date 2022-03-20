import { useDataCard } from "../../../hooks/userDataCard";
import { ContainerCard1 } from "./styles";

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

  const {data} = useDataCard()

  return (
    <ContainerCard1 active={active}>
      <p>{value?.detail || data?.detail}</p>
      <hr />
      <div className="complementsContainer">
        <div className="complements">
          <span className="bold">Endereço:</span>
          <span>{value?.address || data?.address}</span>
        </div>
        <div className="complements">
          <span className="bold">Telefone:</span>
          <span>{value?.phone || data?.phone}</span>
        </div>
      </div>
    </ContainerCard1>
  );
};

export { ContentsDivCard1 };
