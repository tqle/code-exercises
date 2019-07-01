import React from "react";
import ReactDOM from "react-dom";
import Results from "./Results";
import { Router } from "@reach/router";
import UserDetails from "./UserDetails";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Results path="/" />
          <UserDetails path="/details/:id" />
        </Router>
      </div>
    );
  }
}
// render(<App />, document.getElementById("root"));
ReactDOM.render(React.createElement(App), document.getElementById("root"));
