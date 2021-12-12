import React from "react";

import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/arrow-right-icon.svg";

import { useSubmenuStyles } from "./styles";
import { Submenu } from "./types";

interface Props {
  id: string;
  data: Submenu[];
  show: boolean;
  closeMenu: () => void;
  closeSubmenu: () => void;

  submenuStyle: {
    textColor: string;
    fontSize: string;
    fontWeight: string;
    bgColor: string;
    hoverColor: string;
    hoverBorderLeftColor: string;
  };
}

export const SubmenuComponent: React.FC<Props> = ({
  data,
  id,
  show,
  closeMenu,
  closeSubmenu,
  submenuStyle,
}) => {
  const { SubmenuList, SubmenuItem, Header, HeaderText } = useSubmenuStyles();

  if (!show) return null;

  return (
    <SubmenuList id={id} {...submenuStyle}>
      <CloseIcon id="close-icon" onClick={closeMenu} />

      <Header id="submenu-header" onClick={closeSubmenu}>
        <ArrowRightIcon />
        <HeaderText>{id}</HeaderText>
      </Header>

      {data.map((item, index) => (
        <SubmenuItem key={index} onClick={item.onClick}>
          {item.label}
        </SubmenuItem>
      ))}
    </SubmenuList>
  );
};
