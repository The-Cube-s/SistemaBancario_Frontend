import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal, Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { useProducts } from '../../Shared/Hooks/Admin/useProducts'; 
import Fondo from "../../assets/Fondo.jpg";
import Logo1 from "../../assets/Logo-Fetiche.png";
import Logo2 from "../../assets/Logo-Velvet.png";
import Logo3 from "../../assets/Logo-Felexi.png";
import Logo4 from "../../assets/Logo-Dennys.png";
import Logo5 from "../../assets/Logo-Macdonals.png";
import Logo6 from "../../assets/Logo-LamediaCancha.png";
import Logo7 from "../../assets/Logo-Kinal.png";
import Logo8 from "../../assets/Logo-Estancia.png";
import HelpCenterIcon from "../../assets/Logo-signo.svg";
import WhatsAppIcon from "../../assets/Logo-ViaWatsapp.svg";
import CustomerServiceIcon from "../../assets/Logo-Telefono.svg";
import LogoBanco from "../../assets/Logo-Banco.png";

export const ProductClient = () => {
  const { products, getProducts, isFetching } = useProducts();
  const [modalState, setModalState] = useState({
    isOpen: false,
    selectedProduct: null,
  });

  useEffect(() => {
    getProducts();
  }, []);

  const openModal = (product) => {
    setModalState({
      isOpen: true,
      selectedProduct: product,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      selectedProduct: null,
    });
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <FullWidthContainer>
        <InformacionesContent>
          <TextContainer>
            <PromoTitle>Promoción Bancubito S.A</PromoTitle>
            <PromoText>
              Conoce todas las promociones y descuentos al pagar con tus
              Tarjetas de Débito y Crédito con Bancubito S.A.
            </PromoText>
            <PromoButton variant="primary">¡Solicita tu tarjeta!</PromoButton>
          </TextContainer>
        </InformacionesContent>
      </FullWidthContainer>

      <StyledContainer fluid>
        <PromotionsSection>
          <PromotionsTitle>Descubre las promociones del mes de Junio</PromotionsTitle>
          <PromotionsText>
            En junio aprovecha las promociones con tus tarjetas de crédito y débito en Bancubito S.A
          </PromotionsText>
          <Carousel
            interval={null}
            prevIcon={<CarouselButton className="left">{`<`}</CarouselButton>}
            nextIcon={<CarouselButton className="right">{`>`}</CarouselButton>}
          >
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <Logo src={Logo1} alt="Fetiche" />
                <Logo src={Logo2} alt="Velvet" />
                <Logo src={Logo3} alt="Flexi" />
                <Logo src={Logo7} alt="Kinal" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <Logo src={Logo4} alt="Denny's" />
                <Logo src={Logo5} alt="McDonald's" />
                <Logo src={Logo6} alt="La Media Cancha" />
                <Logo src={Logo8} alt="La Estancia" />
              </div>
            </Carousel.Item>
          </Carousel>
          <PromotionsText>
            Descubre más haciendo clic en la imagen de tu interés
          </PromotionsText>
        </PromotionsSection>
      </StyledContainer>

      <StyledContainer fluid>
        <Row>
          {products.map(product => (
            <Col key={product._id} md={4}>
              <Card>
                <Card.Img variant="top" src={product.imagesProduct[0]} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Button variant="primary" onClick={() => openModal(product)}>Ver Producto</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </StyledContainer>

      {modalState.selectedProduct && (
        <Modal show={modalState.isOpen} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Información del Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Nombre: {modalState.selectedProduct.name}</h5>
            <p>Descripción: {modalState.selectedProduct.description}</p>
            <p>Precio: {modalState.selectedProduct.price}</p>
            {modalState.selectedProduct.imagesProduct && modalState.selectedProduct.imagesProduct.length > 0 && (
              <Carousel>
                {modalState.selectedProduct.imagesProduct.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`Product image ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      )}

      <HelpSection>
        <HelpTitle>¿Tienes dudas?</HelpTitle>
        <HelpText>Conoce nuestros canales de atención</HelpText>
        <Row className="justify-content-center">
          <Col md={4}>
            <HelpCard>
              <HelpIcon src={HelpCenterIcon} alt="Centro de ayuda" />
              <p>Centro de ayuda</p>
            </HelpCard>
          </Col>
          <Col md={4}>
            <HelpCard>
              <HelpIcon src={WhatsAppIcon} alt="Vía WhatsApp" />
              <p>Vía WhatsApp</p>
            </HelpCard>
          </Col>
          <Col md={4}>
            <HelpCard>
              <HelpIcon src={CustomerServiceIcon} alt="Servicio al Cliente" />
              <p>Servicio al Cliente</p>
            </HelpCard>
          </Col>
        </Row>
      </HelpSection>

      <FooterContainer>
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col md={3} className="text-center text-md-left">
              <img src={LogoBanco} alt="BAC" style={{ maxWidth: "100px" }} />
            </Col>
            <Col md={6} className="text-center">
              <FooterLink href="#">Cookies</FooterLink>
              <FooterLink href="#">Seguridad</FooterLink>
              <FooterLink href="#">Política de privacidad</FooterLink>
              <FooterLink href="#">Términos y condiciones</FooterLink>
              <FooterLink href="#">Memoria Anual</FooterLink>
              <FooterLink href="#">Trabaje con nosotros</FooterLink>
              <FooterLink href="#">Tarifario de corporaciones</FooterLink>
            </Col>
            <Col md={3} className="text-center text-md-right">
              <SocialIcon src="https://via.placeholder.com/30" alt="Facebook" />
              <SocialIcon src="https://via.placeholder.com/30" alt="Instagram" />
              <SocialIcon src="https://via.placeholder.com/30" alt="Twitter" />
              <SocialIcon src="https://via.placeholder.com/30" alt="YouTube" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={12} className="text-center">
              <FooterText>
                Oficinas centrales: Avenida La Reforma 9-76, zona 9
              </FooterText>
              <FooterText>
                Todos los derechos reservados. 2024© Bancubito International
                Bancubito, Inc.
              </FooterText>
            </Col>
          </Row>
        </Container>
      </FooterContainer>
    </>
  );
};

const FullWidthContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const InformacionesContent = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${Fondo});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  display: flex;
  align-items: center;
  color: white;
  @media (max-width: 768px) {
    height: auto;
    padding: 10px;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  margin-left: 20px;
  max-width: 50%;
  @media (max-width: 768px) {
    margin-left: 0;
    max-width: 100%;
  }
`;

const PromoTitle = styled.h2`
  font-size: 48px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const PromoText = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const PromoButton = styled(Button)`
  font-size: 18px;
  padding: 10px 20px;
  background-color: orange;
  border-color: orange;

  &:hover {
    background-color: darkorange;
    border-color: darkorange;
  }
`;

const StyledContainer = styled(Container)`
  padding: 1.5rem;
`;

const PromotionsSection = styled.div`
  text-align: center;
  padding: 2rem 0;
`;

const PromotionsTitle = styled.h3`
  font-size: 36px;
  margin-bottom: 1rem;
`;

const PromotionsText = styled.p`
  font-size: 18px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Logo = styled.img`
  max-width: 150px;
  cursor: pointer;
  margin: 0 10px;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    max-width: 100px;
    margin: 10px;
  }
`;

const CarouselButton = styled(Button)`
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  color: white;
  border: none;

  &:hover {
    background-color: black;
  }

  &:before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-width: 2px 2px 0 0;
    border-style: solid;
    transform: rotate(135deg);
    margin: 3px;
  }

  &.left {
    &:before {
      transform: rotate(45deg);
    }
  }

  &.right {
    &:before {
      transform: rotate(-135deg);
    }
  }
`;

const HelpSection = styled.section`
  text-align: center;
  padding: 2rem 0;
`;

const HelpTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`;

const HelpText = styled.p`
  font-size: 18px;
  color: #6c757d;
`;

const HelpIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const HelpCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  margin: 0.5rem;
`;

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 2rem 0;
`;

const FooterLink = styled.a`
  color: #212529;
  margin: 0 0.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 0.5rem;
  cursor: pointer;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #6c757d;
  margin: 0;
`;

export default ProductClient;
