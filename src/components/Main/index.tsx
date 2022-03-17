import Banner from "../../assets/img/mobile/Grupo_309.png";
import BannerDesktop from "../../assets/img/desktop/Grupo_de_máscara_14.png";
import { ImageChoice } from "../ImageChoice";
import { ImgSection } from "./styles";

const Main: React.FC = () => {
  return (
    <main>
      <ImgSection>
        <ImageChoice
          src={Banner}
          srcSetDesktop={BannerDesktop}
          srcSetMobile={Banner}
        />
      </ImgSection>
    </main>
  );
};

export default Main;
