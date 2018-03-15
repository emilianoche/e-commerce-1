import React from 'react';
import store from '../store';
import Header from '../components/Header';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logoutUser } from '../action-creator/user';

const mapStateToProps = function(state, ownProps) {
  return {
    user: state.user,
    products: state.products,
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    logoutUser: () => {
      dispatch(logoutUser());
    },
  };
};

const HeaderContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Header),
);

export default HeaderContainer;
