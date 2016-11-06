'use strict';

import React from 'react';
import { Link } from 'react-router';
import superagent from 'superagent-bluebird-promise';


export default class UserPreview extends React.Component {
  // Component constructor.
  constructor(props) {
  super(props);
  this.state = {
    fetchedApiData: false,
    name: '',
  };
  this.getData = this.getData.bind(this);
};

  // Get the data from API call.
  getData(){
    var url = 'https://wunderkraut.atlassian.net//rest/api/2/user?username=ttournie';
    var credential = '';
    superagent.get(url)
      .set('Authorization', 'Basic ' + credential)
      .then(
        function(res) {
          if(!res.body){
            return;
          }
          let data = res.body;
          // DOES NOT WORK !!!
          this.setState({
            fetchedApiData: true,
            name: data.name,
          });
          console.log('Inside superagent');
        }.bind(this)
      );

      this.setState({
        fetchedApiData: true,
        name: 'sdfsfd',
      });
      console.log('Get Data');
  }

  componentWillMount(){
    console.log('Will Mount');
    this.getData();
  }

  componentDidMount(){
    console.log('Did Mount');
  }

  render() {
    console.log('yolo render');
    return (
      <Link to={`/user/${this.props.id}`}>
        <div className="user-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.state.name}</h2>
          <h2 className="name">{this.props.name}</h2>
        </div>
      </Link>
    );
  }
}
