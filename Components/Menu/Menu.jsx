import { useState } from "react";
import { menu } from "../../Helpers";
import Link from "next/link";
import { Hamburger } from "../Hamburger";
import {
  NavigationList,
  Navigation,
  NavigationItem,
  Overlay,
  MenuWrapper,
  NavLink,
} from "./Menu.styled";
import { useRouter } from "next/router";

export const Menu = () => {
  const router = useRouter()

  const [open, setOpen] = useState(false);
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      setOpen(!open);
    }
  };

  const handleClick = (e) => {
    if (open && e.currentTarget === e.target) {
      setOpen(!open);
    }
  };
  return (
    <MenuWrapper>
      <Hamburger open={open} setOpen={setOpen} />
      <Overlay open={open} onClick={handleBackdropClick} />
      <Navigation open={open}>
        <NavigationList>
          {menu.map((item) => (
            <NavigationItem key={item.id}>
              <Link href={item.id} passHref>
                <NavLink onClick={handleClick} className={router.pathname == item.id? "active": null}>{item.value}</NavLink>
              </Link>
            </NavigationItem>
          ))}
        </NavigationList>
      </Navigation>
    </MenuWrapper>
  );
};
