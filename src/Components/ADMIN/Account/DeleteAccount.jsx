import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { useDeleteAccount } from '../../../Shared/Hooks/Admin/useDeleteAccount';
import { toast } from 'react-hot-toast';

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
`;

const DeleteButton = styled(Button)`
  background-color: #dc3545;
  color: white;
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
  color: white;
`;

const DeleteAccount = ({ isOpen, onRequestClose, itemName = '', accountId, onDeleteSuccess }) => {
  const { deleteAccount } = useDeleteAccount();

  const handleDelete = async () => {
    console.log("Account ID to delete: ", accountId); // Depuración
    if (!accountId) {
      return toast.error('No account ID provided.');
    } 
    await deleteAccount(accountId);
    onDeleteSuccess(); // Llama a una función de éxito (puede ser para cerrar el modal o refrescar la lista)
    onRequestClose(); // Cierra el modal
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={customStyles}
    >
      <ModalContent>
        <h2>¿Seguro de eliminar a {itemName}?</h2>
        <p>No se podrá dar marcha atrás</p>
        <DeleteButton onClick={handleDelete}>Sí, eliminar</DeleteButton>
        <CancelButton onClick={onRequestClose}>Cancelar</CancelButton>
      </ModalContent>
    </Modal>
  );
};

export default DeleteAccount;
