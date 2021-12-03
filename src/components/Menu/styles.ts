import styled from "styled-components";

export const useMenuStyles = () => {
  const Container = styled.div`
    svg#hamburger-icon {
      width: 22px;
      cursor: pointer;
    }
  `;

  const MenuList = styled.ul<{
    show?: boolean;
    bgColor?: string;
    textColor?: string;
    textSize?: string;
    closeButtonColor?: string;
  }>`
    display: ${(props) => (props.show ? "flex" : "none")};
    background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};

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
      fill: ${(props) =>
        props.closeButtonColor ? props.closeButtonColor : "#c5c5c5"};

      position: absolute;
      right: 32px;
      top: 32px;

      cursor: pointer;
    }

    ul {
      background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
    }

    svg {
      fill: ${(props) => (props.textColor ? props.textColor : "#c5c5c5")};
    }

    li,
    span {
      color: ${(props) => (props.textColor ? props.textColor : "#000")};
      font-size: ${(props) => (props.textSize ? props.textSize : "20px")};
      font-weight: 600;
    }
  `;

  const MenuItemButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 260px;
  `;

  const MenuItem = styled.li`
    padding: 10px 20px;
    flex-direction: row;
    width: 220px;

    cursor: pointer;
  `;

  return {
    Container,
    MenuList,
    MenuItem,
    MenuItemButton,
  };
};
