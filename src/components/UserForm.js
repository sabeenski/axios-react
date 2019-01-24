import React, { Component } from 'react';

const UserForm = (props) => {
  return (
    <form onSubmit={props.getUser}>
      <input style={{margin:"20px auto", display:"block"}} type="text" name="username" placeholder="Username"/>
      <button>Submit</button>
      
    </form>
  )
}


export default UserForm