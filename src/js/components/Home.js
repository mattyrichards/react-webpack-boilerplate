import React from 'react';
import { Link } from 'react-router-dom';
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
        <h1>Heading</h1>
        <p className={css.paragraph}>This page has been rendered by {this.state.demoState} and styled by CSS Modules.</p>
        <p><Link to={`/page/${pageNumber}`}>An example link</Link>
        , demonstrates react-router.</p>
        <p><Link to="/redux">Redux page</Link></p>
      </div>
    );
  }
}

export default Home;
