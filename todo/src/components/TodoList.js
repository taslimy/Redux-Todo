import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

import Todo from "./Todo";

class ToDoList extends Component {
  state = {
    newToDo: ''
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newToDo);
    this.setState({ newToDo: '' });
  };

  handleInputChanges = e => this.setState({ newToDo: e.target.value });

  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <Todo key={todo} todo={todo} />
        ))}
        <form onSubmit={this.addTodo}>
          <input
            onChange={this.handleInputChanges}
            value={this.state.newToDo}
            type="text"
            placeholder="Add To list . . .📃"
          />
          <button onClick={this.addTodo}>Add to List </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps,{ addTodo }) (ToDoList);
