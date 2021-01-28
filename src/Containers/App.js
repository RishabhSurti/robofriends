import React,{Component} from "react"
import RoboArray from "../Component/RoboArray"
import SearchBox from "../Component/SearchBox"
import "./App.css"
import Scroll from "../Component/Scroll.js"


class App extends Component{
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield:''
    }
  }

  OnSearch = (event) =>{
    this.setState({searchfield:event.target.value})
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(user => this.setState({robots:user}))
  }

  render(){
    const {robots,searchfield} = this.state;
    const robofilter = robots.filter((robot) =>{
        return(robot.name.toLowerCase().includes(searchfield.toLowerCase()))
      }
    )
    return(
      <div className = 'tc'>
        <h1 className = 'f1'> Robo Friends</h1>
        <SearchBox OnSearch = {this.OnSearch}/>
        <Scroll>
          <RoboArray robots = {robofilter} />
        </Scroll>
      </div>
    );
  }
}

export default App;
