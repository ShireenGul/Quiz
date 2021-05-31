import logo, { ReactComponent } from './logo.svg';
import './App.css';
import ReactDom from 'react-dom';
import React, {Component} from 'react';
import Question from './Question';

class App extends Component{
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }


render() {
  return (
    <div >
     <Question/>
    </div>
  );
}
}
export default App;
