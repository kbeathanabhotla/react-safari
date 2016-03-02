import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';

class App extends React.Component {
  render() {
    return <NavBar userName="Sai" />;
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
