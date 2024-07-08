import React, { useEffect } from 'react';
import { useTransferInfo } from '../../Shared/Hooks/Client/useTransferInfo';
import { useDepositInfo } from '../../Shared/Hooks/Client/useDepositInfo';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    font-family: Arial, sans-serif;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
`;

const Th = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    background-color: #f2f2f2;
    color: black;
`;

const Td = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
`;

const Tr = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }

    &:hover {
        background-color: #ddd;
    }
`;

const Header = styled.h2`
    margin-bottom: 10px;
`;

const Balance = styled.p`
    font-weight: bold;
`;

export const MyTransactions = () => {
    const { transfer, saldo, getTransfers, isFetching: isFetchingTransfers } = useTransferInfo();
    const { deposits, getDeposits, isFetching: isFetchingDeposits } = useDepositInfo();

    useEffect(() => {
        getTransfers();
        getDeposits();
    }, []);

    const isFetching = isFetchingTransfers || isFetchingDeposits;

    return (
        <Container>
            <Header>Mis Transacciones</Header>
            <Balance>Saldo: {saldo}</Balance>
            {isFetching ? (
                <p>Cargando transacciones y depósitos...</p>
            ) : (
                <Table>
                    <thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Fecha</Th>
                            <Th>Monto</Th>
                            <Th>Tipo</Th>
                            <Th>Cuenta de destino</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {Array.isArray(transfer) && transfer.map((tran) => (
                            <Tr key={tran._id}>
                                <Td>{tran._id}</Td>
                                <Td>{new Date(tran.date).toLocaleDateString()}</Td>
                                <Td>{tran.amount}</Td>
                                <Td>{tran.userTarget?.typeofaccount || 'N/A'}</Td>
                                <Td>{tran.user?.name || 'N/A'}</Td>
                            </Tr>
                        ))}
                        {Array.isArray(deposits) && deposits.map((deposit) => (
                            <Tr key={deposit._id}>
                                <Td>{deposit._id}</Td>
                                <Td>{new Date(deposit.date).toLocaleDateString()}</Td>
                                <Td>{deposit.amount}</Td>
                                <Td>{deposit.account?.typeofaccount || 'Depósito'}</Td>
                                <Td>{deposit.account?.user?.name || 'N/A'}</Td>
                            </Tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

