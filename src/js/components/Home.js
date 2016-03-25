import React from 'react';
import { Link } from 'react-router';

import '../../scss/Home.scss';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      demoState: 'React!!!',
    };
  }

  render() {
    const pageNumber = 666;
    return (
      <div>
        <p>This page has been rendered by {this.state.demoState}</p>
        <p><Link to={`/page/${pageNumber}`}>An example page</Link>
        , demonstrates react-router.</p>
      </div>
    );
  }
}

export default Home;
