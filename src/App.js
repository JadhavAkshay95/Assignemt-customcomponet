import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./component/presentational-component/Home";
function App() {
  return (
    <div className="App">
      <div>
        <Suspense fallback={<div>...loading</div>}>
          <Router>
            <Switch>
              <Route path="/" component={Home} exact />
            </Switch>
          </Router>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
