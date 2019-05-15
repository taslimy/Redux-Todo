import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../actions";
import "../../src/App.css";

class ToDoList extends Component {
  state = {
    newToDo: ""
  };

  toggleTodo = id => {
    this.props.toggleTodo(id);
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newToDo);
    this.setState({ newToDo: "" });
  };

  deleteTodo = todo => {
    todo.preventDefault();
    this.props.deleteTodo(todo);
  };

  handleInputChanges = e => this.setState({ newToDo: e.target.value });

  render() {
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">{this.props.title}</div>
          {this.props.todos &&
            this.props.todos.map(todo => (
              <h4 onClick={() => this.toggleTodo(todo.id)} key={todo.id}>
                <div role="listitem" className="item">
                  {todo.name}
                  {todo.completed && (
                    <i aria-hidden="true" class="check icon" />
                  )}
                </div>
              </h4>
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
            <button className="ui positive button" onClick={this.addTodo}>
              Add to List
            </button>
            <button className="ui negative button" onClick={this.deleteTodo}>
              Delete from List
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    title: state.title
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo, deleteTodo }
)(ToDoList);
