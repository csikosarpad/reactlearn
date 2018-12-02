import React, { Component } from 'react';
import { render } from 'react-dom';
import './css/style.css';

function Title2(props) {
  return <h2>Hello {props.name}</h2>;
}
function Title3(props) {
  return <h3>Hello {props.name}</h3>;
}

const element1 = <Title2 name="World" />;
const element2 = <Title3 name="Arpi" />;

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Arpad Csikos'
    };
  }

  render() {
    return (
      <h1>Hello {this.state.name}!</h1>
    );
  }
}

render([<App />, element1, element2], document.getElementById('create-article-form'));