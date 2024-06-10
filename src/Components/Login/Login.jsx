import  { useState } from "react";
import { useLogin } from "../../Shared/Hooks/Login and Register/useLogin";
import styled from "styled-components";

export const Login = () => {
  const { login, isLoading } = useLogin();
  const [formData, setFormData] = useState({
    account: {
      value: '',
      isValid: false,
      showError: false
    },
    password: {
      value: '',
      isValid: false,
      showError: false
    }
  });


  

  const isSubmitButtonDisable = !formData.account.isValid || !formData.password.isValid;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (formData.account.isValid && formData.password.isValid) {
      await login(formData.account.value, formData.password.value);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        account: {
          ...prevData.account,
          showError: !prevData.account.isValid
        },
        password: {
          ...prevData.password,
          showError: !prevData.password.isValid
        }
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const isValid = value.trim() !== '';
      return {
        ...prevData,
        [name]: {
          ...prevData[name],
          value,
          isValid,
          showError: !isValid
        }
      };
    });
  };

  return (
    <Container>
    <FormWrapper>
      <Title>Login</Title>
      <Form onSubmit={handleLogin}>
        <FormGroup>
          <Label htmlFor="account">Account</Label>
          <Input
            type="text"
            name="account"
            id="account"
            className={formData.account.showError ? 'is-invalid' : ''}
            placeholder="Enter account"
            onChange={handleChange}
            value={formData.account.value}
          />
          {formData.account.showError && <div className="invalid-feedback">Account is required.</div>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            className={formData.password.showError ? 'is-invalid' : ''}
            placeholder="Enter Password"
            onChange={handleChange}
            value={formData.password.value}
          />
          {formData.password.showError && <div className="invalid-feedback">Password is required.</div>}
        </FormGroup>
        <Button disabled={isSubmitButtonDisable}>Login</Button>
        {isLoading && <Message>Loading...</Message>}
        {formData.error && <Message error>{formData.error}</Message>}
      </Form>
    </FormWrapper>
  </Container>
);
};


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212;
`;

const FormWrapper = styled.div`
  background: #1c1c1c;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 6px 6px 12px #0e0e0e, -6px -6px 12px #282828;
  width: 400px;
  max-width: 100%;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #ffffff;
`;

const Form = styled.form``;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #cccccc;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #1c1c1c;
  box-shadow: inset 6px 6px 12px #0e0e0e, inset -6px -6px 12px #282828;
  color: #ffffff;
  &:focus {
    outline: none;
  }
  &.is-invalid {
    box-shadow: inset 6px 6px 12px #0e0e0e, inset -6px -6px 12px #282828, 0 0 0 2px red;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #1c1c1c;
  box-shadow: 6px 6px 12px #0e0e0e, -6px -6px 12px #282828;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background: #333333;
  }
  &:disabled {
    background: #3a3a3a;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  color: ${(props) => (props.error ? 'red' : 'green')};
  text-align: center;
  margin-top: 20px;
`;

