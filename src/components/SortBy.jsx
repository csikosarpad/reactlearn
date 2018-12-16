import React from 'react';
import { CheckBoxList } from "./CheckBoxList";

const filters = {
    name: "sortFilter",
    items: [{
        key: "releasedate",
        title: "release date"
    }, {
        key: "rating",
        title: "rating"
    }]
}

export class SortBy extends React.Component {
    radioChange(value) {
        this.setState({
            sortFilter: value
        });
        this.props.sortChange(value);
    };

    render() {
      return (
        <React.Fragment>
            <CheckBoxList
                title= "Sort by"
                radioChange={(values) => this.radioChange(values)}
                name = {filters.name}
                checked = {filters.items}
                values = {filters.items} />
        </React.Fragment>
      );
    }
};
