import React from "react";
import { routes } from "../../constant";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <SNavbar>
      <NavContainer>
        <SNavbarBrand>LOGO</SNavbarBrand>
        <RightNav>
          <NavRoutes>
            {routes.map((route) => (
              <NavRoute to={route.link} key={route.name}>
                {route.name}
              </NavRoute>
            ))}
            <LoginButton>Login</LoginButton>
          </NavRoutes>
        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar;

const SNavbar = styled.nav`
  background-color: #6f07f6;
`;
const NavContainer = styled.div`
  height: 70px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const SNavbarBrand = styled.h2`
  font-size: 3rem;
`;
const RightNav = styled.div``;
const NavRoutes = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 2rem;
  align-items: center;
`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0.5rem;
  transition: 0.5s ease;

  &:hover {
    transition: 0.5s ease;
    color: black;
    background-color: white;
    box-shadow: 0px 0px 10px white;
  }
`;

const LoginButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 3rem;
  transition: 0.3s ease;

  &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: yellow;
    box-shadow: 0px 0px 10px yellow;
  }
`;
