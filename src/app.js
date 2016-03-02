import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import Page from './components/Page';

class App extends React.Component {
  render() {
    return (
      <div id="content">
        <NavBar userName="Sai" />
        <Page>
          <h1>
            Hello World!
          </h1>
        </Page>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
