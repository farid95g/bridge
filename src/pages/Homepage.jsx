import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class Homepage extends Component {
  componentDidMount() {
    this.props.drawCard();
  }

  play = () => {
    this.props.startGame();
    this.props.gameOver();
  }

  render() {
    if (!this.props.isAuth) {
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
              <div className="card">
                {
                  this.props.started
                    ? <img src={this.props.cards[0]?.image} />
                    : <span>?</span>
                }
              </div>
              {!this.props.finished && <button onClick={this.play}>Слева</button>}
            </div>

            {
              this.props.finished && <div>
                <button onClick={this.props.playAgain}>Сыграть еще</button>
              </div>
            }

            <div>
              {!this.props.finished && <button onClick={this.play}>Справа</button>}
              <div className="card">
                {
                  this.props.started
                    ? <img src={this.props.cards[1]?.image} />
                    : <span>?</span>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
