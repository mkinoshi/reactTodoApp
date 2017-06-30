import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import Todo from './Todo';

export default class TodoList extends React.Component {
   constructor(props) {
      super(props);
   }

   handleSubmit(val) {
      this.props.onClick(val);
   }

   render() {
      console.log(this.props.todos)
      return (
         <div>
            <InputLine onSubmit={(val) => this.handleSubmit(val)}/>
            <ul>
               {this.props.todos.map((todo, ind) => (<Todo task={todo} key={ind} onXClick={() => this.props.todoXClick(ind)}/>))}
            </ul>
         </div>
      )
   }
}
