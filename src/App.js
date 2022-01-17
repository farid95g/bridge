import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import { login, isLogged, signOut } from './redux/actions/auth';

class App extends Component {
  componentDidMount() {
    this.props.isLogged();
  }

  render() {
    return (
      <div className="app">
        <Header signOut={this.props.signOut} />
        <main>
          <Routes>
            <Route
              path="/login"
              element={(
                <Login
                  login={this.props.login}
                  isAuth={this.props.isAuth}
                />
            )}
            />

            <Route
              path="/"
              exact
              element={(
                <Homepage
                  isAuth={this.props.isAuth}
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
});

export default connect(mapStateToProps, { login, isLogged, signOut })(App);
