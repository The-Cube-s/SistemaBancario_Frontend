import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavbarContainer = styled.nav`
  background-color: #343a40;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  font-size: 16px;
  &:hover {
    color: #adb5bd;
  }
`;
 
export const Navbar = () => {
    return (
        <NavbarContainer>
          <Logo>Banco</Logo>
          <NavLinks>
            <NavLink to="/cuentas">Cuentas</NavLink>
            <NavLink to="/transferencias">Transferencias</NavLink>
            <NavLink to="/creditos">Créditos</NavLink>
            <NavLink to="/depositos">Depósitos</NavLink>
            <NavLink to="/productos">Productos</NavLink>
          </NavLinks>
        </NavbarContainer>
      );
    };