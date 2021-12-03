import React, { useState } from "react";

import { useMenuStyles } from "./styles";
import { MenuProps } from "./types";
import { ReactComponent as HamburgerIcon } from "../../assets/hamburger-icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/arrow-right-icon.svg";
import { SubmenuComponent } from "../Submenu";

export const MenuComponent: React.FC<MenuProps> = ({ menu }) => {
  const { Container, MenuList, MenuItem, MenuItemButton } = useMenuStyles();

  const [showMenu, setShowMenu] = useState(false);
  const [submenuLabel, setSubmenuLabel] = useState("");

  function handleOpenCloseMenu() {
    setSubmenuLabel("");
    setShowMenu((value) => !value);
  }

  return (
    <Container>
      <HamburgerIcon id="hamburger-icon" onClick={handleOpenCloseMenu} />

      <MenuList
        show={showMenu}
        bgColor={menu.bgColor}
        textColor={menu.textColor}
        textSize={menu.textSize}
        closeButtonColor={menu.closeButtonColor}
      >
        <CloseIcon id="close-icon" onClick={handleOpenCloseMenu} />

        {menu.items.map((item) => (
          <MenuItemButton key={item.label}>
            <MenuItem onClick={() => setSubmenuLabel(item.label)}>
              {item.label}
            </MenuItem>

            {item.submenu && <ArrowRightIcon />}

            {item.submenu && item.label === submenuLabel && (
              <SubmenuComponent
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
