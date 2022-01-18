import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import {
  login, isLogged, signOut, hasError
} from './redux/actions/auth';
import { drawCard } from './redux/actions/game';

class App extends Component {
  componentDidMount() {
    this.props.isLogged();
  }

  render() {
    return (
      <div className="app">
        <Header isAuth={this.props.isAuth} signOut={this.props.signOut} />
        <main>
          <Routes>
            <Route
              path="/login"
              element={(
                <Login
                  login={this.props.login}
                  isAuth={this.props.isAuth}
                  error={this.props.error}
                  hasError={this.props.hasError}
                />
            )}
            />

            <Route
              path="/"
              exact
              element={(
                <Homepage
                  isAuth={this.props.isAuth}
                  drawCard={this.props.drawCard}
                />
            )}
            />
          </Routes>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  error: state.authReducer.error
});

export default connect(mapStateToProps,
  { login, isLogged, signOut, hasError, drawCard }
)(App);
