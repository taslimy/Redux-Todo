import { ADD_TODO } from '../reducers';

const initialState = {
  user: {
    name: "Tas"
  },
  todo: ['Eat', 'Sleep', 'Repeat'],
  todoList: [{task: 'Learn Redux', id: 0, completed: false}],
  tasksCompleted: 0
};


export const reducer = (state = initialState, action) => {



}