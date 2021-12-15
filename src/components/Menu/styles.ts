import styled from "styled-components";

export const useMenuStyles = () => {
  const Container = styled.div<{
    hamburgerIconColor: string;
  }>`
    svg#hamburger-icon {
      width: 22px;
      cursor: pointer;

      color: ${(props) => props.hamburgerIconColor};
    }

    div.separator-menu {
      width: 220px;
    }

    @media screen and (min-width: 961px) {
      height: 80%;

      div.separator-menu {
        display: none;
      }

      svg#hamburger-icon {
        display: none;
      }
    }
  `;

  const MenuList = styled.ul<{
    show?: boolean;
    bgColor: string;
    textColor: string;
    fontSize: string;
    fontWeight: string;
    closeButtonColor: string;
  }>`
    display: ${(props) => (props.show ? "flex" : "none")};
    background-color: ${(props) => props.bgColor};

    list-style-type: none;

    position: absolute;
    top: 101%;
    left: 0;

    width: 100%;
    height: 100vh;

    flex-direction: column;
    align-items: center;
    padding: 120px 0;

    svg#close-icon {
      fill: ${(props) => props.closeButtonColor};

      position: absolute;
      right: 32px;
      top: 32px;

      cursor: pointer;
    }

    ul {
      background-color: ${(props) => props.bgColor};
    }

    svg {
      fill: ${(props) => props.textColor};
    }

    li,
    span {
      color: ${(props) => props.textColor};
      font-size: ${(props) => props.fontSize};
      font-weight: ${(props) => props.fontWeight};
    }

    @media screen and (min-width: 961px) {
      background-color: transparent;
      display: flex;
      height: 100%;
      width: auto;

      position: relative !important;
      top: 0;

      flex-direction: row;
      justify-content: center;
      padding: 0;
      gap: 30px;

      svg {
        display: none;
      }
    }
  `;

  const MenuItemButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 260px;

    @media screen and (min-width: 961px) {
      width: auto;
      height: 100%;

      :hover {
        ul {
          display: flex;
        }
      }
    }
  `;

  const MenuItem = styled.li<{
    textColor: string;
    fontSize: string;
    fontWeight: string;
  }>`
    padding: 10px 20px;
    flex-direction: row;
    width: 220px;

    cursor: pointer;

    @media screen and (min-width: 961px) {
      font-size: ${(props) => props.fontSize} !important;
      font-weight: ${(props) => props.fontWeight} !important;
      color: ${(props) => props.textColor} !important;

      width: auto;
      padding: 4px 10px;
    }
  `;

  return {
    Container,
    MenuList,
    MenuItem,
    MenuItemButton,
  };
};
