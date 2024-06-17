import { useAddDeposit } from "../../../Shared/Hooks/Admin/useAddDeposit"

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
  margin-top: 50px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #343a40;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 5px;
  color: #343a40;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  color: ${(props) => (props.success ? 'green' : 'red')};
`;

export const Deposit = () => {
    const { deposit, handleChange, handleSubmit, loading, error, success } = useAddDeposit();

    return (
        <Container>
            <Title>Deposit Money</Title>
            <Form onSubmit={handleSubmit}>
                <div>
                    <Label>No Account:</Label>
                    <Input
                        type="text"
                        name="noaccount"
                        value={deposit.noaccount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <Label>Amount:</Label>
                    <Input
                        type="number"
                        name="amount"
                        value={deposit.amount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <Button type="submit" disabled={loading}>
                    {loading ? 'Depositing...' : 'Deposit'}
                </Button>
                {error && <Message>{error}</Message>}
                {success && <Message success={success.toString()}>Deposit successful!</Message>}
            </Form>
        </Container>
    );
};