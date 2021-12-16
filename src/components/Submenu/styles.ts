import styled from "styled-components";

export const useSubmenuStyles = () => {
  const SubmenuList = styled.ul<{
    textColor: string;
    fontSize: string;
    fontWeight: string;
    bgColor: string;
    hoverColor: string;
    hoverBorderLeftColor: string;
  }>`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1000;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px 0;

    background-color: #fff;
    list-style-type: none;

    @media screen and (min-width: 961px) {
      background-color: ${(props) => props.bgColor} !important;

      display: none;
      top: 100%;
      width: auto;
      height: auto;

      padding: 0;
      align-items: flex-start;

      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 2px;

      div#submenu-header {
        display: none;
      }

      div.separator-menu {
        display: block;
        width: 80%;
      }

      li {
        width: auto;
        font-size: ${(props) => props.fontSize} !important;
        font-weight: ${(props) => props.fontWeight} !important;
        color: ${(props) => props.textColor} !important;

        :hover {
          background-color: ${(props) => props.hoverColor};
          border-left: 6px solid ${(props) => props.hoverBorderLeftColor} !important;
          padding-left: 19px;
        }
      }
    }
  `;

  const SubmenuItem = styled.li`
    padding: 10px 25px;
    width: 220px;
    cursor: pointer;
  `;

  const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 10px 20px;
    width: 220px;
    margin: 0 0 70px 0;

    cursor: pointer;

    svg {
      transform: rotate(180deg);
    }
  `;

  const HeaderText = styled.span`
    font-size: 20px;
    font-weight: 700;
  `;

  return {
    SubmenuList,
    SubmenuItem,
    Header,
    HeaderText,
  };
};
