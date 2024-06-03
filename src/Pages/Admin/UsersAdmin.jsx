<<<<<<< HEAD
import React from 'react'

export const UsersAdmin = () => {
  return (
    <div>UsersAdmin</div>
  )
}
=======
import React from 'react';
import styled from 'styled-components';

const UsersAdminContainer = styled.div`
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
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  border-radius: 5px;
  overflow: hidden;
  justify-content: center;
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

export const UsersAdmin = () => {
  const users = [
    { name: 'Samantha Williams', username: 'sammy.1982', accountNumber: '****1234', phoneNumber: '123-456-7890', job: 'gamer' },
    { name: 'Michael Johnson', username: 'mike.johnson', accountNumber: '****5678', phoneNumber: '234-567-8901', job: 'gamer' },
    { name: 'Emma Thompson', username: 'emma.t', accountNumber: '****9101', phoneNumber: '345-678-9012', job: 'gamer' },
    { name: 'Christopher Davis', username: 'chris.davis', accountNumber: '****1121', phoneNumber: '456-789-0123', job: 'gamer' },
    { name: 'Jessica Brown', username: 'jess.brown', accountNumber: '****3141', phoneNumber: '567-890-1234', job: 'gamer' },
  ];

  return (
    <UsersAdminContainer>
      <Title>User Management</Title>
      <SearchBar type="text" placeholder="Search user by name, username, account number, phone number, job" />
      <Table>
        <Thead>
          <tr>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Account Number</Th>
            <Th>Phone Number</Th>
            <Th>Job</Th>
            <Th>Operations</Th>
          </tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <Td>{user.name}</Td>
              <Td>{user.username}</Td>
              <Td>{user.accountNumber}</Td>
              <Td>{user.phoneNumber}</Td>
              <Td>{user.job}</Td>
              <Td>
                <Button>View</Button>
                <Button>Edit</Button>
                <Button>Delete</Button>
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
    </UsersAdminContainer>
  );
};

export default UsersAdmin;
>>>>>>> origin/main
