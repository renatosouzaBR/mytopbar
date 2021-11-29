import styled from "styled-components";

export const useMenuStyles = () => {
  const Container = styled.div`
    svg#hamburger-icon {
      display: none;
    }

    @media screen and (max-width: 960px) {
      svg#hamburger-icon {
        display: block;
        width: 22px;

        cursor: pointer;
      }
    }
  `;

  const MenuList = styled.ul`
    list-style-type: none;
    position: relative;

    display: flex;
    gap: 10px;

    @media screen and (max-width: 960px) {
      display: none;
    }
  `;

  const MenuItem = styled.li<{ color?: string; borderColor?: string }>`
    padding: 10px 20px;
    cursor: pointer;

    color: ${(props) => props?.color};

    :hover {
      border-bottom: 2px solid
        ${(props) => props?.borderColor || "rgba(0, 0, 0, 0.2)"};

      ul {
        display: block;
      }
    }
  `;

  const SubmenuList = styled.ul`
    display: none;
    position: absolute;
    left: 0;
    top: 100%;

    background-color: #fff;
    list-style-type: none;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  `;

  const SubmenuItem = styled.li<{ color?: string; borderColor?: string }>`
    padding: 10px 20px;
    cursor: pointer;

    color: ${(props) => props?.color};

    :hover {
      border-left: 4px solid
        ${(props) => props?.borderColor || "rgba(0, 0, 0, 0.2)"};
    }
  `;

  return {
    Container,
    MenuList,
    MenuItem,
    SubmenuList,
    SubmenuItem,
  };
};
