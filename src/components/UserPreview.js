'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class UserPreview extends React.Component {
  render() {
    return (
      <Link to={`/user/${this.props.id}`}>
        <div className="user-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
        </div>
      </Link>
    );
  }
}
