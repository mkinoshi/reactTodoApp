import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import axios from 'axios';

const dummyData = [{ taskText: "going to the gym", completed: false },
{ taskText: "buying food", completed: false }, { taskText: "do some work", completed: false },
{ taskText: "clean my room", completed: false }]
const dbUrl = "http://localhost:3000/db";

export default class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({
      todos: dummyData
    })
  }

  addTodo(val) {
    this.setState({todos: this.state.todos.concat({taskText: val, completed: false})})
    axios.post(dbUrl+'/add', {taskText: val, completed: false})
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          });
  }

  handleXClick(val) {
    var tmp = this.state.todos.slice();
    //tmp.splice(val, 1)
    tmp[val].completed = !tmp[val].completed;
    this.setState({todos: tmp})
  }

  render() {
    console.log(this.state.todos)
    return (
      <TodoList todos={this.state.todos} onClick={(val) => this.addTodo(val)} todoXClick={(val) => this.handleXClick(val)}/>
    )
  }
}
