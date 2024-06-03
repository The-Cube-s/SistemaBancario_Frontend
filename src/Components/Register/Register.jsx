import React from 'react';
import './Register.css';
import { useRegister } from '../../Shared/Hooks/Login and Register/useRegister';

export const Register = () => {
  /*const { register, isLoading } = useRegister();

  const [formData, setFormData] = useState({
    name: {
      value: '',
      isValid: false,
      showError: false
    },
    surname: {
      value: '',
      isValid: false,
      showError: false
    },
    username: {
      value: '',
      isValid: false,
      showError: false
    },
    password: {
      value: '',
      isValid: false,
      showError: false
    },
    

  })
*/
 
  return (
    <div className="container">
      
      <div className="main-content">
        <h2>Personal Information</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="accountNumber">Account Number</label>
            <input type="text" id="accountNumber" readOnly />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dpi">DPI</label>
            <input type="text" id="dpi" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cellPhone">Cell Phone</label>
            <input type="text" id="cellPhone" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="form-group">
            <label htmlFor="retypePassword">Retype Password</label>
            <input type="password" id="retypePassword" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" id="jobTitle" defaultValue="Software Engineer" />
          </div>
          <div className="form-group">
            <label htmlFor="monthlyIncome">Monthly Income</label>
            <input type="text" id="monthlyIncome" defaultValue="$7,000" />
          </div>
        </div>
        <div className="form-row save-button">
          <button type="submit">Save</button>
        </div>
      </div>
    </div>
  );
};