import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
export const PrivteRoute = ({
isAuthenticated,
component: Component,
...rest // grab the rest variable which has not been destructed
}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <div>
        <Header />
        <Component {...props } />
      </div>
    ) : (<Redirect to="/" />)
  )} />
);

const mapStateToProps = (state) => ({
  isAuthenticated : !!state.auth.uid //boolean
});

export default connect(mapStateToProps)(PrivteRoute);
