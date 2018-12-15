import React, { Component } from 'react';

export class InputRadio extends Component {
  constructor(props) {
      super(props)
      this.state = {}
      props.values.map((v, i) => {
          this.state[v] = false
      });
  }

  onChange(key, value) {
      this.setState({ [key]: value }, (state) => {
          this.props.onChange(this.state)
      })
  }

  render() {
      return (
          <React.Fragment>
                {this.props.values.map((value, i) => (
                    <label>
                        <input
                            onChange={(e) => this.onChange(value, e.target.checked)}
                            type='radio'
                            name={this.props.name}
                            value={this.state[value]}
                        />
                        {value}
                        </label>
                ))}
          </React.Fragment>
      )
  }
}
