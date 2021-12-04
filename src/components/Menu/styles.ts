import styled from "styled-components";

export const useMenuStyles = () => {
  const Container = styled.div<{ hamburgerIconColor?: string }>`
    svg#hamburger-icon {
      width: 22px;
      cursor: pointer;

      color: ${(props) =>
        props.hamburgerIconColor ? props.hamburgerIconColor : "#00000090"};
    }

    /* Responsividade */
    @media screen and (min-width: 961px) {
      svg#hamburger-icon {
        display: none;
      }

      > ul {
        display: flex;
        height: auto;
        width: auto;

        position: relative;
        flex-direction: row;
        justify-content: center;
        padding: 0;
        gap: 14px;

        svg {
          display: none;
        }

        > div {
          width: auto;

          > li {
            width: auto;
            padding: 4px 10px;
          }

          ul {
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

            li {
              width: auto;

              :hover {
                padding: 10px 20px 10px 14px;
                border-left: 6px solid #fff;
              }
            }
          }

          :hover {
            border-bottom: 2px solid #fff;

            > li {
              padding: 4px 10px 2px 10px;
            }

            > ul {
              display: flex;
            }
          }
        }
      }
    }
    /* Responsividade */
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
    top: 101%;
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
