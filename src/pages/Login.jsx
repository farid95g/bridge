import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: this.props.error
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
  }
  
  onFormSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  }

  onFieldChange(e, prop) {
    const { value } = e.target;
    this.setState({
      [prop]: value
    })
    this.props.hasError(true);
  }

  render() {
    if (this.props.isAuth) {
      return <Navigate to="/" replace={true} />;
    }

    return (
      <div>
        <h1>Sign in to your account</h1>
        {this.props.error && <span className='has-error'>Имя пользователя или пароль введены не верно.</span>}
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={(e) => this.onFieldChange(e, 'username')}
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => this.onFieldChange(e, 'password')}
            />
          </div>
          <button type='submit'>Sign in</button>
        </form>
      </div>
    );
  }
}
