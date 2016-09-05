import React from 'react';
import { Link } from 'react-router';
import css from '../../css/components/Home.css';

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
        <p className={css.paragraph}>This page has been rendered by {this.state.demoState}</p>
        <p><Link to={`/page/${pageNumber}`}>An example page</Link>
        , demonstrates react-router.</p>
      </div>
    );
  }
}

export default Home;
