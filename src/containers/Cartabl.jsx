import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import MainLayout from "./../component/Layout/MainLayout";
import { paginate } from "./../utils/Paginate";
import ListIndex from "./../component/List/ListIndex";
import Login from "./../component/Login/Login";

const Cartabl = () => {
  // const indexList = paginate(list, 1, 15);

  return (
    <Switch>
      <Route path={["/"]}>
        <MainLayout>
          <Switch>
            <Route path="/login" render={() => <Login />} />
            <Route path="/" component={ListIndex} />
          </Switch>
        </MainLayout>
      </Route>
    </Switch>
  );
};

export default Cartabl;
