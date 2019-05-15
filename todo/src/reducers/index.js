import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions";

const initialState = {
  title: "TO DO LIST APP 📃",
  todos: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // ADD TO IT
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {name: action.payload, completed: false, id: Date.now()}
        ]
      };
      // TOGGLE IT
      case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo;
        })
      }
      // DELETE IT
      case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      }

    default:
      return state;
  }
};
