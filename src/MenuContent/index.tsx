import React from "react";
import "./styles.css";

interface Submenu {
  label: string;
}

interface Menu {
  label: string;
  submenu?: Submenu[];
}

interface Props {
  menu: Menu[];
}
export const MenuContent: React.FC<Props> = ({ menu }) => {
  return (
    <ul id="menu">
      {menu.map((item) => {
        return (
          <li className={item.submenu && "menu-hover"}>
            {item.label}

            {item.submenu && (
              <ul className="submenu">
                {item.submenu.map((item) => (
                  <li>{item.label}</li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};
