import Modal from 'react-modal';
import styled from 'styled-components';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const ModalContent = styled.div`
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  background-color: #fff;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  background-color: #6c757d;
  color: white;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Image = styled.img`
  max-width: 300px; // Tamaño máximo de la imagen
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled(Button)`
  background-color: #007bff;
  &:hover {
    background-color: #0056b3;
  }
`;

const ViewProduct = ({ isOpen, onRequestClose, product }) => {
  if (!product) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false} style={customStyles}>
      <ModalContent>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        {product.imagesProduct && product.imagesProduct.length > 0 && (
          <ImageContainer>
            <Image src={`http://localhost:2656${product.imagesProduct[0]}`} alt={product.name} />
          </ImageContainer>
        )}
        <CloseButton onClick={onRequestClose}>Close</CloseButton>
      </ModalContent>
    </Modal>
  );
};

export default ViewProduct;
