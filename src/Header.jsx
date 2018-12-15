import React, { Component } from 'react';

import { Title } from "./components/Title";
import { InputText } from "./components/InputText";
import { CheckBoxList } from "./components/CheckBoxList";
import { SubmitBtn } from "./components/SubmitBtn";

const filters = {
    name: "selectedFilter",
    values: ["Title", "Genre"]
}

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFilter: 'Title'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(event) {
        console.log('this.state.selectedFilter: ', this.state.selectedFilter);
        console.log('this.state.searchText: ', this.state.searchText);
        event.preventDefault();
    };

    onChange(name, values) {
        //console.log(values);
        //this.setState({ selectedFilter: name });
    }

    render(){
      return (
      <div className="header-box">
        <Title />
        <form onSubmit={this.handleSubmit}>
            <InputText label="Find your movie" name="searchText" />
            <CheckBoxList
                onChange={(values) => this.onChange(`${filters.name}`, values)}
                name = {filters.name}
                values = {filters.values} />
            <SubmitBtn value="Send" />
        </form>
      </div>
      );
    }
};
