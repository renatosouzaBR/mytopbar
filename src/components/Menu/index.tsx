import React, { useState } from "react";

import { useMenuStyles } from "./styles";
import { MenuProps } from "./types";

import { ReactComponent as HamburgerIcon } from "../../assets/hamburger-icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/arrow-right-icon.svg";
import { SubmenuComponent } from "../Submenu";

export const MenuComponent: React.FC<MenuProps> = ({
  menuStyle,
  submenuStyle,
  responsiveMenuStyle,
  items,
}) => {
  const { Container, MenuList, MenuItem, MenuItemButton } = useMenuStyles();

  const [showMenu, setShowMenu] = useState(false);
  const [submenuLabel, setSubmenuLabel] = useState("");

  function handleOpenCloseMenu() {
    setSubmenuLabel("");
    setShowMenu((value) => !value);
  }

  return (
    <Container id="menu" {...responsiveMenuStyle}>
      <HamburgerIcon id="hamburger-icon" onClick={handleOpenCloseMenu} />

      <MenuList show={showMenu} {...responsiveMenuStyle}>
        <CloseIcon id="close-icon" onClick={handleOpenCloseMenu} />

        {items.map((item, index) => (
          <MenuItemButton key={index}>
            <MenuItem
              onClick={() => setSubmenuLabel(item.label)}
              {...menuStyle}
            >
              {item.label}
            </MenuItem>

            {item.submenu && <ArrowRightIcon />}

            {item.submenu && (
              <SubmenuComponent
                submenuStyle={submenuStyle}
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
