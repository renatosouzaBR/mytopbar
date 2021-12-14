import React, { useState } from "react";

import { useMenuStyles } from "./styles";
import { MenuOptions, MenuProps } from "./types";

import { ReactComponent as HamburgerIcon } from "../../assets/hamburger-icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/arrow-right-icon.svg";
import { SubmenuComponent } from "../Submenu";

const MenuContainer = (props: MenuOptions) => {
  const { Container, MenuList, MenuItem, MenuItemButton } = useMenuStyles();
  const [showMenu, setShowMenu] = useState(false);
  const [submenuLabel, setSubmenuLabel] = useState("");

  function handleOpenCloseMenu() {
    setSubmenuLabel("");
    setShowMenu((value) => !value);
  }

  return (
    <Container id="menu" {...props.responsiveMenuStyle}>
      <HamburgerIcon id="hamburger-icon" onClick={handleOpenCloseMenu} />

      <MenuList show={showMenu} {...props.responsiveMenuStyle}>
        <CloseIcon id="close-icon" onClick={handleOpenCloseMenu} />

        {props.items.map((item, index) => (
          <MenuItemButton key={index}>
            <MenuItem
              onClick={() => setSubmenuLabel(item.label)}
              {...props.menuStyle}
            >
              {item.label}
            </MenuItem>

            {item.submenu && <ArrowRightIcon />}

            {item.submenu && (
              <SubmenuComponent
                submenuStyle={props.submenuStyle}
                show={window.innerWidth > 960 || item.label === submenuLabel}
                id={item.label}
                data={item.submenu}
                closeMenu={handleOpenCloseMenu}
                closeSubmenu={() => setSubmenuLabel("")}
              />
            )}
          </MenuItemButton>
        ))}
      </MenuList>
    </Container>
  );
};

export const MenuComponent: React.FC<MenuProps> = (props) =>
  "wrapper" in props ? <>{props.wrapper}</> : <MenuContainer {...props} />;
