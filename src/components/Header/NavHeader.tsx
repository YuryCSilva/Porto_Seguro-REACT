import MenuNav from "../UI/MenuNav";
import { LinksMenu } from "./LinksMenu";
import { ContentsMenuMobile } from "./ContentsMenuMobile";

export function NavHeader() {
  return (
    <MenuNav>
      <LinksMenu />
      <ContentsMenuMobile />
    </MenuNav>
  );
}
