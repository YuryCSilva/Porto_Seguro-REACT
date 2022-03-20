import { Card1Container, Card2Container, Card3Container } from "./styles";
import Card from "../../assets/img/mobile/Grupo de máscara 6.png";
import { useEffect, useState } from "react";
import { ContentsDivCard1 } from "./contentsCard";
import { useDataCard } from "../../hooks/userDataCard";
import ImageCard1 from "../../assets/img/mobile/02_Recepcao_principal-860x560.png"

interface DataProps {
  id: string;
  createdAt: string;
  name: string;
  image: string;
  detail: string;
  address: string;
  phone: string | number;
}

interface Card1Props {
  values: DataProps;
}

const Cards1: React.FC<Card1Props> = ({ values }) => {
  const [clickUser, setClickUser] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const { HandleChangeData } = useDataCard();

  const clickOpenBox = () => {
    setClickUser(!clickUser);
  };

  useEffect(() => {
    clickUser ? HandleChangeData(values) : HandleChangeData(null);
  }, [clickUser]);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <Card1Container active={clickUser}>
      <img src={values.image}></img>
      <h3>{values.name}</h3>
      <button className="arrow" key={1} onClick={clickOpenBox}>
        <span></span>
        <span></span>
      </button>
      {width < 1024 && <ContentsDivCard1 value={values} active={clickUser} />}
    </Card1Container>
  );
};

const Cards2: React.FC = ({children}) => (
  <Card2Container>
    {children}
  </Card2Container>
);

const Cards3: React.FC = ({children}) => (
  <Card3Container>
    {children}
  </Card3Container>
);

export { Cards1, Cards2, Cards3 };
