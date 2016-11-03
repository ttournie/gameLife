'use strict';

import React from 'react';
import UserPreview from './UserPreview';
import users from '../data/users';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="users-selector">
          {users.map(userData => <UserPreview key={userData.id} {...userData} />)}
        </div>
      </div>
    );
  }
}
