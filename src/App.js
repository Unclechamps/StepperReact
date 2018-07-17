import React, { Component } from 'react';
import {Counter} from './components/Counter'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count : 0,
      disabled : false
    }
  }


  addSteps = (() => {

    this.setState ({
      ...this.state,
      count : this.state.count += 1,
    })

  })

  removeSteps = (() => {

    if(this.state.count == 0) {
      this.setState ({
        ...this.state,
        disabled : this.state.disabled == true,
        })
    } else {
    this.setState ({
      ...this.state,
      count : this.state.count -= 1
    })
}
  })

  render() {
    return (
      <div className="stepper">
        <button className="reduceButton" onClick={this.removeSteps} disabled={this.state.disabled}>-</button>
        <Counter count = {this.state.count}/>
        <button className="addButton" onClick={this.addSteps}>+</button>
      </div>
    );
  }
}

export default App;
