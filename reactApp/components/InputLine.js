import React from 'react';
import ReactDOM from 'react-dom';

export default class InputLine extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         typedText : ""
      }
   }

   handleClick(e) {
      e.preventDefault();
      this.props.onSubmit(this.state.typedText)
      this.setState({typedText: ''})
   }

   handleChange(e) {
      e.preventDefault();
      this.setState({typedText: e.target.value})
   }

   render() {
      return (
         <form>
            <input type="text" onChange={(e) => this.handleChange(e)} placeholder="Search" value={this.state.typedText} />
            <input type="submit" onClick={(e) => this.handleClick(e)} />
         </form>
      )
   }
}
