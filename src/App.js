import React, { Component } from 'react';
import { render } from 'react-dom';

import { Header } from "./Header";
import './css/style.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      //hasError: false
    };
  }

  render() {
    return (
    <ErrorBoundary>
      <Header />
    </ErrorBoundary>
    );
  }
}

render(<App />, document.getElementById('create-article-form'));
//render([<App />, element1, element2], document.getElementById('create-article-form'));