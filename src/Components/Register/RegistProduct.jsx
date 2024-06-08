import styled from 'styled-components';

const RegistProductContainer = styled.div`
  padding: 20px;
  background-color: #e0f7fa;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

//Esto solo es para probar (no tiene funcion ni vista)
export const RegistProduct = () => {
  return (
    <RegistProductContainer>
      <h2>Registrar Producto</h2>
      <form>
        <div>
          <label htmlFor="productName">Nombre del Producto:</label>
          <input type="text" id="productName" name="productName" />
        </div>
        <div>
          <label htmlFor="productDescription">Descripción del Producto:</label>
          <textarea id="productDescription" name="productDescription" />
        </div>
        <div>
          <label htmlFor="productPrice">Precio del Producto:</label>
          <input type="number" id="productPrice" name="productPrice" />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </RegistProductContainer>
  );
};