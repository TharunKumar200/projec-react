import React, { Component } from 'react'

export default class ClassState extends Component {
    state={
        name:"Tharun",
        dept:"cse",
        year:2017
    }
    changeName=()=>{this.setState({name:"kumar"})}
  render() {
    return (
      <div>
       <h1 style={{color:"red"}}>{this.state.name}</h1> 
       <button type="button" onclick={this.changeName}>click me</button>
      </div>
    )
  }
}
