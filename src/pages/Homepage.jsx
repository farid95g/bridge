import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerCard: null
    }
  }

  componentDidMount() {
    this.props.shuffleCard();
    console.log("componentDidMount: ", this.props.cards);
  }
  
  componentDidUpdate() {
    this.gameResult(this.state.playerCard);
  }

  play = () => {
    this.props.drawCard(this.props.deckId);
  }

  gameResult = (i) => {
    const playerValue = this.props.cards[i]?.value;
    const opponentValue = i === 0 ? this.props.cards[1]?.value : this.props.cards[0]?.value;
    console.log("player value: ", playerValue);
    console.log("opponent value: ", opponentValue);
    console.log(Number(playerValue) > Number(opponentValue));
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
        <h1>Кто выйграет?</h1>
        <span>Сыграй в игру и испытай удачу</span>
        <div className="game-zone">
          <div>
            <div>
              <div className="card" onClick={() => {
                this.play();
                this.setState({ playerCard: 0 });
              }}>
                {
                  this.props.started
                    ? <img src={this.props.cards[0]?.image} />
                    : <span>?</span>
                }
              </div>
              {!this.props.finished && <button onClick={() => {
                this.play();
                this.setState({ playerCard: 0 });
              }}>Слева</button>}
            </div>

            {
              this.props.finished && <div>
                <button onClick={this.newGame}>Сыграть еще</button>
              </div>
            }

            <div>
              {!this.props.finished && <button onClick={() => {
                this.play();
                this.setState({ playerCard: 1 });
              }}>Справа</button>}
              <div className="card" onClick={() => {
                this.play();
                this.setState({ playerCard: 1 });
              }}>
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
