import React from 'react';
import './Register.css';

export const Register = () => {
  return (
    <div className="container">
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

        </div>
      </div>
    </div>
  );
}
