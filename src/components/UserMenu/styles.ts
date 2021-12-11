import styled from "styled-components";

export const useUserMenuStyles = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;

    height: 100%;
    padding: 0 10px;

    position: relative;
    cursor: pointer;

    :hover {
      div#menu-container {
        display: flex;
      }
    }
  `;

  const Button = styled.div<{ buttonColor: string; buttonBorderColor: string }>`
    display: flex;
    align-items: center;
    gap: 6px;

    border: 1px solid ${(props) => props.buttonBorderColor};
    padding: 6px 8px;
    border-radius: 5px;

    svg {
      fill: ${(props) => props.buttonColor};
    }
  `;

  const Menus = styled.div`
    position: absolute;
    top: 100%;
    right: 0;

    display: none;
    flex-direction: column;
  `;

  const TriangleIcon = styled.div<{ bgColor: string }>`
    width: 0;
    height: 0;

    border: 6px solid transparent;
    border-top: 0;
    border-bottom: 10px solid ${(props) => props.bgColor};

    align-self: flex-end;
    margin-right: 10px;
    z-index: 1;
  `;

  const List = styled.ul<{ bgColor: string }>`
    list-style-type: none;
    border-radius: 4px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);

    padding: 10px 0;
    background-color: ${(props) => props.bgColor};
  `;

  const ListItem = styled.li<{
    textColor: string;
    hoverColor: string;
    hoverBorderLeftColor: string;
    fontSize: string;
    fontWeight: string;
  }>`
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    color: ${(props) => props.textColor};

    padding: 10px 25px;
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.hoverColor};
      border-left: 6px solid ${(props) => props.hoverBorderLeftColor};
      padding-left: 19px;
    }
  `;

  return {
    Container,
    Button,
    List,
    ListItem,
    Menus,
    TriangleIcon,
  };
};
