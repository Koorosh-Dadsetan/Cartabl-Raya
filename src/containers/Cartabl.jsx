import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";

import MainLayout from "./../component/Layout/MainLayout";
import { paginate } from "./../utils/Paginate";
import ListIndex from "./../component/List/ListIndex";
import Login from "./../component/Login/Login";

const Cartabl = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const accessToken = Cookies.get("RAYASESSID");
    console.log(`cookie is: ${accessToken}`);

    var myHeaders = new Headers();
    myHeaders.append("accessToken", "158f8ea4940b53cfa284e48fe0bd19b36041df52");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "http://publish.com/cartable/rest/index/list_inbox?refer_status=TO_DO&page=1",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setList(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const indexList = paginate(list, 1, 15);

  return (
    <Switch>
      <Route path={["/"]}>
        <MainLayout>
          <Switch>
            <Route path="/login" render={() => <Login />} />
            <Route path="/" render={() => <ListIndex list={list} />} />
          </Switch>
        </MainLayout>
      </Route>
    </Switch>
  );
};

export default Cartabl;
