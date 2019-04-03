import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';
import axios from "axios";

class App extends Component {
  componentDidMount() {
    fetchThoughts();
  }
  render() {
    return (
      <div className="App">
      <div className="navbar">
        <h2 className="center">Pin up your thoughts!</h2>
      </div>
        <PostForm />
        <AllPost />
      </div>
    );
  }
}

export function fetchThoughts() {
  return function(dispatch) {
      return axios.get('https://thoughts-229a.restdb.io/rest/thoughts')
      .then(({data}) => {
          dispatch(setThoughts(data));
      });
  };
}

function setThoughts(data) {
  return {
    type: 'GET_THOUGHTS',
    payload: data
  };
}

export default App;
