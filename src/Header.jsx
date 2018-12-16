import React, { Component } from 'react';

import { Title } from "./components/Title";
import { InputText } from "./components/InputText";
import { CheckBoxList } from "./components/CheckBoxList";
import { SubmitBtn } from "./components/SubmitBtn";
import { Results } from "./components/Results";

const filters = {
    name: "selectedFilter",
    items: [{
        key: "title",
        title: "Title"
    }, {
        key: "genre",
        title: "Genre"
    }]
}

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFilter: 'title',
            submitted: false,
            searchText: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.radioChange = this.radioChange.bind(this);
        this.searchTextChange = this.searchTextChange.bind(this);
    };

    searchTextChange(value){
        this.setState({
            searchText: value
        });
    };

    handleSubmit(event) {
        this.setState({submitted: true});
        //this.setState({selectedFilter: this.state.selectedFilter});
        this.setState({searchText: this.state.searchText});

        this.props.searchTerms(this.state);
        event.preventDefault();
    };

    radioChange(value) {
        this.setState({
            selectedFilter: value
        });
        this.props.searchTerms(this.state);
    };

    render(){
      const {searchText, submitted} = this.state;

      return (
      <React.Fragment>
      <div className="header-box">
        <Title />
        <form onSubmit={this.handleSubmit} className="search-box">
            <label htmlFor="searchID" className="block-label ">Find your movie:</label>
            <InputText
                name="searchText"
                searchTextChange={this.searchTextChange} />
            <SubmitBtn value="Search" disabled={!searchText} />
            <CheckBoxList
                title= "Search by"
                radioChange={(values) => this.radioChange(values)}
                name = {filters.name}
                checked = {filters.items}
                values = {filters.items} />
        </form>
      </div>
        {submitted && searchText && <Results />}
      </React.Fragment>
      );
    }
};
