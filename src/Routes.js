import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import DepartmentAddBox from "./components/DepartmentAddBox";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App}></Route>
        <Route
          path={process.env.REACT_APP_ADD_NEW_DEPARTMENT_ROUTE}
          exact
          component={DepartmentAddBox}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
