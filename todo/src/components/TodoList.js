import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import "../../src/App.css";
import Todo from "./Todo";

class ToDoList extends Component {
  state = {
    newToDo: ""
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newToDo);
    this.setState({ newToDo: "" });
  };

  handleInputChanges = e => this.setState({ newToDo: e.target.value });

  render() {
    return (
      <div className="ui card">
        <div className="content">
          <div class="header">
            TO DO LIST APP <span role="img">📃</span>
          </div>
          {this.props.todos.map(todo => (
            <Todo key={todo} todo={todo} />
          ))}
          <form className="ui form" onSubmit={this.addTodo}>
            <input
              onChange={this.handleInputChanges}
              value={this.state.newToDo}
              type="text"
              placeholder="Add To list . . .📃"
            />
          </form>
          <div className="margin-top">
            <button className="ui positive button" 
            onClick={this.addTodo}>
              Add to List
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(ToDoList);
