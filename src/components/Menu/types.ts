import { Submenu } from "../Submenu/types";

interface MenuItem {
  label: string;
  submenu?: Submenu[];
  onClick?: () => void;
}

export interface MenuProps {
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

  items: MenuItem[];
}
