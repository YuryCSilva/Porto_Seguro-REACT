import { useState } from "react";
import NorteSulLogo from "../../assets/img/mobile/logo-Norte-a-Sul.png";
import NorteSulLogoDesktop from "../../assets/img/desktop/logo-Norte-a-Sul.png";
import PortoSeguroLogo from "../../assets/img/mobile/porto_seguro.png";
import PortoSeguroLogoDesktop from "../../assets/img/desktop/porto_seguro.png";
import { Menu, MenuNav, Toggle } from "./styles";
import { ImageChoice } from "../ImageChoice";
import ContentsMenu from "../CallWithUs";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  const [clickUser, setClickUser] = useState(false);

  const clickChange = () => {
    setClickUser(clickUser ? false : true);
  };
  return (
    <header>
      <Menu>
        <div className="imageContainer">
          <ImageChoice
            src={NorteSulLogo}
            srcSetDesktop={NorteSulLogoDesktop}
            srcSetMobile={NorteSulLogo}
          />
          <ImageChoice
            src={PortoSeguroLogo}
            srcSetDesktop={PortoSeguroLogoDesktop}
            srcSetMobile={PortoSeguroLogo}
          />
        </div>
        <Toggle active={clickUser} onClick={clickChange}>
          <span></span>
          <span></span>
          <span></span>
        </Toggle>
        <MenuNav active={clickUser}>
          <ul>
            <li>
              <Link smooth duration={500} to="sobre" style={{cursor: 'pointer'}}>
                <span>Sobre</span>
              </Link>
            </li>
            <li>
              <Link smooth duration={500} to="hospitais" style={{cursor: 'pointer'}}>
                <span>Hospitais</span>
              </Link>
            </li>
            <li>
              <Link smooth duration={500} to="beneficios" style={{cursor: 'pointer'}}>
                <span>Benefícios</span>
              </Link>
            </li>
            <li>
              <Link smooth duration={500} to="servicosEspeciais" style={{cursor: 'pointer'}}>
                <span>Serviços especiais</span>
              </Link>
            </li>
            <li>
              <Link smooth duration={500} to="contato" style={{cursor: 'pointer'}}>
                <span>Contato</span>
              </Link>
            </li>
          </ul>

          <ContentsMenu />
        </MenuNav>
      </Menu>
    </header>
  );
}
