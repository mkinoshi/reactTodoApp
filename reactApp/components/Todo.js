import React from 'react';
import ReactDOM from 'react-dom';


export default class Todo extends React.Component {
   render() {
      return this.props.task.completed ? <strike><li><button onClick={() => this.props.onXClick()}>&times;</button>{this.props.task.taskText}</li></strike>:
      <li><button onClick={() => this.props.onXClick()}>&times;</button>{this.props.task.taskText}</li>
   }
}
