import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { sayHello } from '../actions/actionHello';

class Redux extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.sayHello('Bonjour!')
  }

  render() {
    return (
      <div>
        Redux says: {this.props.hello}!
      </div>
    );
  }

}

function mapStateToProps({ hello }) {
  return {
    hello
  };
}

export default connect(mapStateToProps, { sayHello })(Redux);