import React from 'react';
import { Link } from 'react-router-dom';
import css from '../../css/components/Page.css';

// "Traditional" style stateless function
function Page(props) {
  return (
    <div>
      <h2 className={css.large}>
        This is a new page. The path part is <b>
        {props.match.params.pageNumber}</b>
      </h2>
      <p className={css.paragraph}>A random paragraph</p>
      <p><Link to="/">Return to the home page</Link></p>
    </div>
  );
}

export default Page;
