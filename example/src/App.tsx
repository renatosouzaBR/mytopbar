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
        bgColor: "#FFF",
      }}
      /* Configuraçãp do menu principal */
      menuOptions={{
        /* Configuraçãp do menu e submenu com responsividae */
        responsiveMenuStyle: {
          hamburgerIconColor: "rgb(64, 64, 64)",
          bgColor: "#FFF",
          closeButtonColor: "#c4c4c4",
          fontSize: "24px",
          fontWeight: "600",
          textColor: "rgb(64, 64, 64)",
        },

        /* Configuraçãp do submenu da barra principal sem responsividade */
        menuStyle: {
          textColor: "rgb(64, 64, 64)",
          fontWeight: "500",
          fontSize: "16px",
          selectedMenuColor: "#FA00FF",
        },

        /* Configuraçãp do menu da barra principal sem responsividade */
        submenuStyle: {
          bgColor: "#FFF",
          fontSize: "14px",
          fontWeight: "500",
          textColor: "rgb(64, 64, 64)",
          hoverBorderLeftColor: "rgb(64, 64, 64)",
          hoverColor: "rgba(0, 0, 0, 0.05)",
        },

        items: [
          {
            label: "Cadastros",
            submenu: [
              {
                label: "Clientes",
                onClick: () => console.log("Cadastro de clientes"),
              },
              { separator: true },
              { label: "Produtos" },
            ],
          },
          { label: "Financeiro", onClick: () => console.log("Financeiro") },
          { separator: true },
          { label: "Estoque", onClick: () => console.log("Estoque") },
        ],
      }}
      /* Configuração do menu opções de avatar */
      userMenuOptions={{
        avatarStyle: {
          buttonColor: "#FA00FF",
          buttonBorderColor: "#FA00FF",
        },
        menuStyle: {
          bgColor: "#FFF",
          hoverColor: "rgba(0, 0, 0, 0.05)",
          hoverBorderLeftColor: "rgb(64, 64, 64)",
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
