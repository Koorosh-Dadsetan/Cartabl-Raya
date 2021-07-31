import React, { Fragment, useEffect, useState } from "react";

const ListIndex = () => {
  const [list, setList] = useState();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    var myHeaders = new Headers();
    myHeaders.append("accessToken", "279125c11b1b37bcae61591e40d6ecb328b77b11");
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

  return (
    <Fragment>
      <div className="container-table">
        <ul className="responsive-table">
          {list != null &&
            list.map((l) => (
              <li key={l.refer_id} className="table-row li-table">
                <span data-label="Job Id"></span>
                <div
                  style={{ width: "14vw", position: "absolute", right: "6vw" }}
                  data-label="Customer Name"
                >
                  {l.refer_thread_id}
                </div>
                <div
                  style={{ width: "14vw", position: "absolute", right: "28vw" }}
                  data-label="Customer Name"
                >
                  {l.creator}
                </div>
                <div
                  style={{ width: "14vw", position: "absolute", left: "37vw" }}
                  data-label="Customer Name"
                >
                  {l.subject}
                </div>
                <div
                  style={{
                    width: "14vw",
                    position: "absolute",
                    left: "22.5vw",
                  }}
                  data-label="Amount"
                >
                  {l.note}
                </div>
                <div
                  style={{
                    width: "14vw",
                    marginLeft: "3vw",
                  }}
                  data-label="Payment Status"
                >
                  {l.create_date}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default ListIndex;
