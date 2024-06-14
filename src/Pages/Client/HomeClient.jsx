import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
// Importar imágenes
import HomeImage from '../../assets/Home2.jpg';
import Paquete1 from '../../assets/Paquete1.jpg';
import Paquete2 from '../../assets/Paquete2.jpg';
import Paquete3 from '../../assets/Paquete3.jpg';

const StyledContainer = styled(Container)`
  padding: 1.8rem;
`;

const WelcomeCard = styled(Card)`
  margin-bottom: 3rem;
  max-width: 2000px; 
  height: auto; 
  margin-left: auto;
  margin-right: auto;
`;

const WelcomeImage = styled(Card.Img)`
  max-height: 500px; 
  width: 100%;
  object-fit: cover;
`;

const VIPBenefits = styled.div`
  margin-top: 3rem;
`;

const OffersRow = styled(Row)`
  margin-top: 2rem;
`;

const OfferCard = styled(Card)`
  height: 100%; // Para que todas las tarjetas tengan la misma altura
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const OfferImage = styled(Card.Img)`
  height: 550px; // Ajusta este valor según sea necesario
  object-fit: cover;
`;

export const HomeClient = () => {
  return (
    <>
      <StyledContainer fluid>
        <WelcomeCard>
          <WelcomeImage variant="top" src={HomeImage} />
          <Card.Body>
            <Card.Title>Bienvenido a Bancubito S.A</Card.Title>
            <Card.Text>
              En Bancubito estamos comprometidos con la excelencia financiera y el bienestar de nuestros clientes. Con más de 2 semanas de experiencia en el sector bancario, nos enorgullece ser un líder en innovación y servicio personalizado. Nuestro objetivo es proporcionar soluciones financieras adaptadas a sus necesidades individuales, garantizando que cada cliente reciba la atención y los recursos necesarios para alcanzar sus metas financieras.
            </Card.Text>
            <Button variant="primary">Descubre más</Button>
          </Card.Body>
        </WelcomeCard>
        <VIPBenefits>
          <h3>Beneficios de ser miembros de Bancubito</h3>
          <p>
            Como asociado, te prometemos varios beneficios como préstamos con tasas competitivas, asesoramiento financiero personalizado, acceso a productos de inversión exclusivos y una experiencia bancaria sin igual. Además, disfrutarás de servicios de banca digital avanzada que te permitirán gestionar tus finanzas de manera eficiente desde cualquier lugar. Con nuestro compromiso de excelencia y apoyo constante, en Bancubito, tu éxito financiero es nuestra prioridad.
          </p>
          
          <h4>Explora los planes que te ofrecemos:</h4>
          <OffersRow>
            <Col md={4}>
              <OfferCard className="mb-3">
                <OfferImage variant="top" src={Paquete1} />
                <Card.Body>
                  <Card.Title>Plan cayaleño</Card.Title>
                  <Card.Text>Abre esta cuenta con Q500 mensuales</Card.Text>
                </Card.Body>
              </OfferCard>
            </Col>
            <Col md={4}>
              <OfferCard className="mb-3">
                <OfferImage variant="top" src={Paquete2} />
                <Card.Body>
                  <Card.Title>Plan Fitness</Card.Title>
                  <Card.Text>Abre esta cuenta con Q1000 mensuales</Card.Text>
                </Card.Body>
              </OfferCard>
            </Col>
            <Col md={4}>
              <OfferCard className="mb-3">
                <OfferImage variant="top" src={Paquete3} />
                <Card.Body>
                  <Card.Title>Plan Modelo</Card.Title>
                  <Card.Text>Abre esta cuenta con Q1500 mensuales o superior</Card.Text>
                </Card.Body>
              </OfferCard>
            </Col>
          </OffersRow>
        </VIPBenefits>
      </StyledContainer>
    </>
  );
};