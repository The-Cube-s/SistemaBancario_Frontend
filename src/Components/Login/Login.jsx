import React, { useState } from "react";
import { useLogin } from "../../Shared/Hooks/Login and Register/useLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

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

  const isSubmitButtonDisable =
    !formData.account.isValid || !formData.password.isValid;

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