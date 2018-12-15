import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchText: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
        searchText: event.target.value
    });
  }

  render() {
    return (
        <React.Fragment>
        <label htmlFor="searchID">{this.props.label}:</label>
        <input
            id = "searchID"
            type = "text"
            value = {this.state.value}
            name = {this.props.name}
            onChange = {this.handleChange}
            placeholder = "What are you looking for?" />
        </React.Fragment>
    );
  }
}

InputText.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired
}
