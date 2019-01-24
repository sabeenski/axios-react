import React, { Component } from 'react';
import axios from 'axios'

import './App.css';
import UserForm from './components/UserForm';

class App extends Component {

  state={
    repos: null
  }

  getUser = (e) => {
    e.preventDefault()
    const user = e.target.username.value
    if(!user) alert ("Please enter the user name")
    else {(axios.get(`https://api.github.com/users/${user}`))
    .then((res) => {
      console.log(res)
      const repos = res.data.public_repos
      this.setState({repos})
    })}
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <header className="App-header">
            <h1 className="App-title">HTTP calls in React</h1> 
          </header>
          <div className="form-container">
            <h5>Find the number of Github repos your friends have!</h5>
            <UserForm getUser={this.getUser}/>
            { this.state.repos && <p className="result">Number of repos: {this.state.repos}</p>}   
          </div>
        </div>
      </div>
    );
  }
}

export default App;
