import React, { Component } from 'react';

export class CheckBoxList extends React.Component {
  constructor(props) {
      super(props)
      this.state = {}
      props.values.map((v, i) => {
          this.state[v.key] = false
      });
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key, value) {
      this.setState({
        selectedFilter: key
      });
      this.props.radioChange(key);
  }

  render() {
      const {values, title} = this.props;
      return (
          <div className="list-group-item">
            <label>{title}</label>
                {values.map((item, i) => (
                    <div className="checkbox" key={i}>
                        <input
                            onChange={(e) => this.handleChange(item.key, e.target.checked)}
                            type="radio"
                            id={item.key + i}
                            name={this.props.name}
                            value={this.state[item.key]}
                        />
                        <label htmlFor={item.key + i}>{item.title}</label>
                    </div>
                ))}
          </div>
      )
  }
};
