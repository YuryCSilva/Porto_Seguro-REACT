import { Card1Container } from "./styles";
import Card from "../../assets/img/mobile/Grupo de máscara 6.png";
import { useState } from "react";

const Cards1: React.FC = ({ children }) => {
  const [clickUser, setClickUser] = useState(false);

  const clickOpenBox = () => {
    setClickUser(clickUser ? false : true);
  };

  interface Card1Props{
      active: boolean;
  }

  return (
    <Card1Container active={clickUser}>
      <img src={Card}></img>
      <h3>Hospital Copa D'Or</h3>
      <div className="arrow" key={1} onClick={clickOpenBox}>
        <span></span>
        <span></span>
      </div>
      <div className="contents">
        <p>
          O Complexo Pediátrico do Hospital Vitória conta com uma equipe de
          pronto atendimento formada por pediatras, cirurgiões e ortopedistas,
          além de profissionais de diversas subespecialidades da pediatria,
          capacitados para assistência a urgências e emergências de pacientes
          recém-nascidos e até os 18 anos de idade.
        </p>
        <hr />
        <div className="complements">
          <span className="bold">Endereço:</span><span> Av. Jorge Curi, 550 Barra da Tijuca, Rio de
          Janeiro - RJ 22775-001</span>
        </div>
        <div className="complements">
          <span className="bold">Telefone:</span><span>(21) 3263-2000</span>
        </div>
      </div>
    </Card1Container>
  );
};

export { Cards1 };
