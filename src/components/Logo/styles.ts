import styled from "styled-components";

export const LogoStyles = {
  Container: styled.div`
    width: auto;

    svg#full-logo {
      display: block;
      height: 30px;
      width: 140px;
    }

    svg#compact-logo {
      display: none;
      height: 20px;
      width: 100%;
    }

    @media screen and (max-width: 960px) {
      svg#full-logo {
        display: none;
      }

      svg#compact-logo {
        display: block;
      }
    }
  `,
};
