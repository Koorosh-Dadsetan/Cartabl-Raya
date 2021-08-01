import React, { Fragment } from "react";

const ListIndex = ({ list }) => {
  return (
    <Fragment>
      <div className="container-table">
        <ul className="responsive-table">
          {list != null &&
            list.map((l) => (
              <li key={l.refer_id} className="table-row li-table">
                <span data-label="Job Id"></span>
                <div
                  style={{
                    width: "14vw",
                    position: "absolute",
                    right: "6.5vw",
                    fontFamily: "samim",
                  }}
                  data-label="Customer Name"
                >
                  {l.refer_thread_id}
                </div>
                <div
                  style={{
                    width: "14vw",
                    position: "absolute",
                    right: "30.5vw",
                    fontFamily: "samim",
                    textAlign: "center",
                  }}
                  data-label="Customer Name"
                >
                  {l.creator}
                </div>
                <div
                  style={{
                    width: "15vw",
                    position: "absolute",
                    left: "36.3vw",
                    fontFamily: "samim",
                    textAlign: "center",
                  }}
                  data-label="Customer Name"
                >
                  {l.subject}
                </div>
                <div
                  style={{
                    width: "14vw",
                    position: "absolute",
                    left: "18.5vw",
                    fontFamily: "samim",
                    textAlign: "center",
                  }}
                  data-label="Amount"
                >
                  {l.note}
                </div>
                <div
                  style={{
                    width: "14vw",
                    marginLeft: "3vw",
                    fontFamily: "samim",
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
