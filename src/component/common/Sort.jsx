import { Fragment } from "react";

const Sort = () => {
  return (
    <Fragment>
      <div className="sort1">
        <div className="dropdown sotoun">
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            ستون ها
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              همه
            </a>
            <a className="dropdown-item" href="#">
              سریال
            </a>
            <a className="dropdown-item" href="#">
              فرستنده
            </a>
            <a className="dropdown-item" href="#">
              موضوع
            </a>
            <a className="dropdown-item" href="#">
              هامش
            </a>
            <a className="dropdown-item" href="#">
              گیرنده
            </a>
            <a className="dropdown-item" href="#">
              تاریخ
            </a>
            <a className="dropdown-item" href="#">
              درخواست دهنده
            </a>
          </div>
        </div>

        <p className="filter">
          <button
            className="btn btn-light"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
            فیلتر بر اساس
          </button>
        </p>
        <div className="collapse sort1-toggle" id="collapseExample">
          <div className="card card-body">
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      بر اساس فرستنده - گیرنده - تاریخ
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <form>
                      <div className="row mb-3">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="گیرنده"
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="فرستنده"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="از تاریخ"
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="تا تاریخ"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      بر اساس موضوع - هامش
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="موضوع ..."
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="هامش ..."
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      بر اساس وضعیت
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <form>
                      <div className="form-row align-items-center">
                        <div className="col-3 my-1">
                          <select
                            className="custom-select mr-sm-2"
                            id="inlineFormCustomSelect"
                          >
                            <option selected disabled>
                              وضعیت
                            </option>
                            <option value="1">رونوشت</option>
                            <option value="2">ارجاع بازگشتی (اعلام نظر)</option>
                            <option value="3">ارجاع (تفویض مورد)</option>
                            <option value="3">ارجاع جهت تایید</option>
                            <option value="3">برگشت داده شده</option>
                            <option value="3">پاسخ اعلام نظر</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                data-whatever="@mdo"
              >
                ذخیره فیلتر
              </button>
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        افزودن فیلتر
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          <label
                            for="recipient-name"
                            className="col-form-label"
                          >
                            {" "}
                            : نام فیلتر
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="recipient-name"
                          />
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                          <label
                            className="form-check-label"
                            for="defaultCheck1"
                          >
                            استفاده در تمام کارتابل ها
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        لغو
                      </button>
                      <button type="button" className="btn btn-primary">
                        ذخیره
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <table className="table sort2 table-bordered">
        <thead>
          <tr>
            <th scope="col">فیلتر</th>
            <th scope="col">سریال</th>
            <th scope="col">فرستنده</th>
            <th scope="col">موضوع</th>
            <th scope="col">هامش</th>
            <th scope="col">تاریخ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <form className="form-inline">
                <select
                  className="custom-select my-1 mr-sm-2"
                  id="inlineFormCustomSelectPref"
                >
                  <option value="1" selected>
                    تایید شده
                  </option>
                  <option value="2">برگشت داده شده</option>
                  <option value="3">رونوشت</option>
                  <option value="4">جهت اعلام نظر</option>
                  <option value="5">ارجاع (تفویض مورد)</option>
                </select>
              </form>
            </th>
            <td>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="textHelp"
                  />
                </div>
              </form>
            </td>
            <td>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="textHelp"
                  />
                </div>
              </form>
            </td>
            <td>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="textHelp"
                  />
                </div>
              </form>
            </td>
            <td>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="textHelp"
                  />
                </div>
              </form>
            </td>
            <td>
              <input type="date" />
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default Sort;
