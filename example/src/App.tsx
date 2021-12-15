import React from "react";

import { MyTopbar } from "mytopbar";
import { ReactComponent as FullLogo } from "./assets/logo.svg";
import { ReactComponent as CompactLogo } from "./assets/compact-logo.svg";

export const App: React.FC = () => {
  return (
    <MyTopbar
      /* Configurações da logo complete e compacta */
      logo={{
        svgFullLogo: FullLogo,
        svgCompactLogo: CompactLogo,
        logoUrl: "/",
      }}
      /* Configuração da barra principal */
      barOptions={{
        height: 60,
        maxWidth: 1366,
        bgColor: "#37AD8C",
      }}
      /* Configuraçãp do menu principal */
      menuOptions={{
        /* Configuraçãp do menu e submenu com responsividae */
        responsiveMenuStyle: {
          hamburgerIconColor: "#FFF",
          bgColor: "#37AD8C",
          closeButtonColor: "#FFF",
          fontSize: "24px",
          fontWeight: "600",
          textColor: "#FFF",
        },

        /* Configuraçãp do submenu da barra principal sem responsividade */
        menuStyle: {
          textColor: "#FFF",
          fontWeight: "500",
          fontSize: "15px",
        },

        /* Configuraçãp do menu da barra principal sem responsividade */
        submenuStyle: {
          bgColor: "#FFF",
          fontSize: "14px",
          fontWeight: "500",
          textColor: "rgb(64, 64, 64)",
          hoverBorderLeftColor: "#37AD8C",
          hoverColor: "rgba(0, 0, 0, 0.05)",
        },

        items: [
          {
            label: "Cadastros",
            submenu: [
              { label: "Clientes" },
              { separator: true },
              { label: "Produtos" },
            ],
          },
          { label: "Financeiro" },
          { separator: true },
          { label: "Estoque" },
        ],
      }}
      /* Configuração do menu opções de avatar */
      userMenuOptions={{
        avatarStyle: {
          buttonColor: "#FFF",
          buttonBorderColor: "#FFF",
        },
        menuStyle: {
          bgColor: "#FFF",
          hoverColor: "rgba(0, 0, 0, 0.05)",
          hoverBorderLeftColor: "#37AD8C",
          textColor: "#363636",
          fontSize: "12px",
          fontWeight: "400",
        },
        items: [
          { label: "Configurações", onClick: () => console.log("clicou") },
          { separator: true },
          { label: "Perfil", onClick: () => console.log("clicou") },
          { label: "Sair", onClick: () => console.log("clicou") },
        ],
      }}
    />
  );
};
