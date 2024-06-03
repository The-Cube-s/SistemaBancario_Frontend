import React from 'react';
import './Register.css';

export const Register = () => {
  return (
    <div className="container">
<<<<<<< HEAD
      <div className="screen">
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape1"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape4"></span>
        </div>
        <div className="screen__content">
          <form className="register">
            <div className="register__field">
              <i className="register__icon fas fa-user"></i>
              <input type="text" className="register__input" placeholder="Name" />
            </div>
            <div className="register__field">
              <i className="register__icon fas fa-user"></i>
              <input type="text" className="register__input" placeholder="Username" />
            </div>
            <div className="register__field">
              <i className="register__icon fas fa-id-card"></i>
              <input type="text" className="register__input" placeholder="DPI" />
            </div>
            <div className="register__field">
              <i className="register__icon fas fa-map-marker-alt"></i>
              <input type="text" className="register__input" placeholder="Address" />
            </div>
            <div className="register__field">
              <i className="register__icon fas fa-phone"></i>
              <input type="text" className="register__input" placeholder="Phone Number" />
            </div>
            <div className="register__field">
              <i className="register__icon fas fa-envelope"></i>
              <input type="email" className="register__input" placeholder="Email" />
            </div>
            <div className="register__field">
              <i className="register__icon fas fa-briefcase"></i>
              <input type="text" className="register__input" placeholder="Work Name" />
            </div>
            <div className="register__field">
              <i className="register__icon fas fa-dollar-sign"></i>
              <input type="number" className="register__input" placeholder="Monthly Income" />
            </div>
            <div className="register__field">
              <i className="register__icon fas fa-lock"></i>
              <input type="password" className="register__input" placeholder="Password" />
            </div>
            <button className="register__submit">
              <span className="button__text d-flex justify-content-center">Register</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>

=======
      
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
>>>>>>> origin/main
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> origin/main
