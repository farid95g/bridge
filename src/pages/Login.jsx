import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>Sign in to your account</h1>
        <form>
          <div>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
        </form>
      </div>
    );
  }
}
