import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    return () => {
      setUsername();
      setPassword();
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://publish.com/ui/login/sign", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("accessToken", result.accessToken);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div class="container-fluid my-login">
      <Helmet>
        <title>ورود به کارتابل | شرکت رایانیرو</title>
      </Helmet>
      <div class="row no-gutter">
        <div class=""></div>
        <div class="col-md-8 col-lg-6 ml-auto mr-auto">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-7 mx-auto">
                  <h3 class="login-heading mb-4">شرکت رایانیرو</h3>
                  <form onSubmit={handleSubmit}>
                    <div class="form-label-group">
                      <label for="username">نام کاربری</label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        class="form-control"
                        aria-describedby="username"
                        placeholder="نام کاربری"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>

                    <div class="form-label-group">
                      <label for="password">رمز عبور</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="form-control"
                        aria-describedby="password"
                        value={password}
                        placeholder="رمز عبور"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <button
                      class="
                        btn btn-lg btn-block btn-login
                        text-uppercase
                        font-weight-bold
                        mb-2
                      "
                      type="submit"
                    >
                      ورود
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
