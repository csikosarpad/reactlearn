import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', name: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const item = event.target.name;
    const isChecked = event.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  render() {
    return (
        <React.Fragment>
        <label htmlFor="checkID">{this.props.label}:</label>
        <input
            id = "checkID"
            type = "checkbox"
            value = {this.state.value}
            name = {this.state.name}
            onChange = {this.handleChange} />
        </React.Fragment>
    );
  }
}

CheckBox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
