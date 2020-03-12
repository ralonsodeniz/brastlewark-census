/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ErrorContainer, ErrorDescription, ErrorSvg, ErrorTitle } from './ErrorBoundary.styles';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {}

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    return hasError ? (
      <ErrorContainer>
        <ErrorTitle>Something is going on...</ErrorTitle>
        <ErrorSvg />
        <ErrorDescription>
          Brastlewark is currently under attack by not so fancy Orcs. All the Gnomes are busy right
          now so they cannot help you since they are helping themselfs... Try again later.
        </ErrorDescription>
      </ErrorContainer>
    ) : (
      children
    );
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
