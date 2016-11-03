'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import Flag from './Flag';
import users from '../data/users';

export default class UserPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const user = users.filter((user) => user.id === id)[0];
    if (!user) {
      return <NotFoundPage/>;
    }
    return (
      <div className="user-full">
        <div className="user">
          <div className="picture-container">
            <img src={`/img/${user.image}`}/>
            <h2 className="name">{user.name}</h2>
          </div>
          <section className="description">
            <strong><Flag code={user.country} showName="true"/></strong>,
            <strong>Birth date : {user.birth}</strong>
            <strong>Team : {user.team}</strong>
            <strong>Role : {user.role}</strong>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
