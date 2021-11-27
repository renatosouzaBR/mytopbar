import React, { CSSProperties } from "react";
import "./styles.css";
import "./responsive.css";
import { MenuContentProps } from "./types";

import { ReactComponent as HamburgerIcon } from "../assets/hamburger-icon.svg";

export const MenuContent: React.FC<MenuContentProps> = ({ menu }) => {
  const liStyle = (textColor: string, borderColor: string): CSSProperties => ({
    color: textColor,
    borderColor: borderColor,
  });

  return (
    <>
      <HamburgerIcon id="hamburger-icon" />
      <ul id="menu">
        {menu.map((item) => {
          return (
            <li
              className={item.submenu && "menu-hover"}
              style={
                item.style &&
                liStyle(item.style?.textColor, item.style?.borderColor)
              }
              onClick={item.onClick}
            >
              {item.label}

              {item.submenu && (
                <ul className="submenu">
                  {item.submenu.map((subitem) => (
                    <li
                      style={
                        item.style &&
                        liStyle(item.style?.textColor, item.style?.borderColor)
                      }
                      onClick={subitem.onClick}
                    >
                      {subitem.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};
