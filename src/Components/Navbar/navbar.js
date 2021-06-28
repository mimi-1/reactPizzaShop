import React from "react";
import styled from "styled-components";
import {
  cupcakePink,
  cupcakeRed,
  cupcakeSalmon,
  cupcakeBlue,
  cupcakeGreen,
  chocolateBrown,
} from "../../Styles/colors";
import { Title } from "../../Styles/title";

const NavbarStyled = styled.div`
  background-color: ${cupcakeGreen};
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;
const Logo = styled(Title)`
  font-size: 2.5rem;
  color: ${cupcakeSalmon};
  text-shadow: 2px 2px 4px ${chocolateBrown};
}
`;

export const Navbar = () => {
  return (
    <NavbarStyled>
      <Logo> Vi&Mary's 🧁</Logo>
    </NavbarStyled>
  );
};
