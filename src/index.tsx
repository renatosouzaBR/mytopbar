import React from "react";

import { Logo } from "./components/Logo";
import { MenuComponent } from "./components/Menu";
import { LogoProps } from "./components/Logo/types";
import { MenuProps } from "./components/Menu/types";
import { UserMenu } from "./components/UserMenu";
import { MyTopbarStyles } from "./styles";

interface Props extends LogoProps, MenuProps {
  barOptions: {
    height: number;
    maxWidth: number;
  };
}

export const MyTopbar = ({ barOptions, logo, menu }: Props): JSX.Element => {
  return (
    <MyTopbarStyles.Container bgColor={menu.bgColor} height={barOptions.height}>
      <MyTopbarStyles.Content maxWidth={barOptions.maxWidth}>
        <Logo logo={logo} />

        <MenuComponent menu={menu} />

        <UserMenu />
      </MyTopbarStyles.Content>
    </MyTopbarStyles.Container>
  );
};
