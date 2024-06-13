import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'boxicons/css/boxicons.min.css';

const NavbarContainer = styled.nav`
  background-color: #343a40;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  /* Asegura que el navbar ocupe todo el ancho del contenedor */
`;

const Logo = styled(Link)`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #adb5bd;
  }
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

const IconLink = styled(NavLink)`
  font-size: 24px;  
  margin-left: 20px;  
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo to="/home/banco">Banco</Logo>
      <NavLinks>
        <NavLink to="/home/banco/accountClient">Cuentas</NavLink>
        <NavLink to="/home/banco/transferencias">Transferencias</NavLink>
        <NavLink to="/home/banco/historial">Historial</NavLink>
        <NavLink to="/home/banco/products">Productos</NavLink>
        <IconLink to="/home/banco/settings" className="bx bx-user-circle"></IconLink>
      </NavLinks>
    </NavbarContainer>
  );
};
