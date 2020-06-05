import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import Details from "./Details";
import { Contact } from "./Contact";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Login } from "./Login";

console.warn = () => {};
class App extends Component {
  render() {
    return (
      //wrapper to not create a div
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
                <Details />
              </Route>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
