import { Menu } from "../Menu";
import logo from "./aalogo.svg";
import { HeaderStyled, Logo } from "./Header.styled";
import Image from "next/image";

export const Header = () => {
  return (
    <HeaderStyled>
      <Logo>
        <Image src={logo} alt="logo" />
      </Logo>
      <Menu />
    </HeaderStyled>
  );
};
