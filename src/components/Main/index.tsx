import Banner from "../../assets/img/mobile/Grupo_309.jpg";
import BannerDesktop from "../../assets/img/desktop/Grupo_de_máscara_14.png";
import { ImageChoice } from "../ImageChoice";
import { HospitalsHighlights, ImgSection } from "./styles";
import Button2 from "../Buttons/Button2";
import TitleCard from "./titleCard";
import { Cards1 } from "../Cards";

const Main: React.FC = () => {
  return (
    <main>
      <ImgSection>
        <ImageChoice
          src={Banner}
          srcSetDesktop={BannerDesktop}
          srcSetMobile={Banner}
        />
        <div className="ImgContents">
          <h1>
            Conforto e qualidade para levar bem-estar com alto padrão de
            atendimento a seus funcionários.
          </h1>
          <hr />
          <span className="planGoldHeader">
          Conheça o plano Ouro da Porto Seguro Saúde.
          </span>
          <div className="valueSection">
            <div className="ContentValue">
             <span>A partir de</span> 
             <span className="currency">R$</span>
              <span className="value">255</span>
              <span className="currency">,65*</span>
            </div>
            <Button2 color="#F7B53D">Ver Mais</Button2>
          </div>
          <span className="valueRefer">*Valor referente ao plano Ouro Copar Q (ANS: 481.277/18-8) de 3 à 9 vidas, com 20% de copart. com faixa etária entre 0 e 18 anos. Sem IOF. Promoção válida até 30 de abril de 2021.</span>
        </div>
      </ImgSection>

      <HospitalsHighlights>
        <TitleCard>Hospitais em destaque</TitleCard>
        <p>Contando com os melhores hospitais do Rio de Janeiro, o plano Ouro dispõe para sua empresa as redes mais referenciadas com diversos benefícios para que você tenha um atendimento totalmente personalizado.</p>
        {}
      </HospitalsHighlights>
    </main>
  );
};

export default Main;
