import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import {
  login, isLogged, signOut, hasError
} from './redux/actions/auth';
import {
  drawCard, startGame, gameOver, playAgain
} from './redux/actions/game';

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
                  cards={this.props.cards}
                  started={this.props.started}
                  startGame={this.props.startGame}
                  finished={this.props.finished}
                  gameOver={this.props.gameOver}
                  playAgain={this.props.playAgain}
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
  error: state.authReducer.error,
  cards: state.gameReducer.cards,
  started: state.gameReducer.started,
  finished: state.gameReducer.finished
});

export default connect(mapStateToProps,
  { login, isLogged, signOut, hasError, drawCard, startGame, gameOver, playAgain }
)(App);
