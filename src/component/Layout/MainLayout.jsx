import React, { Fragment } from "react";
import { withRouter } from "react-router";
import { Helmet } from "react-helmet";

import Header from "./../common/Header";
import Menu from "./../common/Menu";
import Sort from "./../common/Sort";
import Pagination from "./../common/Pagination";

const MainLayout = (props) => {
  const { pathname } = props.location;

  return (
    <Fragment>
      <Helmet>
        <title>کارتابل</title>
      </Helmet>
      <Header />
      <Menu />
      {/* {pathname === "/cartable/inbox/received/index/index" ? <Sort /> : null} */}
      <Sort />
      {props.children}
      <Pagination />
    </Fragment>
  );
};

export default withRouter(MainLayout);
