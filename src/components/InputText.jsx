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
    this.props.searchTextChange(event.target.value)
  }

  render() {
    const {name} = this.props;
    const {searchText} = this.state;

    return (
        <React.Fragment>
        <input
            id = "searchID"
            type = "text"
            value = {searchText}
            name = {name}
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
