import React from 'react';
import { Navigate } from 'react-router-dom';

const Homepage = (props) => {
  if (!props.isAuth) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className='homepage'>
      <div className='balance'>
        <span>Balance: {'71,429'}</span>
      </div>
      <h1>Кто выйграет?</h1>
      <span>Сыграй в игру и испытай удачу</span>
      <div className='game-zone'>
        <div>
          <div>
            <div className='card'>?</div>
            <button>Слева</button>
          </div>
          <div>
            <button>Справа</button>
            <div className='card'>?</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;
