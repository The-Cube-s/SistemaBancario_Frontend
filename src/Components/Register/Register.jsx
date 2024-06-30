import React from 'react';
import './Register.css';
import { useRegister } from '../../Shared/Hooks/Login and Register/useRegister';

export const Register = () => {
  const { user, handleChange, handleSubmit, loading, error, success } = useRegister();

  return (
      <div className="container">
          <form onSubmit={handleSubmit}>
              <div className="main-content">
                  <h2>Personal Information</h2>
                  <div className="form-row">
                      <div className="form-group">
                          <label htmlFor="name">First Name</label>
                          <input
                              type="text"
                              id="name"
                              name="name"
                              value={user.name}
                              onChange={handleChange}
                              disabled={loading}
                          />
                      </div>
                      <div className="form-group">
                          <label htmlFor="surname">Last Name</label>
                          <input
                              type="text"
                              id="surname"
                              name="surname"
                              value={user.surname}
                              onChange={handleChange}
                              disabled={loading}
                          />
                      </div>
                  </div>
                  <div className="form-row">
                      <div className="form-group">
                          <label htmlFor="username">Username</label>
                          <input
                              type="text"
                              id="username"
                              name="username"
                              value={user.username}
                              onChange={handleChange}
                              disabled={loading}
                          />
                      </div>
                      <div className="form-group">
                          <label htmlFor="accountNumber">Account Number</label>
                          <input
                              type="text"
                              id="accountNumber"
                              name="accountNumber"
                              value={user.accountNumber}
                              onChange={handleChange}
                              readOnly
                          />
                      </div>
                  </div>
                  <div className="form-row">
                      <div className="form-group">
                          <label htmlFor="DPI">DPI</label>
                          <input
                              type="text"
                              id="DPI"
                              name="DPI"
                              value={user.DPI}
                              onChange={handleChange}
                              disabled={loading}
                          />
                      </div>
                      <div className="form-group">
                          <label htmlFor="address">Address</label>
                          <input
                              type="text"
                              id="address"
                              name="address"
                              value={user.address}
                              onChange={handleChange}
                              disabled={loading}
                          />
                      </div>
                  </div>
                  <div className="form-row">
                      <div className="form-group">
                          <label htmlFor="phone">Cell Phone</label>
                          <input
                              type="text"
                              id="phone"
                              name="phone"
                              value={user.phone}
                              onChange={handleChange}
                              disabled={loading}
                          />
                      </div>
                      <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input
                              type="email"
                              id="email"
                              name="email"
                              value={user.email}
                              onChange={handleChange}
                              disabled={loading}
                          />
                      </div>
                  </div>
                  <div className="form-row">
                      <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input
                              type="password"
                              id="password"
                              name="password"
                              value={user.password}
                              onChange={handleChange}
                              disabled={loading}
                          />
                      </div>
                      <div className="form-group">
                          <label htmlFor="retypePassword">Retype Password</label>
                          <input
                              type="password"
                              id="retypePassword"
                              name="retypePassword"
                              value={user.retypePassword}
                              onChange={handleChange}
                              disabled={loading}
                          />
                      </div>
                  </div>
                  <div className="form-row">
                      <div className="form-group">
                          <label htmlFor="jobname">Job Title</label>
                          <input
                              type="text"
                              id="jobname"
                              name="jobname"
                              value={user.jobname}
                              onChange={handleChange}
                              disabled={loading}
                          />
                      </div>
                      <div className="form-group">
                          <label htmlFor="monthlyincome">Monthly Income</label>
                          <input
                              type="text"
                              id="monthlyincome"
                              name="monthlyincome"
                              value={user.monthlyincome}
                              onChange={handleChange}
                              disabled={loading}
                          />
                      </div>
                  </div>
                  <div className="form-row save-button">
                      <button type="submit" disabled={loading}>Save</button>
                  </div>
                  {loading && <p>Loading...</p>}
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                  {success && <p style={{ color: 'green' }}>Registration successful!</p>}
              </div>
          </form>
      </div>
  );
};