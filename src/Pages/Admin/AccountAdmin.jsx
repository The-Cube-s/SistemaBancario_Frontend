import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAccounts } from '../../Shared/Hooks/Admin/useAccounts';
import ViewAccount from '../../Components/ADMIN/Account/ViewAccount';
import DeleteModal from '../../Components/ADMIN/User/DeleteModal';

const AccountAdminContainer = styled.div`
  padding: 20px;
  color: #000;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #343a40;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
  background-color: #000;
  color: #fff;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  border-radius: 5px;
  overflow: hidden;
`;

const Thead = styled.thead`
  background-color: #343a40;
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #495057;
  color: #fff;
`;

const Tbody = styled.tbody`
  tr {
    background-color: #fff;
    &:nth-child(even) {
      background-color: #f1f1f1;
    }
    &:hover {
      background-color: #e9ecef;
    }
  }
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #dee2e6;
  color: #495057;
`;

const Button = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  
  span {
    margin: 0 5px;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #343a40;
    color: #fff;

    &:hover {
      background-color: #495057;
    }

    &.active {
      background-color: #007bff;
    }
  }
`;

export const AccountAdmin = () => {
  const { accounts, getAccount, isFetching } = useAccounts();
  const [query, setQuery] = useState('');
  const [filteredAccounts, setFilteredAccounts] = useState([]);
  const [modalState, setModalState] = useState({
    isDeleteOpen: false,
    isViewOpen: false,
    selectedAccount: null,
  });

  useEffect(() => {
<<<<<<< HEAD
    getAccount();
=======
    getAccount ();
>>>>>>> 2233372f38a746db2f6406dca0dc22c00c9086e2
  }, []);

  useEffect(() => {
    if (accounts) {
<<<<<<< HEAD
      console.log('Accounts:', accounts); // Depuración
=======
>>>>>>> 2233372f38a746db2f6406dca0dc22c00c9086e2
      setFilteredAccounts(
        accounts.filter(account =>
          Object.values(account).some(value =>
            value.toString().toLowerCase().includes(query.toLowerCase())
          )
        )
      );
    }
  }, [query, accounts]);

  const openModal = (type, account) => {
    console.log('Opening modal for account:', account); // Depuración
    setModalState({
      ...modalState,
      [`is${type}Open`]: true,
      selectedAccount: account,
    });
  };

  const closeModal = (type) => {
    setModalState({
      ...modalState,
      [`is${type}Open`]: false,
      selectedAccount: null,
    });
  };

  const handleDelete = () => {
    // Implementar la lógica de eliminación aquí
    closeModal('Delete');
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <AccountAdminContainer>
      <Title>Account Management</Title>
      <SearchBar
        type="text"
        placeholder="Search account by noaccount, balance, typeofaccount, user, favorites"
        onChange={e => setQuery(e.target.value)}
      />
      <Table>
        <Thead>
          <tr>
            <Th>No.Account</Th>
            <Th>Balance</Th>
            <Th>Type of Account</Th>
            <Th>User</Th>
            <Th>Operations</Th>
          </tr>
        </Thead>
        <Tbody>
          {filteredAccounts.map((account) => (
            <tr key={account._id}> {/* Asegurarse que el user _id se este usando correctamente en la base de datos */}
              <Td>{account.noaccount}</Td>
              <Td>{account.balance}</Td>
              <Td>{account.typeofaccount}</Td>
              <Td>{account.user}</Td>
              <Td>
                <Button onClick={() => openModal('View', account)}>View Account</Button>
                <Button onClick={() => openModal('Delete', account)}>Delete</Button>
              </Td>
            </tr>
          ))}
        </Tbody>
      </Table>
      <Pagination>
        <span className="active">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </Pagination>
      <DeleteModal
        isOpen={modalState.isDeleteOpen}
        onRequestClose={() => closeModal('Delete')}
        itemName={modalState.selectedAccount?.noaccount}//Se coloco el noaccount para dar referencia a la cuenta que va eliminar 
        onDelete={handleDelete}
      />
      <ViewAccount
        isOpen={modalState.isViewOpen}
        onRequestClose={() => closeModal('View')}
        account={modalState.selectedAccount}
      />
    </AccountAdminContainer>
  );
};

export default AccountAdmin;
