import React from "react";

import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/arrow-right-icon.svg";

import { useSubmenuStyles } from "./styles";
import { Submenu } from "./types";

interface Props {
  id: string;
  data: Submenu[];
  closeMenu: () => void;
  closeSubmenu: () => void;
}

export const SubmenuComponent: React.FC<Props> = ({
  data,
  id,
  closeMenu,
  closeSubmenu,
}) => {
  const { SubmenuList, SubmenuItem, Header, HeaderText } = useSubmenuStyles();

  return (
    <SubmenuList id={id}>
      <CloseIcon id="close-icon" onClick={closeMenu} />

      <Header onClick={closeSubmenu}>
        <ArrowRightIcon />
        <HeaderText>{id}</HeaderText>
      </Header>

      {data.map((item) => (
        <SubmenuItem onClick={item.onClick}>{item.label}</SubmenuItem>
      ))}
    </SubmenuList>
  );
};
