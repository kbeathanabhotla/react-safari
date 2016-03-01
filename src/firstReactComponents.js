import React from 'react';
import ReactDOM from 'react-dom';

class WithJSX extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
ReactDOM.render(<WithJSX />, document.querySelector("#withJSX"));

class UsingCSS extends React.Component {
  render() {
    return <h1 style={{color: 'red'}}>Hello World! in color</h1>;
  }
}
ReactDOM.render(<UsingCSS />, document.querySelector("#UsingCSS"));

class WithCreateElement extends React.Component {
  render() {
    return React.createElement("h1", null, "Hello World from createElement");
  }
}
ReactDOM.render(<WithCreateElement />, document.querySelector("#WithCreateElement"))

class WithReactDOMh1 extends React.Component {
  render() {
    return React.DOM.h1(null, "Hello World from React.DOM.h1");
  }
}
ReactDOM.render(<WithReactDOMh1 />, document.querySelector("#WithReactDOMh1"))

class UsingProperties extends React.Component {
  render() {
    return React.createElement('h1', null, "Hello " + this.props.name + ", using properties with React.createElement");
  }
}
ReactDOM.render(<UsingProperties name="Sai"/>, document.querySelector("#UsingProperties"))

class UsingPropertiesWithJSX extends React.Component {
  render() {
    return <h1>Hello {this.props.name}, using properties with JSX</h1>;
  }
}
ReactDOM.render(<UsingPropertiesWithJSX name="Sai"/>, document.querySelector("#UsingPropertiesWithJSX"))

class UsingComponentWithinComponent extends React.Component {
  render() {
    return React.createElement(UsingProperties, {name: "Sai, example using component within a component"})
  }
}
ReactDOM.render(<UsingComponentWithinComponent />, document.querySelector("#UsingComponentWithinComponent"))

const ComponentFactory = React.createFactory(UsingProperties);
class UsingFactory extends React.Component {
  render() {
    return ComponentFactory({name: "Sai, using component factory"})
  }
}
ReactDOM.render(<UsingFactory />, document.querySelector("#UsingFactory"))
