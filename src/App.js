import React,{Component} from "react"
import {robots} from "./robots.js"
import RoboArray from "./RoboArray"
import SearchBox from "./SearchBox"


class App extends Component{
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield:''
    }
  }

  OnSearch = (event) =>{
    this.setState({searchfield:event.target.value})
  }


  render(){
    const robofilter = this.state.robots.filter((robot) =>{
        return(robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
      }
    )
    return(
      <div className = 'tc'>
        <h1> Robo Friends</h1>
        <SearchBox OnSearch = {this.OnSearch}/>
        <RoboArray robots = {robofilter} />
      </div>
    );
  }
}

export default App;
