import React from 'react';
import { Navigate } from 'react-router-dom';

const Homepage = (props) => {
  if (!props.isAuth) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className='homepage'>
      <h1>Кто выйграет?</h1>
      <span>Сыграй в игру и испытай удачу</span>
    </div>
  )
}

export default Homepage;
