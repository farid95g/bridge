import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class Homepage extends Component {
  componentDidMount() {
    this.props.shuffleCard();
  }

  play = (i) => {
    this.props.drawCard(this.props.deckId, i);
  }

  newGame = () => {
    this.props.reShuffleCard(this.props.deckId);
    this.props.playAgain();
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
        <h1>{
          !this.props.result.resulted
            ? 'Кто выйграет?'
            : !this.props.result.won
              ? 'Вы проиграли'
              : 'Вы выйграли 10$'
        }</h1>

        <span>{
          !this.props.result.resulted
            ? 'Сыграй в игру и испытай удачу'
            : !this.props.result.won
              ? ':('
              : ':)'
        }</span>
        
        <div className="game-zone">
          <div>
            <div>
              <div className="card" onClick={() => this.play(0)}>
                {
                  this.props.started
                    ? <img src={this.props.cards[0]?.image} />
                    : <span>?</span>
                }
              </div>
              {!this.props.finished && <button onClick={() => this.play(0)}>Слева</button>}
            </div>

            {
              this.props.finished && <div>
                <button onClick={this.newGame}>Сыграть еще</button>
              </div>
            }

            <div>
              {!this.props.finished && <button onClick={() => this.play(1)}>Справа</button>}
              <div className="card" onClick={() => this.play(1)}>
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
