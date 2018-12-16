import React, { Component } from 'react';

import { Footer } from "./components/Footer";
//import { movies } from "./movies.json";

export class Context extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    render(){
      const {params} = this.props;

      return (
      <React.Fragment>
          <div className="content-box">
            No films found
            {params}
          </div>
          <Footer />
      </React.Fragment>
      );
    }
};
