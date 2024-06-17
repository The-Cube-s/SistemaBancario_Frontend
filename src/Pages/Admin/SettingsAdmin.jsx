import { useState} from 'react';
import styled from 'styled-components';
//agregar componentes
import { RegistProduct } from '../../Components/Register/RegistProduct';
import { Deposit } from '../../Components/ADMIN/Deposits/Deposit';

const SettingsAdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
  height: 100vh;
`;

const Content = styled.div`
  width: 80%;
  margin-top: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding: 20px;
`;

const GridItem = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 1.2em;
  cursor: pointer;
`;

const BackButton = styled.button`
  margin-bottom: 20px; /* Cambiado a margin-bottom */
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
`;

const SectionContent = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 1.2em;
`;

export const SettingsAdmin = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const handleBackClick = () => {
    setActiveSection(null);
  };

  return (
    <SettingsAdminContainer>
      {activeSection === null ? (
        <Content>
          <GridContainer>
            <GridItem onClick={() => handleButtonClick('transferencias')}>Transferencias</GridItem>
            <GridItem onClick={() => handleButtonClick('depositos')}>Depósitos</GridItem>
            <GridItem onClick={() => handleButtonClick('saldos-creditos')}>Saldos y Créditos</GridItem>
            <GridItem onClick={() => handleButtonClick('producto')}>Agregar productos</GridItem>
            <GridItem onClick={() => handleButtonClick('cuenta')}>Agregar cuentas</GridItem>
          </GridContainer>
        </Content>
      ) : (
        <Content>
          <SectionContent>
            <BackButton onClick={handleBackClick}>Regresar</BackButton>
            {activeSection === 'transferencias' && <div>Contenido de Transferencias</div>}
            {activeSection === 'depositos' && < Deposit /> }
            {activeSection === 'saldos-creditos' && <div>Contenido de Saldos y Créditos</div>}
            {activeSection === 'producto' && <RegistProduct />}
            {activeSection === 'cuenta' && <div>Contenido de cuenta</div>}
          </SectionContent>
        </Content>
      )}
    </SettingsAdminContainer>
  );
};