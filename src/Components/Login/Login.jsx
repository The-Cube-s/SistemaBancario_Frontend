import React, { useState } from "react";
import { useLogin } from "../../Shared/Hooks/Login and Register/useLogin";
<<<<<<< HEAD
import styled from "styled-components";
=======
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
>>>>>>> b32f9b3ed762c0bb0f4f0261745a71df096a0efc

export const Login = () => {
  const { login, isLoading } = useLogin();
  const [formData, setFormData] = useState({
    account: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
  });
  const [isDarkMode, setIsDarkMode] = useState(true); // Estado para controlar el modo oscuro

<<<<<<< HEAD

  

  const isSubmitButtonDisable = !formData.account.isValid || !formData.password.isValid;
=======
  const isSubmitButtonDisable =
    !formData.account.isValid || !formData.password.isValid;
>>>>>>> b32f9b3ed762c0bb0f4f0261745a71df096a0efc

  const handleLogin = async (e) => {
    e.preventDefault();
    if (formData.account.isValid && formData.password.isValid) {
      await login(formData.account.value, formData.password.value);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        account: {
          ...prevData.account,
          showError: !prevData.account.isValid,
        },
        password: {
          ...prevData.password,
          showError: !prevData.password.isValid,
        },
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const isValid = value.trim() !== "";
      return {
        ...prevData,
        [name]: {
          ...prevData[name],
          value,
          isValid,
          showError: !isValid,
        },
      };
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Alternar entre modo oscuro y claro
  };

  return (
<<<<<<< HEAD
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
=======
    <div
      className={`container d-flex align-items-center justify-content-center vh-100 ${
        isDarkMode ? "dark-mode" : ""
      }`}
    >
      <div className="shape"></div> {/* Nueva forma añadida */}
      <div className="row w-100">
        <div className="col-12 col-md-6 col-lg-5 mx-auto">
          <div className="myform form p-4 rounded">
            <div className="logo mb-3 text-center">
              <img src="../src/assets/Banco3.png" alt="Logo" className="mb-4" />{" "}
              {/* Añade tu imagen aquí */}
              <h1 className="text-white display-4">Login</h1>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-group mb-3">
                <label htmlFor="account" className="form-label text-white">
                  Account
                </label>
                <input
                  type="text"
                  name="account"
                  className={`form-control ${
                    formData.account.showError ? "is-invalid" : ""
                  }`}
                  id="account"
                  aria-describedby="accountHelp"
                  placeholder="Enter account"
                  onChange={handleChange}
                  value={formData.account.value}
                />
                {formData.account.showError && (
                  <div className="invalid-feedback">Account is required.</div>
                )}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={`form-control ${
                    formData.password.showError ? "is-invalid" : ""
                  }`}
                  aria-describedby="passwordHelp"
                  placeholder="Enter Password"
                  onChange={handleChange}
                  value={formData.password.value}
                />
                {formData.password.showError && (
                  <div className="invalid-feedback">Password is required.</div>
                )}
              </div>
              <div className="form-group text-center mb-3">
                <p className="text-white">
                  By signing up you accept our{" "}
                  <a href="#" className="text-white">
                    Terms Of Use
                  </a>
                </p>
              </div>
              <div className="form-group text-center mb-3">
                <button
                  className="btn btn-primary btn-block form__button"
                  disabled={isSubmitButtonDisable}
                  onClick={toggleDarkMode} // Agregar función para alternar modo oscuro
                >
                  Login
                </button>
              </div>
              <div className="form-group text-center mb-3">
                <div className="login-or">
                  <hr className="hr-or" />
                  <span className="span-or text-white">or</span>
                </div>
              </div>
              <div className="form-group text-center mb-3">
                <p className="text-white">
                  <a href="#" id="log" className="text-white">
                    You have an account?
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


//Comentario de finalizado login version 1 mejorar
>>>>>>> b32f9b3ed762c0bb0f4f0261745a71df096a0efc
