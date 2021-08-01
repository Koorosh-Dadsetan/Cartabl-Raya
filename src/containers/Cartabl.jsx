import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import MainLayout from "./../component/Layout/MainLayout";
import { paginate } from "./../utils/Paginate";
import ListIndex from "./../component/List/ListIndex";
import Login from "./../component/Login/Login";

const Cartabl = () => {
  const [list, setList] = useState();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    var myHeaders = new Headers();
    myHeaders.append("accessToken", "f7d6163e5a1ccdf357b46da00e0f52034e4fb1d4");
    // myHeaders.append("accessToken", accessToken);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "http://publish.com/cartable/rest/index/list_inbox?refer_status=TO_DO&page=1",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setList(result.list);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const indexList = paginate(list, 1, 8);

  return (
    <Switch>
      <Route path={["/"]}>
        <MainLayout>
          <Switch>
            <Route path="/login" render={() => <Login />} />
            <Route path="/" render={() => <ListIndex list={indexList} />} />
          </Switch>
        </MainLayout>
      </Route>
    </Switch>
  );
};

export default Cartabl;
