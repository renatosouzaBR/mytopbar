import React from "react";

import { useMenuStyles } from "./styles";
import { MenuProps } from "./types";
import { ReactComponent as HamburgerIcon } from "../assets/hamburger-icon.svg";

export const Menu: React.FC<MenuProps> = ({ menu }) => {
  const { Container, MenuList, MenuItem, SubmenuList, SubmenuItem } =
    useMenuStyles();

  return (
    <Container>
      <HamburgerIcon id="hamburger-icon" />

      <MenuList>
        {menu.map((item) => (
          <MenuItem
            color={item.style?.textColor}
            borderColor={item.style?.borderColor}
            onClick={item.onClick}
          >
            {item.label}

            {item.submenu && (
              <SubmenuList>
                {item.submenu.map((subitem) => (
                  <SubmenuItem
                    color={subitem.style?.textColor}
                    borderColor={subitem.style?.borderColor}
                    onClick={subitem.onClick}
                  >
                    {subitem.label}
                  </SubmenuItem>
                ))}
              </SubmenuList>
            )}
          </MenuItem>
        ))}
      </MenuList>
    </Container>
  );
};
