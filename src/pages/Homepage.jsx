import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Homepage(props) {
  if (!props.isAuth) {
    return <Navigate to="/login" replace />;
  }

  return (
    <h1>Homepage</h1>
  )
}