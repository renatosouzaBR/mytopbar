interface Submenu {
  label: string;
}

interface Menu {
  label: string;
  submenu?: Submenu[];
}

export interface MenuContentProps {
  menu: Menu[];
}
