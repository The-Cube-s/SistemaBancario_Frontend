import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useUsers } from '../../Shared/Hooks/Admin/useUsers';

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
    const { users, getUsers, isFetching } = useUsers();
    const [query, setQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        if (users) {
            setFilteredUsers(
                users.filter(user =>
                    Object.values(user).some(value =>
                        value.toString().toLowerCase().includes(query.toLowerCase())
                    )
                )
            );
        }
    }, [query, users]);

    if (isFetching) {
        return <div>Loading...</div>;
    }

    return (
        <UsersAdminContainer>
            <Title>User Management</Title>
            <SearchBar
                type="text"
                placeholder="Search user by name, username, account number, phone number, job"
                onChange={e => setQuery(e.target.value)}
            />
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
                    {filteredUsers.map((user, index) => (
                        <tr key={user.id}>
                            <Td>{user.name}</Td>
                            <Td>{user.username}</Td>
                            <Td>{user.noaccount}</Td>
                            <Td>{user.phone}</Td>
                            <Td>{user.jobname}</Td>
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
                {/* Por si hay muchos usuarios (el 1ero es el por defecto)*/}
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
