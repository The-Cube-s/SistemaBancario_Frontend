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

const ViewProduct = ({ isOpen, onRequestClose, product = {} }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={customStyles}
    >
      <ModalContent>
        <h2>Información del Producto</h2>
        {product ? (
          <>
            {/* Info que mostrara o extraera de la page de User (es automatico osea que solo puedes colocar lo que quieras y ya)*/}
            <p><strong>Nombre:</strong> {product.name}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> {product.price}</p>
            
          </>
        ) : (
          /* Por si no hay datos el fetching mostrara loading*/
          <p>Loading...</p>
        )}
        <Button onClick={onRequestClose}>Cerrar</Button>
      </ModalContent>
    </Modal>
  );
};

export default ViewProduct;