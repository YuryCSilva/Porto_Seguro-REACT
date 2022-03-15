import Menu from "../UI/Menu/index";
import NorteSulLogo from "../../assets/img/logo-Norte-a-Sul.png";
import PortoSeguroLogo from "../../assets/img/porto_seguro.png";
import Toggle from "../UI/Toggle";
import { useState } from "react";

export function MenuHeader() {
    const [clickUser, setClickUser] = useState(false)

    const clickChange = () => {
        setClickUser(clickUser? false : true)
    }
  return (
    <Menu>
      <div>
        <img src={NorteSulLogo} alt="Logo Norte a Sul" />
        <img src={PortoSeguroLogo} alt="Logo Porto Seguro" />
      </div>
      <Toggle active={clickUser} clickEvent={clickChange} />
    </Menu>
  );
}
