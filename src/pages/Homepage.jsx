import React, { Component } from 'react';
import { useSelector, connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../redux/actions/auth';

function Homepage(props) {
  if (!props.isAuth) {
    return <Navigate to="/login" replace />;
  }

  return (
    <h1>Homepage</h1>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps, { login })(Homepage);
