import styled from "styled-components";

export const useSubmenuStyles = () => {
  const SubmenuList = styled.ul`
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;

    background-color: #fff;
    list-style-type: none;
  `;

  const SubmenuItem = styled.li`
    padding: 10px 20px;
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
