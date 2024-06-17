import styled from 'styled-components';
import { useAddProduct } from '../../Shared/Hooks/Admin/useAddProduct';

const RegistProductContainer = styled.div`
  padding: 20px;
  background-color: #494747;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  width: 60%;
  margin: 20px auto;
  color: #f0f0f0;
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #f0f0f0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #d0d0d0;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #444;
  border-radius: 5px;
  font-size: 1em;
  background-color: #333;
  color: #f0f0f0;
  outline: none;

  &:focus {
    border-color: #1e90ff;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #444;
  border-radius: 5px;
  font-size: 1em;
  background-color: #333;
  color: #f0f0f0;
  outline: none;

  &:focus {
    border-color: #1e90ff;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #1e90ff;
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  text-align: center;
  font-size: 1em;
  color: ${props => (props.error ? 'red' : 'green')};
`;

export const RegistProduct = () => {
  const { product, handleChange, handleImageChange, handleSubmit, loading, error, success } = useAddProduct();

  return (
    <RegistProductContainer>
      <FormTitle>Registrar Producto</FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="productName">Nombre del Producto:</Label>
          <Input
            type="text"
            id="productName"
            name="name"
            value={product.name}
            onChange={handleChange}
            disabled={loading}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="productDescription">Descripción del Producto:</Label>
          <Textarea
            id="productDescription"
            name="description"
            value={product.description}
            onChange={handleChange}
            disabled={loading}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="productPrice">Precio del Producto:</Label>
          <Input
            type="number"
            id="productPrice"
            name="price"
            value={product.price}
            onChange={handleChange}
            disabled={loading}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="productAmount">Cantidad del Producto:</Label>
          <Input
            type="number"
            id="productAmount"
            name="amount"
            value={product.amount}
            onChange={handleChange}
            disabled={loading}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="productImages">Imágenes del Producto:</Label>
          <Input
            type="file"
            id="productImages"
            name="imagesProduct"
            onChange={handleImageChange}
            multiple
            accept="image/*"
            disabled={loading}
          />
        </FormGroup>
        <Button type="submit" disabled={loading}>Registrar</Button>
      </Form>
      {loading && <Message>Cargando...</Message>}
      {error && <Message error>{error}</Message>}
      {success && <Message>Producto registrado con éxito</Message>}
    </RegistProductContainer>
  );
};