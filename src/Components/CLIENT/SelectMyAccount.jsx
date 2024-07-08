import { useEffect } from 'react';

import { useMyAccount } from '../../Shared/Hooks/Client/useMyAccount';

export const SelectMyAccount = () => {
    const { account, getMyAccounts, isFetching } = useMyAccount();

    useEffect(() => {
        getMyAccounts();
    }, []);

    if (isFetching) {
        return <div>Loading accounts...</div>;
    }

    return (
        <div>
            <h1>My Accounts</h1>
            <div>
                {account.map((acc, index) => (
                    <div key={index}>
                        <p>Account Number: {acc.noaccount}</p>
                        <p>Balance: {acc.balance}</p>
                        <p>Type of Account: {acc.typeofaccount}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};