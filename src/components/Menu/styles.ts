import styled from "styled-components";

export const useMenuStyles = () => {
  const Container = styled.div`
    svg#hamburger-icon {
      width: 22px;
      cursor: pointer;
    }
  `;

  const MenuList = styled.ul<{ show?: boolean }>`
    display: ${(props) => (props.show ? "flex" : "none")};
    list-style-type: none;

    position: absolute;
    top: 100%;
    left: 0;

    width: 100%;
    height: 100vh;

    flex-direction: column;
    align-items: center;
    padding: 120px 0;

    svg#close-icon {
      fill: #c5c5c5;

      position: absolute;
      right: 32px;
      top: 32px;

      cursor: pointer;
    }
  `;

  const MenuItemButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 260px;

    svg {
      fill: #c5c5c5;
    }
  `;

  const MenuItem = styled.li<{ color?: string; borderColor?: string }>`
    padding: 10px 20px;
    flex-direction: row;
    width: 220px;

    cursor: pointer;
    color: ${(props) => props?.color};
  `;

  return {
    Container,
    MenuList,
    MenuItem,
    MenuItemButton,
  };
};
