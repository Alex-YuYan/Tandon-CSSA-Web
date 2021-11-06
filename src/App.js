import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Activity from "./components/pages/Activity";
import StudentService from "./components/pages/StudentService";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/activity" component={Activity}></Route>
          <Route
            exact
            path="/studentservice"
            component={StudentService}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
