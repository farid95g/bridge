import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      tempAmount: ''
    }
  }
  componentDidMount() {
    this.props.shuffleCard();
  }

  play = (i) => {
    if (!this.props.result.resulted) {
      if (this.state.amount * 2 > this.props.balance) {
        return;
      }
      this.props.drawCard(this.props.deckId, i, this.props.balance, this.state.amount || 10);
      this.setState({ tempAmount: Number(this.state.amount), amount: '' })
    }
  }

  newGame = () => {
    this.setState({ tempAmount: '' });
    this.props.reShuffleCard(this.props.deckId);
    this.props.playAgain();
  }

  render() {
    if (!this.props.isAuth) {
      return <Navigate to="/login" replace={true} />;
    }

    return (
      <div className="homepage">
        <div className="balance">
          <span>Balance: ${this.props.balance.toLocaleString()}</span>
        </div>
        <h1>{
          !this.props.result.resulted
            ? 'Кто выйграет?'
            : this.props.result.won
              ? `Вы выйграли $${this.state.tempAmount * 2 || 20}`
              : this.props.result.draw
                ? 'Ничья'
                : `Вы проиграли $${this.state.tempAmount * 2 || 20}`
        }</h1>

        <span>{
          !this.props.result.resulted
            ? 'Сыграй в игру и испытай удачу'
            : this.props.result.won
              ? ':)'
              : this.props.result.draw
                ? ':|'
                : ':('
        }</span>

        <div className='amount-input'>
          {Number(this.state.amount) * 2 > this.props.balance && <p className='has-error'>Недостаточное количество денег. Сделайте другую ставку. У вас ${this.props.balance} денег. А ставка умноженная на 2 будет ${this.state.amount * 2}.</p>}
          <label for='amount'>Сделайте ставку, $10 будет ставлен если пропустить это. Выйгрыш или проигрыш это ставка умноженная на коэфициент 2:</label>
          <input
            type='number'
            value={this.state.amount}
            disabled={this.props.result.resulted}
            onChange={(e) => this.setState({ amount: e.target.value })}
          />
        </div>
        
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
