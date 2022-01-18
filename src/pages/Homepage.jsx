import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class Homepage extends Component {
  componentDidMount() {
    this.props.drawCard();
  }

  render() {
    if (!props.isAuth) {
      return <Navigate to="/login" replace />;
    }

    return (
      <div className="homepage">
        <div className="balance">
          <span>Balance: {"71,429"}</span>
        </div>
        <h1>Кто выйграет?</h1>
        <span>Сыграй в игру и испытай удачу</span>
        <div className="game-zone">
          <div>
            <div>
              <div className="card">?</div>
              <button onClick={props.drawCard}>Слева</button>
            </div>
            <div>
              <button>Справа</button>
              <div className="card">?</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
