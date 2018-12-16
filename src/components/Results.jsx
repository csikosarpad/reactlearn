import React, { Component } from 'react';

import { Result } from "./Result";
import { SortBy } from "./SortBy";

export class Results extends Component {
    constructor(props) {
         super(props);
    }

    sortChange(value) {
        console.log('R: ',value);
    }

    render() {
        return (
            <div className="results">
                <SortBy
                    sortChange = {this.sortChange}
                />
                <Result />
            </div>
        )}
};
