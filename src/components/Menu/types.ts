import { SeparatorProps } from "../SeparatorMenu/types";
import { Submenu } from "../Submenu/types";

interface MenuComponent {
  wrapper: React.ReactNode;
}

interface MenuItem {
  label: string;
  submenu?: (Submenu | SeparatorProps)[];
  onClick?: () => void;
}

export interface MenuOptions {
  menuStyle: {
    textColor: string;
    fontSize: string;
    fontWeight: string;
  };

  submenuStyle: {
    textColor: string;
    fontSize: string;
    fontWeight: string;
    bgColor: string;
    hoverColor: string;
    hoverBorderLeftColor: string;
  };

  responsiveMenuStyle: {
    hamburgerIconColor: string;
    closeButtonColor: string;
    bgColor: string;
    textColor: string;
    fontSize: string;
    fontWeight: string;
  };

  items: (MenuItem | SeparatorProps)[];
}

export type MenuProps = MenuOptions | MenuComponent | null;
