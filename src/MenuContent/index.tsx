import React from "react";
import "./styles.css";
import { MenuContentProps } from "./types";

export const MenuContent: React.FC<MenuContentProps> = ({ menu }) => {
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
