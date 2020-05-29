import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  };

  updateInput(key, value) {
    this.setState({[key]: value});
  }

  render(){
    return(
      <div className='App'>
        <h1 className='title'>Todo List</h1>
        Add a task!
      </div>
    )
  }
}

export default App;
