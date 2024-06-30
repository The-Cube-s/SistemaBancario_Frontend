import React from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';

const ViewProduct = ({ isOpen, onRequestClose, product }) => {
  if (!product) return null;

  return (
    <Modal show={isOpen} onHide={onRequestClose}>
      <Modal.Header closeButton>
        <Modal.Title>Información del Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Nombre: {product.name}</h5>
        <p>Descripción: {product.description}</p>
        <p>Price: {product.price}</p>
        {product.imagesProduct && product.imagesProduct.length > 0 && (
          <Carousel>
            {product.imagesProduct.map((image, index) => (
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
        <Button variant="secondary" onClick={onRequestClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewProduct;
