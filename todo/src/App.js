import React, { Component }from 'react';
import TodoList from './components/TodoList'
import './App.css';


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>[ TO DO LIST APP 📃]</h1>
        <TodoList />
      </div>
    );
  }
}
