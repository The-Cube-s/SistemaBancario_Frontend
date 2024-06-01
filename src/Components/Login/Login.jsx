import React, { useState } from "react";
import { useLogin } from "../../Shared/Hooks/Login and Register/useLogin";

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
    <div className="container position-absolute top-50 start-50 translate-middle">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <div id="first">
            <div className="myform form">
              <div className="logo mb-3">
                <div className="col-md-12 text-center">
                  <h1>Login</h1>
                </div>
              </div>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="account">Account</label>
                  <input
                    type="text"
                    name="account"
                    className={`form-control ${formData.account.showError ? 'is-invalid' : ''}`}
                    id="account"
                    aria-describedby="accountHelp"
                    placeholder="Enter account"
                    onChange={handleChange}
                    value={formData.account.value}
                  />
                  {formData.account.showError && <div className="invalid-feedback">Account is required.</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className={`form-control ${formData.password.showError ? 'is-invalid' : ''}`}
                    aria-describedby="passwordHelp"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    value={formData.password.value}
                  />
                  {formData.password.showError && <div className="invalid-feedback">Password is required.</div>}
                </div>
                <div className="form-group">
                  <p className="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
                </div>
                <div className="col-md-12 text-center">
                  <button className='form__button' disabled={isSubmitButtonDisable}>Login</button>
                </div>
                <div className="col-md-12">
                  <div className="login-or">
                    <hr className="hr-or" />
                    <span className="span-or d-flex justify-content-center">or</span>
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <p className="text-center">
                    <span className="text-center"><a id="log">You have an account?</a></span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
