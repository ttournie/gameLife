'use strict';

import React from 'react';
import { Link } from 'react-router';
import users from '../data/users';

export default class UsersMenu extends React.Component {
  render() {
    return (
      <nav className="users-menu">
        {users.map(menuUser => {
          return <Link key={menuUser.id} to={`/user/${menuUser.id}`} activeClassName="active">
            {menuUser.name}
          </Link>;
        })}
      </nav>
    );
  }
}
