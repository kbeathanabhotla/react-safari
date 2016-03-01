import React from 'react';
import ReactDOM from 'react-dom';

class Greeter extends React.Component {
  constructor(props) {
      super(props);
      this.state = {name: "Sai"}
  }

  render() {
    return (
      <div>
        <h1> Hello {this.state.name} </h1>
        <input type='text' ref='name'></input>
        <button onClick={this.handleGreet.bind(this)}>Click Me</button>
      </div>
    );
  }

  handleGreet() {
    this.setState({name: this.refs.name.value});
  }

  componentWillMount() {
    console.log("Component will mount");
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("component will receive props ", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("should component update ", nextProps, nextState);
    return (nextState.name != this.state.name);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("component will update", nextProps, nextState);
  }
}

ReactDOM.render(<Greeter name="Sai"/>, document.querySelector("#greeter"));
