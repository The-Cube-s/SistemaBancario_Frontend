import React from 'react'

import styled from 'styled-components';

export const Container = styled.div`
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

export const Title = styled.h2`
  margin-bottom: 20px;
  color: #343a40;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  color: #343a40;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
`;

export const Button = styled.button`
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

export const Message = styled.p`
  color: ${(props) => (props.success ? 'green' : 'red')};
`;
