import React, { Component } from "react"
// import  { robots } from "./robots.js"
import Card from "./Card"

class RoboArray extends Component{
  render(){
    const {robots} = this.props;
    const robolist = robots.map((user, i) =>{
      return(<Card id={robots[i].id} name = {robots[i].name} email = {robots[i].email} />);
    } )
    return(
      <div>
        {robolist}
      </div>
    );
  }
}

export default RoboArray;
