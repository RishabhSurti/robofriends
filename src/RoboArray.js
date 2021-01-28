import React from "react"
// import  { robots } from "./robots.js"
import Card from "./Card"

const RoboArray = ({robots}) => {
    const robolist = robots.map(user =>{
      return(<Card key={user.id} id={user.id} name = {user.name} email = {user.email} />);
    } )
    return(
      <div>
        {robolist}
      </div>
    );
  }

export default RoboArray;
