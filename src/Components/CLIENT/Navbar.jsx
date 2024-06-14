import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import 'boxicons/css/boxicons.min.css';

import { useUserDetails } from '../../Shared/Hooks/useUserDetails';


const NavbarContainer = styled.nav`
  background-color: #343a40;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; 
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

const IconLink = styled.div`
  position: relative;
  font-size: 24px;  
  margin-left: 20px;
  color: #fff;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  top: 40px;
  right: 0;
  background-color: #343a40;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-width: 160px;
  border-radius: 4px;
  overflow: hidden;
`;

const DropdownItem = styled(Link)`
  color: #fff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #495057;
  }
`;

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Obtenemos logoutSys del hook useUserDetails
  const { logoutSys } = useUserDetails(); 

  const handleLogout = () => {
    logoutSys();
    
  }

  return (
    <NavbarContainer>
      <Logo to="/home/banco">Bancubito</Logo>
      <NavLinks>
        <NavLink to="/home/banco/accountClient">Cuentas</NavLink>
        <NavLink to="/home/banco/transferencias">Transferencias</NavLink>
        <NavLink to="/home/banco/historial">Historial</NavLink>
        <NavLink to="/home/banco/productsClient">Productos</NavLink>
        <IconLink onClick={toggleDropdown} ref={dropdownRef}>
          <i className="bx bx-user-circle"></i>
          <DropdownMenu show={dropdownOpen}>
            <DropdownItem to="/home/banco/settings/editProfile">Editar perfil</DropdownItem>
            <DropdownItem to="/home/banco/settings/notifications">Notificaciones</DropdownItem>
            <DropdownItem  onClick={handleLogout}>Logout</DropdownItem>
          </DropdownMenu>
        </IconLink>
      </NavLinks>
    </NavbarContainer>
  );
};