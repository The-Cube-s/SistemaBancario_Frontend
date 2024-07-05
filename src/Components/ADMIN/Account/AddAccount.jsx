import { useAddAcount } from "../../../Shared/Hooks/Admin/useAddAcount";
import styled from 'styled-components';

// //////////////////// //
// / Mega diseño papá / //
// //////////////////// //
const FormContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  color: ${props => props.error ? 'red' : 'green'};
`;

export const AddAccount = () => {
    const { account, handleChange, handleSubmit, loading, error, success } = useAddAcount();
  
    return (
      <FormContainer>
        <h1>Agregar Cuenta</h1>
        {error && <Message error>{error}</Message>}
        {success && <Message>Cuenta creada exitosamente!</Message>}
        <Form onSubmit={handleSubmit}>
          <Input
            name="noaccount"
            placeholder="Número de cuenta"
            value={account.noaccount}
            onChange={handleChange}
            disabled
          />
          <Input
            name="balance"
            placeholder="Saldo"
            type="number"
            value={account.balance}
            onChange={handleChange}
            required
          />
          {/* Que alguien me haga paro de darle opciones o mejorarlo*/}
          <Input
            name="typeofaccount"
            placeholder="Tipo de cuenta"
            value={account.typeofaccount}
            onChange={handleChange}
            required
          />
          <Input
            name="user"
            placeholder="Usuario"
            value={account.user}
            onChange={handleChange}
            required
          />
          <Button type="submit" disabled={loading}>
            {loading ? 'Cargando...' : 'Agregar Cuenta'}
          </Button>
        </Form>
      </FormContainer>
    );
}
