import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { GlobalStyles } from "./GlobalStyles";

import Homepage from "./components/Homepage";
export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}
