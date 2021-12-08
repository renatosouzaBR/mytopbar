import { Submenu } from "../Submenu/types";

interface MenuItem {
  label: string;
  submenu?: Submenu[];
  onClick?: () => void;
}

interface Menu {
  bgColor: string;
  textColor: string;
  textSize: string;
  borderColor: string;
  closeButtonColor: string;
  hamburgerIconColor: string;

  items: MenuItem[];
}

export interface MenuProps {
  menu: Menu;
}
