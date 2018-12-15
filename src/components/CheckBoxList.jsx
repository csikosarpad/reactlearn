import React, { Component } from 'react';

export class CheckBoxList extends React.Component {
  constructor(props) {
      super(props)
      this.state = {}
      props.values.map((v, i) => {
          this.state[v] = false
      });
      this.onChange = this.onChange.bind(this);
  }

  onChange(key, value) {
      console.log(key);
      this.setState({
        selectedFilter: key
      });
      /*this.setState({ [key]: value }, (state) => {
          this.props.onChange(this.state)
      })*/
  }

  render() {
      return (
          <div className="list-group-item form-group">
                {this.props.values.map((value, i) => (
                    <div className="checkbox" key={i}>
                        <label>
                            <input
                                onChange={(e) => this.onChange(value, e.target.checked)}
                                type='radio'
                                name={this.props.name}
                                value={this.state[value]}
                            />
                            {value}
                        </label>
                    </div>
                ))}
          </div>
      )
  }
};
