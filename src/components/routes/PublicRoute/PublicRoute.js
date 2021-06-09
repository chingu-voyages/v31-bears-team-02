/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { HOME } from '../../../config/routes';

const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isAuthenticated ? <Redirect to={HOME} /> : <Component {...props} />)}
  />
);

PublicRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.func]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default PublicRoute;
