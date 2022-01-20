(this["webpackJsonptodo-app"] = this["webpackJsonptodo-app"] || []).push([
  [0],
  {
    51: function(e, t, a) {
      e.exports = a.p + "static/media/vocabularyApp.cdb3045a.png";
    },
    52: function(e, t, a) {
      e.exports = a.p + "static/media/addressBook.f9d6fea5.jpg";
    },
    53: function(e, t, a) {
      e.exports = a.p + "static/media/interviewGuide.2bb3dec7.png";
    },
    55: function(e, t, a) {
      e.exports = a(92);
    },
    60: function(e, t, a) {},
    90: function(e, t, a) {},
    91: function(e, t, a) {},
    92: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        l = a.n(n),
        r = a(44),
        o = a.n(r),
        s = (a(60), a(1)),
        i = a(2),
        c = a(5),
        u = a(4),
        m = a(6),
        d = a(95),
        p = a(98),
        h = a(97),
        E = a(96),
        v = a(9),
        g = a.n(v),
        f = "http://localhost:8089",
        b = "".concat(f, "/jpa"),
        y = "http://localhost:8083",
        w = new ((function() {
          function e() {
            Object(s.a)(this, e);
          }
          return (
            Object(i.a)(e, [
              {
                key: "executeBasicAuthenticationService",
                value: function(e, t) {
                  return g.a.get("".concat(f, "/basicauth"), {
                    headers: { authorization: this.createBasicAuthToken(e, t) }
                  });
                }
              },
              {
                key: "executeJwtAuthenticationService",
                value: function(e, t) {
                  return g.a.post("".concat(f, "/authenticate"), {
                    username: e,
                    password: t
                  });
                }
              },
              {
                key: "createBasicAuthToken",
                value: function(e, t) {
                  return "Basic " + window.btoa(e + ":" + t);
                }
              },
              {
                key: "registerSuccessfulLogin",
                value: function(e, t) {
                  sessionStorage.setItem("authenticatedUser", e),
                    this.setupAxiosInterceptors(
                      this.createBasicAuthToken(e, t)
                    );
                }
              },
              {
                key: "registerSuccessfulLoginForJwt",
                value: function(e, t) {
                  sessionStorage.setItem("authenticatedUser", e),
                    this.setupAxiosInterceptors(this.createJWTToken(t));
                }
              },
              {
                key: "createJWTToken",
                value: function(e) {
                  return "Bearer " + e;
                }
              },
              {
                key: "logout",
                value: function() {
                  sessionStorage.removeItem("authenticatedUser");
                }
              },
              {
                key: "isUserLoggedIn",
                value: function() {
                  return null !== sessionStorage.getItem("authenticatedUser");
                }
              },
              {
                key: "getLoggedInUserName",
                value: function() {
                  var e = sessionStorage.getItem("authenticatedUser");
                  return null === e ? "" : e;
                }
              },
              {
                key: "setupAxiosInterceptors",
                value: function(e) {
                  var t = this;
                  g.a.interceptors.request.use(function(a) {
                    return (
                      t.isUserLoggedIn() && (a.headers.authorization = e), a
                    );
                  });
                }
              }
            ]),
            e
          );
        })())(),
        k = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return w.isUserLoggedIn()
                    ? l.a.createElement(h.a, this.props)
                    : l.a.createElement(E.a, { to: "/login" });
                }
              }
            ]),
            t
          );
        })(n.Component),
        O = a(45),
        j = a(7),
        C = (function(e) {
          function t(e) {
            var a;
            return (
              Object(s.a)(this, t),
              ((a = Object(c.a)(this, Object(u.a)(t).call(this, e))).state = {
                username: "",
                password: "",
                hasLoginFailed: !1,
                showSuccessMessage: !1
              }),
              (a.handleChange = a.handleChange.bind(Object(j.a)(a))),
              (a.loginClicked = a.loginClicked.bind(Object(j.a)(a))),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "handleChange",
                value: function(e) {
                  this.setState(Object(O.a)({}, e.target.name, e.target.value));
                }
              },
              {
                key: "loginClicked",
                value: function() {
                  var e = this;
                  w.executeJwtAuthenticationService(
                    this.state.username,
                    this.state.password
                  )
                    .then(function(t) {
                      w.registerSuccessfulLoginForJwt(
                        e.state.username,
                        t.data.token
                      ),
                        e.props.history.push(
                          "/welcome/".concat(e.state.username)
                        );
                    })
                    .catch(function() {
                      e.setState({ showSuccessMessage: !1 }),
                        e.setState({ hasLoginFailed: !0 });
                    });
                }
              },
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "m-5 p-5" },
                    l.a.createElement("h1", null, "Login"),
                    l.a.createElement(
                      "div",
                      { className: "container" },
                      this.state.hasLoginFailed &&
                        l.a.createElement(
                          "div",
                          { className: "alert alert-warning" },
                          "Invalid Credentials"
                        ),
                      this.state.showSuccessMessage &&
                        l.a.createElement("div", null, "Login Sucessful"),
                      "User Name:",
                      " ",
                      l.a.createElement("input", {
                        type: "text",
                        name: "username",
                        value: this.state.username,
                        onChange: this.handleChange
                      }),
                      "Password:",
                      " ",
                      l.a.createElement("input", {
                        type: "password",
                        name: "password",
                        value: this.state.password,
                        onChange: this.handleChange
                      }),
                      l.a.createElement(
                        "button",
                        {
                          className: "btn btn-success",
                          onClick: this.loginClicked
                        },
                        "Login"
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        T = new ((function() {
          function e() {
            Object(s.a)(this, e);
          }
          return (
            Object(i.a)(e, [
              {
                key: "retrieveAllTodos",
                value: function(e) {
                  return g.a.get("".concat(b, "/users/").concat(e, "/todos"));
                }
              },
              {
                key: "retrieveTodo",
                value: function(e, t) {
                  return g.a.get(
                    ""
                      .concat(b, "/users/")
                      .concat(e, "/todos/")
                      .concat(t)
                  );
                }
              },
              {
                key: "deleteTodo",
                value: function(e, t) {
                  return g.a.delete(
                    ""
                      .concat(b, "/users/")
                      .concat(e, "/todos/")
                      .concat(t)
                  );
                }
              },
              {
                key: "updateTodo",
                value: function(e, t, a) {
                  return g.a.put(
                    ""
                      .concat(b, "/users/")
                      .concat(e, "/todos/")
                      .concat(t),
                    a
                  );
                }
              },
              {
                key: "createTodo",
                value: function(e, t) {
                  return g.a.post(
                    "".concat(b, "/users/").concat(e, "/todos/"),
                    t
                  );
                }
              }
            ]),
            e
          );
        })())(),
        I = a(23),
        P = a.n(I),
        S = (function(e) {
          function t(e) {
            var a;
            return (
              Object(s.a)(this, t),
              console.log("constructor"),
              ((a = Object(c.a)(this, Object(u.a)(t).call(this, e))).state = {
                todos: [],
                message: null
              }),
              (a.deleteTodoClicked = a.deleteTodoClicked.bind(Object(j.a)(a))),
              (a.updateTodoClicked = a.updateTodoClicked.bind(Object(j.a)(a))),
              (a.addTodoClicked = a.addTodoClicked.bind(Object(j.a)(a))),
              (a.refreshTodos = a.refreshTodos.bind(Object(j.a)(a))),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "componentWillUnmount",
                value: function() {
                  console.log("componentWillUnmount");
                }
              },
              {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                  return (
                    console.log("shouldComponentUpdate"),
                    console.log(e),
                    console.log(t),
                    !0
                  );
                }
              },
              {
                key: "componentDidMount",
                value: function() {
                  console.log("componentDidMount"),
                    this.refreshTodos(),
                    console.log(this.state);
                }
              },
              {
                key: "refreshTodos",
                value: function() {
                  var e = this,
                    t = w.getLoggedInUserName();
                  T.retrieveAllTodos(t).then(function(t) {
                    e.setState({ todos: t.data });
                  });
                }
              },
              {
                key: "deleteTodoClicked",
                value: function(e) {
                  var t = this,
                    a = w.getLoggedInUserName();
                  T.deleteTodo(a, e).then(function(a) {
                    t.setState({
                      message: "Delete of todo ".concat(e, " Successful")
                    }),
                      t.refreshTodos();
                  });
                }
              },
              {
                key: "addTodoClicked",
                value: function() {
                  this.props.history.push("/todos/-1");
                }
              },
              {
                key: "updateTodoClicked",
                value: function(e) {
                  console.log("update " + e),
                    this.props.history.push("/todos/".concat(e));
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this;
                  return (
                    console.log("render"),
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement("h1", null, "List Todos"),
                      this.state.message &&
                        l.a.createElement(
                          "div",
                          { class: "alert alert-success" },
                          this.state.message
                        ),
                      l.a.createElement(
                        "div",
                        { className: "container" },
                        l.a.createElement(
                          "table",
                          { className: "table" },
                          l.a.createElement(
                            "thead",
                            null,
                            l.a.createElement(
                              "tr",
                              null,
                              l.a.createElement("th", null, "Description"),
                              l.a.createElement("th", null, "Target Date"),
                              l.a.createElement("th", null, "IsCompleted?"),
                              l.a.createElement("th", null, "Update"),
                              l.a.createElement("th", null, "Delete")
                            )
                          ),
                          l.a.createElement(
                            "tbody",
                            null,
                            this.state.todos.map(function(t) {
                              return l.a.createElement(
                                "tr",
                                { key: t.id },
                                l.a.createElement("td", null, t.description),
                                l.a.createElement(
                                  "td",
                                  null,
                                  P()(t.targetDate).format("YYYY-MM-DD")
                                ),
                                l.a.createElement(
                                  "td",
                                  null,
                                  t.done.toString()
                                ),
                                l.a.createElement(
                                  "td",
                                  null,
                                  l.a.createElement(
                                    "button",
                                    {
                                      className: "btn btn-success",
                                      onClick: function() {
                                        return e.updateTodoClicked(t.id);
                                      }
                                    },
                                    "Update"
                                  )
                                ),
                                l.a.createElement(
                                  "td",
                                  null,
                                  l.a.createElement(
                                    "button",
                                    {
                                      className: "btn btn-warning",
                                      onClick: function() {
                                        return e.deleteTodoClicked(t.id);
                                      }
                                    },
                                    "Delete"
                                  )
                                )
                              );
                            })
                          )
                        ),
                        l.a.createElement(
                          "div",
                          { className: "row" },
                          l.a.createElement(
                            "button",
                            {
                              className: "btn btn-success",
                              onClick: this.addTodoClicked
                            },
                            "Add"
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      var N = function() {
          return l.a.createElement(
            "div",
            null,
            "An Error Occurred. I don't know what to do! Contact support at abcd-efgh-ijkl"
          );
        },
        x = a(94),
        A = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = w.isUserLoggedIn();
                  return l.a.createElement(
                    "header",
                    null,
                    l.a.createElement(
                      "nav",
                      {
                        className: "navbar navbar-expand-md navbar-dark bg-dark"
                      },
                      l.a.createElement(
                        "div",
                        null,
                        l.a.createElement(
                          "a",
                          { href: "aboutUs", className: "navbar-brand" },
                          "INTERVIEW GUIDE"
                        )
                      ),
                      l.a.createElement(
                        "ul",
                        { className: "navbar-nav" },
                        e &&
                          l.a.createElement(
                            "li",
                            null,
                            l.a.createElement(
                              x.a,
                              {
                                className: "nav-link",
                                to: "/welcome/in28minutes"
                              },
                              "Home"
                            )
                          ),
                        l.a.createElement(
                          "li",
                          null,
                          l.a.createElement(
                            x.a,
                            { className: "nav-link", to: "/qaHome" },
                            "Interview Guide Home"
                          )
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          l.a.createElement(
                            x.a,
                            { className: "nav-link", to: "/questions" },
                            "Interview Guide"
                          )
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          l.a.createElement(
                            x.a,
                            { className: "nav-link", to: "/all" },
                            "QnA Pagination All"
                          )
                        ),
                        e &&
                          l.a.createElement(
                            "li",
                            null,
                            l.a.createElement(
                              x.a,
                              { className: "nav-link", to: "/todos" },
                              "Todos"
                            )
                          ),
                        e &&
                          l.a.createElement(
                            "li",
                            null,
                            l.a.createElement(
                              x.a,
                              { className: "nav-link", to: "/addQuestion/-1" },
                              "Add Questions"
                            )
                          ),
                        l.a.createElement(
                          "div",
                          null,
                          l.a.createElement(
                            x.a,
                            { className: "nav-link", to: "/projects" },
                            "Projects"
                          )
                        ),
                        l.a.createElement(
                          "div",
                          null,
                          l.a.createElement(
                            x.a,
                            {
                              className: "nav-link",
                              to: "/blog/java/streamAPI"
                            },
                            "Stream API"
                          )
                        ),
                        l.a.createElement(
                          "div",
                          null,
                          l.a.createElement(
                            x.a,
                            { className: "nav-link", to: "/interviewProcess" },
                            "Interview Process"
                          )
                        ),
                        l.a.createElement(
                          "div",
                          null,
                          l.a.createElement(
                            x.a,
                            {
                              className: "nav-link",
                              to: "/prepareForInterview"
                            },
                            "Prepare For Interview"
                          )
                        ),
                        l.a.createElement(
                          "div",
                          null,
                          l.a.createElement(
                            x.a,
                            { className: "nav-link", to: "/privacyPolicyMain" },
                            "Privacy Policy"
                          )
                        )
                      ),
                      l.a.createElement(
                        "ul",
                        {
                          className:
                            "navbar-nav navbar-collapse justify-content-end"
                        },
                        !e &&
                          l.a.createElement(
                            "li",
                            null,
                            l.a.createElement(
                              x.a,
                              { className: "nav-link", to: "/login" },
                              "Login"
                            )
                          ),
                        e &&
                          l.a.createElement(
                            "li",
                            null,
                            l.a.createElement(
                              x.a,
                              {
                                className: "nav-link",
                                to: "/logout",
                                onClick: w.logout
                              },
                              "Logout"
                            )
                          )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        L = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "footer",
                    {
                      class:
                        "page-footer font-small mdb-color lighten-1 pt-1 bg-secondary"
                    },
                    l.a.createElement(
                      "div",
                      { class: " text-center text-md-left" },
                      l.a.createElement(
                        "div",
                        { class: "row bg-light" },
                        l.a.createElement(
                          "div",
                          {
                            class:
                              "col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1  m-5 p5"
                          },
                          l.a.createElement(
                            "h5",
                            { class: "font-weight-bold text-uppercase mb-4" },
                            "Thank You!"
                          ),
                          l.a.createElement(
                            "p",
                            null,
                            "Your comments and complements are always the inspiration that will motivate me to improve myself."
                          )
                        ),
                        l.a.createElement("hr", {
                          class: "clearfix w-100 d-md-none"
                        }),
                        l.a.createElement(
                          "div",
                          {
                            class:
                              "col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1"
                          },
                          l.a.createElement(
                            "h5",
                            { class: "font-weight-bold text-uppercase mb-4" },
                            "About"
                          ),
                          l.a.createElement(
                            "ul",
                            { class: "list-unstyled" },
                            l.a.createElement(
                              "li",
                              null,
                              l.a.createElement(
                                "p",
                                null,
                                l.a.createElement(
                                  "a",
                                  { href: "#!" },
                                  "PROJECTS"
                                )
                              )
                            ),
                            l.a.createElement(
                              "li",
                              null,
                              l.a.createElement(
                                "p",
                                null,
                                l.a.createElement(
                                  "a",
                                  { href: "#!" },
                                  "ABOUT US"
                                )
                              )
                            )
                          )
                        ),
                        l.a.createElement("hr", {
                          class: "clearfix w-100 d-md-none"
                        }),
                        l.a.createElement(
                          "div",
                          {
                            class:
                              "col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1"
                          },
                          l.a.createElement(
                            "h5",
                            { class: "font-weight-bold text-uppercase mb-4" },
                            "Address"
                          ),
                          l.a.createElement(
                            "ul",
                            { class: "list-unstyled" },
                            l.a.createElement(
                              "li",
                              null,
                              l.a.createElement(
                                "p",
                                null,
                                l.a.createElement("i", {
                                  className: "fas fa-home mr-3"
                                }),
                                " Chicago, IL 60070, US"
                              )
                            ),
                            l.a.createElement(
                              "li",
                              null,
                              l.a.createElement(
                                "p",
                                null,
                                l.a.createElement("i", {
                                  className: "fas fa-envelope mr-3"
                                }),
                                " rbnpantha@gmail.com"
                              )
                            ),
                            l.a.createElement(
                              "li",
                              null,
                              l.a.createElement(
                                "p",
                                null,
                                l.a.createElement("i", {
                                  className: "fas fa-phone mr-3"
                                }),
                                " 641"
                              )
                            ),
                            l.a.createElement(
                              "li",
                              null,
                              l.a.createElement(
                                "p",
                                null,
                                l.a.createElement("i", {
                                  class: "fas fa-print mr-3"
                                }),
                                " 641"
                              )
                            )
                          )
                        ),
                        l.a.createElement("hr", {
                          class: "clearfix w-1 d-md-none"
                        }),
                        l.a.createElement(
                          "div",
                          {
                            class: "col-md-2 col-lg-2 text-center mx-auto my-4"
                          },
                          l.a.createElement(
                            "h5",
                            { class: "font-weight-bold text-uppercase mb-4" },
                            "Follow Us"
                          ),
                          l.a.createElement(
                            "a",
                            {
                              type: "button",
                              class: "btn-floating btn-fb p-3"
                            },
                            l.a.createElement("i", {
                              class: "fab fa-facebook-f"
                            })
                          ),
                          l.a.createElement(
                            "a",
                            {
                              type: "button",
                              class: "btn-floating btn-tw p-3"
                            },
                            l.a.createElement("i", { class: "fab fa-twitter" })
                          ),
                          l.a.createElement(
                            "a",
                            {
                              type: "button",
                              class: "btn-floating btn-gplus p-3"
                            },
                            l.a.createElement("i", {
                              class: "fab fa-google-plus-g"
                            })
                          ),
                          l.a.createElement(
                            "a",
                            {
                              type: "button",
                              class: "btn-floating btn-dribbble p-3"
                            },
                            l.a.createElement("i", { class: "fab fa-dribbble" })
                          )
                        )
                      )
                    ),
                    l.a.createElement(
                      "div",
                      {
                        className:
                          "footer-copyright text-center py-3 text-light"
                      },
                      "\xa9 2020 Copyright:",
                      l.a.createElement(
                        "a",
                        {
                          href: "https://dig-it.com/",
                          className: "text-light"
                        },
                        " ",
                        "dig-it.com"
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        B = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement("h1", null, "You are logged out"),
                    l.a.createElement(
                      "div",
                      { className: "container" },
                      "Thank You for Using Our Application."
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        D = new ((function() {
          function e() {
            Object(s.a)(this, e);
          }
          return (
            Object(i.a)(e, [
              {
                key: "executeHelloWorldService",
                value: function() {
                  return g.a.get("".concat(f, "/hello-world"));
                }
              },
              {
                key: "executeHelloWorldBeanService",
                value: function() {
                  return g.a.get("".concat(f, "/hello-world-bean"));
                }
              },
              {
                key: "executeHelloWorldPathVariableService",
                value: function(e) {
                  return g.a.get(
                    "".concat(f, "/hello-world/path-variable/").concat(e)
                  );
                }
              }
            ]),
            e
          );
        })())(),
        q = (function(e) {
          function t(e) {
            var a;
            return (
              Object(s.a)(this, t),
              ((a = Object(c.a)(
                this,
                Object(u.a)(t).call(this, e)
              )).retrieveWelcomeMessage = a.retrieveWelcomeMessage.bind(
                Object(j.a)(a)
              )),
              (a.state = { welcomeMessage: "" }),
              (a.handleSuccessfulResponse = a.handleSuccessfulResponse.bind(
                Object(j.a)(a)
              )),
              (a.handleError = a.handleError.bind(Object(j.a)(a))),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement("h1", null, "Welcome!"),
                    l.a.createElement(
                      "div",
                      { className: "container" },
                      "Welcome ",
                      this.props.match.params.name,
                      ". You can manage your todos ",
                      l.a.createElement(x.a, { to: "/todos" }, "here"),
                      "."
                    ),
                    l.a.createElement(
                      "div",
                      { className: "container" },
                      "Click here to get a customized welcome message.",
                      l.a.createElement(
                        "button",
                        {
                          onClick: this.retrieveWelcomeMessage,
                          className: "btn btn-success"
                        },
                        "Get Welcome Message"
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "container" },
                      this.state.welcomeMessage
                    )
                  );
                }
              },
              {
                key: "retrieveWelcomeMessage",
                value: function() {
                  var e = this;
                  D.executeHelloWorldPathVariableService(
                    this.props.match.params.name
                  )
                    .then(function(t) {
                      return e.handleSuccessfulResponse(t);
                    })
                    .catch(function(t) {
                      return e.handleError(t);
                    });
                }
              },
              {
                key: "handleSuccessfulResponse",
                value: function(e) {
                  console.log(e),
                    this.setState({ welcomeMessage: e.data.message });
                }
              },
              {
                key: "handleError",
                value: function(e) {
                  console.log(e.response);
                  var t = "";
                  e.message && (t += e.message),
                    e.response &&
                      e.response.data &&
                      (t += e.response.data.message),
                    this.setState({ welcomeMessage: t });
                }
              }
            ]),
            t
          );
        })(n.Component),
        M = a(25),
        Q = (function(e) {
          function t(e) {
            var a;
            return (
              Object(s.a)(this, t),
              ((a = Object(c.a)(this, Object(u.a)(t).call(this, e))).state = {
                id: a.props.match.params.id,
                description: "",
                targetDate: P()(new Date()).format("YYYY-MM-DD")
              }),
              (a.onSubmit = a.onSubmit.bind(Object(j.a)(a))),
              (a.validate = a.validate.bind(Object(j.a)(a))),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  if (-1 !== this.state.id) {
                    var t = w.getLoggedInUserName();
                    T.retrieveTodo(t, this.state.id).then(function(t) {
                      return e.setState({
                        description: t.data.description,
                        targetDate: P()(t.data.targetDate).format("YYYY-MM-DD")
                      });
                    });
                  }
                }
              },
              {
                key: "validate",
                value: function(e) {
                  var t = {};
                  return (
                    e.description
                      ? e.description.length < 5 &&
                        (t.description =
                          "Enter atleast 5 Characters in Description")
                      : (t.description = "Enter a Description"),
                    P()(e.targetDate).isValid() ||
                      (t.targetDate = "Enter a valid Target Date"),
                    t
                  );
                }
              },
              {
                key: "onSubmit",
                value: function(e) {
                  var t = this,
                    a = w.getLoggedInUserName(),
                    n = {
                      id: this.state.id,
                      description: e.description,
                      targetDate: e.targetDate
                    };
                  -1 === this.state.id
                    ? T.createTodo(a, n).then(function() {
                        return t.props.history.push("/todos");
                      })
                    : T.updateTodo(a, this.state.id, n).then(function() {
                        return t.props.history.push("/todos");
                      }),
                    console.log(e);
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.state,
                    t = e.description,
                    a = e.targetDate;
                  return l.a.createElement(
                    "div",
                    null,
                    l.a.createElement("h1", null, "Todo"),
                    l.a.createElement(
                      "div",
                      { className: "container" },
                      l.a.createElement(
                        M.d,
                        {
                          initialValues: { description: t, targetDate: a },
                          onSubmit: this.onSubmit,
                          validateOnChange: !1,
                          validateOnBlur: !1,
                          validate: this.validate,
                          enableReinitialize: !0
                        },
                        function(e) {
                          return l.a.createElement(
                            M.c,
                            null,
                            l.a.createElement(M.a, {
                              name: "description",
                              component: "div",
                              className: "alert alert-warning"
                            }),
                            l.a.createElement(M.a, {
                              name: "targetDate",
                              component: "div",
                              className: "alert alert-warning"
                            }),
                            l.a.createElement(
                              "fieldset",
                              { className: "form-group" },
                              l.a.createElement("label", null, "Description"),
                              l.a.createElement(M.b, {
                                className: "form-control",
                                type: "text",
                                name: "description"
                              })
                            ),
                            l.a.createElement(
                              "fieldset",
                              { className: "form-group" },
                              l.a.createElement("label", null, "Target Date"),
                              l.a.createElement(M.b, {
                                className: "form-control",
                                type: "date",
                                name: "targetDate"
                              })
                            ),
                            l.a.createElement(
                              "button",
                              { className: "btn btn-success", type: "submit" },
                              "Save"
                            )
                          );
                        }
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        J = new ((function() {
          function e() {
            Object(s.a)(this, e);
          }
          return (
            Object(i.a)(e, [
              {
                key: "retrieveAllQnAs",
                value: function() {
                  return (
                    console.log("executed service"),
                    g.a.get("".concat(y, "/qa/all"))
                  );
                }
              },
              {
                key: "retrieveQnAsByType",
                value: function(e) {
                  return (
                    console.log("executed service"),
                    g.a.get("".concat(y, "/qa/language/") + e)
                  );
                }
              },
              {
                key: "retrieveQnA",
                value: function(e) {
                  return g.a.get("".concat(y, "/users/todos/").concat(e));
                }
              },
              {
                key: "deleteQnA",
                value: function(e) {
                  return g.a.delete("".concat(y, "/users/todos/").concat(e));
                }
              },
              {
                key: "updateQnA",
                value: function(e, t) {
                  return g.a.put("".concat(y, "/users/todos/").concat(e), t);
                }
              },
              {
                key: "createQnA",
                value: function(e) {
                  return (
                    console.log("executed service"),
                    g.a.post("".concat(y, "/qa/add"), e)
                  );
                }
              }
            ]),
            e
          );
        })())(),
        U = (function(e) {
          function t(e) {
            var a;
            return (
              Object(s.a)(this, t),
              console.log(e.languageType),
              console.log("constructor"),
              ((a = Object(c.a)(this, Object(u.a)(t).call(this, e))).state = {
                QnAs: [],
                message: null
              }),
              (a.deleteQnAClicked = a.deleteQnAClicked.bind(Object(j.a)(a))),
              (a.updateQnAClicked = a.updateQnAClicked.bind(Object(j.a)(a))),
              (a.addQnAClicked = a.addQnAClicked.bind(Object(j.a)(a))),
              (a.refreshQnAs = a.refreshQnAs.bind(Object(j.a)(a))),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "componentWillUnmount",
                value: function() {
                  console.log("componentWillUnmount");
                }
              },
              {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                  return (
                    console.log("shouldComponentUpdate"),
                    console.log(e),
                    console.log(t),
                    !0
                  );
                }
              },
              {
                key: "componentDidMount",
                value: function() {
                  console.log("componentDidMount"),
                    this.refreshQnAs(),
                    console.log(this.state);
                }
              },
              {
                key: "refreshQnAs",
                value: function() {
                  var e = this,
                    t = this.props.languageType;
                  console.log(t),
                    J.retrieveQnAsByType(t).then(function(t) {
                      console.log("response is " + t),
                        e.setState({ QnAs: t.data });
                    });
                }
              },
              {
                key: "deleteQnAClicked",
                value: function(e) {
                  var t = this;
                  J.deleteQnA(e).then(function(a) {
                    t.setState({
                      message: "Delete of QnA ".concat(e, " Successful")
                    }),
                      t.refreshQnAs();
                  });
                }
              },
              {
                key: "addQnAClicked",
                value: function() {
                  this.props.history.push("/todos/-1");
                }
              },
              {
                key: "updateQnAClicked",
                value: function(e) {
                  console.log("update " + e),
                    this.props.history.push("/todos/".concat(e));
                }
              },
              {
                key: "render",
                value: function() {
                  console.log("render"),
                    console.log(this.props.languageType),
                    console.log(this.props);
                  var e = 1;
                  return l.a.createElement(
                    "div",
                    { className: "container mt-5" },
                    l.a.createElement(
                      "div",
                      null,
                      this.state.QnAs.map(function(t) {
                        return l.a.createElement(
                          "div",
                          { className: "mt-10 mb-5", key: t.questionId },
                          l.a.createElement(
                            "h3",
                            { className: "text-left" },
                            e++,
                            ". ",
                            t.question
                          ),
                          l.a.createElement(
                            "p",
                            { className: "text-left" },
                            t.answer
                          )
                        );
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        F = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  console.log("render");
                  return l.a.createElement(
                    "div",
                    null,
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        "h1",
                        { className: "text-primary mb-5" },
                        "Java Interview Questions"
                      ),
                      l.a.createElement(U, { languageType: "java" }),
                      l.a.createElement(
                        "nav",
                        { class: "blog-pagination  p-3 " },
                        l.a.createElement(
                          "a",
                          { class: "btn btn-outline-primary", href: "#" },
                          "go to top"
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        R = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "TodoApp container" },
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        "div",
                        { className: "container" },
                        l.a.createElement(
                          "h1",
                          null,
                          "Welcome to Interview Guide"
                        ),
                        l.a.createElement("h4", null, "Overview"),
                        l.a.createElement(
                          "div",
                          null,
                          "We are honored to see you in our space. The sole intention of this space is to guide you throughout all stages of programming and designing. We will guide you from basic to advance level of tutorials, interview materials and practice questions. Also we will provide you the possible behavioral questions. Also, from this space we will post various use ful blogs where you can also contribute."
                        ),
                        l.a.createElement(
                          "div",
                          null,
                          "Our team is committed to help you throughout all the stages of the software development life cycle. Thank you for believing us."
                        ),
                        l.a.createElement(
                          "div",
                          null,
                          l.a.createElement(
                            "a",
                            {
                              type: "button",
                              class: "btn-floating btn-fb p-3"
                            },
                            l.a.createElement(
                              x.a,
                              { className: "nav-link", to: "/java" },
                              "Java"
                            )
                          ),
                          l.a.createElement(
                            "a",
                            {
                              type: "button",
                              class: "btn-floating btn-tw p-3"
                            },
                            l.a.createElement(
                              x.a,
                              { className: "nav-link", to: "/kafka" },
                              "Kafka"
                            )
                          ),
                          l.a.createElement(
                            "a",
                            {
                              type: "button",
                              class: "btn-floating btn-fb p-3"
                            },
                            l.a.createElement(
                              x.a,
                              { className: "nav-link", to: "/cassandra" },
                              "Cassandra"
                            )
                          ),
                          l.a.createElement(
                            "a",
                            {
                              type: "button",
                              class: "btn-floating btn-tw p-3"
                            },
                            l.a.createElement(
                              x.a,
                              { className: "nav-link", to: "/sql" },
                              "MySQL"
                            )
                          ),
                          l.a.createElement(
                            "a",
                            {
                              type: "button",
                              class: "btn-floating btn-fb p-3"
                            },
                            l.a.createElement(
                              x.a,
                              { className: "nav-link", to: "/react" },
                              "React"
                            )
                          )
                        ),
                        l.a.createElement(
                          "div",
                          null,
                          l.a.createElement(
                            "a",
                            {
                              type: "button",
                              class: "btn-floating btn-fb p-3"
                            },
                            l.a.createElement(
                              x.a,
                              { className: "nav-link", to: "/java" },
                              "Java"
                            )
                          ),
                          l.a.createElement(
                            "a",
                            {
                              type: "button",
                              class: "btn-floating btn-tw p-3"
                            },
                            l.a.createElement(
                              x.a,
                              { className: "nav-link", to: "/kafka" },
                              "Kafka"
                            )
                          ),
                          l.a.createElement(
                            "a",
                            {
                              type: "button",
                              class: "btn-floating btn-fb p-3"
                            },
                            l.a.createElement(
                              x.a,
                              { className: "nav-link", to: "/cassandra" },
                              "Cassandra"
                            )
                          ),
                          l.a.createElement(
                            "a",
                            {
                              type: "button",
                              class: "btn-floating btn-tw p-3"
                            },
                            l.a.createElement(
                              x.a,
                              { className: "nav-link", to: "/sql" },
                              "MySQL"
                            )
                          ),
                          l.a.createElement(
                            "a",
                            {
                              type: "button",
                              class: "btn-floating btn-fb p-3"
                            },
                            l.a.createElement(
                              x.a,
                              { className: "nav-link", to: "/react" },
                              "React"
                            )
                          )
                        ),
                        l.a.createElement(
                          "div",
                          null,
                          l.a.createElement(
                            "a",
                            {
                              type: "button",
                              class: "btn-floating btn-fb p-3"
                            },
                            l.a.createElement(
                              x.a,
                              { className: "nav-link", to: "/java" },
                              "Java"
                            )
                          ),
                          l.a.createElement(
                            "a",
                            {
                              type: "button",
                              class: "btn-floating btn-tw p-3"
                            },
                            l.a.createElement(
                              x.a,
                              { className: "nav-link", to: "/kafka" },
                              "Kafka"
                            )
                          ),
                          l.a.createElement(
                            "a",
                            {
                              type: "button",
                              class: "btn-floating btn-fb p-3"
                            },
                            l.a.createElement(
                              x.a,
                              { className: "nav-link", to: "/cassandra" },
                              "Cassandra"
                            )
                          ),
                          l.a.createElement(
                            "a",
                            {
                              type: "button",
                              class: "btn-floating btn-tw p-3"
                            },
                            l.a.createElement(
                              x.a,
                              { className: "nav-link", to: "/sql" },
                              "MySQL"
                            )
                          ),
                          l.a.createElement(
                            "a",
                            {
                              type: "button",
                              class: "btn-floating btn-fb p-3"
                            },
                            l.a.createElement(
                              x.a,
                              { className: "nav-link", to: "/react" },
                              "React"
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { class: "card-deck mb-4" },
                        l.a.createElement(
                          "div",
                          { class: "card" },
                          l.a.createElement("img", {
                            class: "card-img-top",
                            src:
                              "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
                            alt: "Card image cap"
                          }),
                          l.a.createElement(
                            "div",
                            { class: "card-body" },
                            l.a.createElement(
                              "h5",
                              { class: "card-title" },
                              "Card title"
                            ),
                            l.a.createElement(
                              "p",
                              { class: "card-text" },
                              "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                            ),
                            l.a.createElement(
                              "p",
                              { class: "card-text" },
                              l.a.createElement(
                                "small",
                                { class: "text-muted" },
                                "Last updated 3 mins ago"
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          "div",
                          { class: "card" },
                          l.a.createElement("img", {
                            class: "card-img-top",
                            src:
                              "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
                            alt: "Card image cap"
                          }),
                          l.a.createElement(
                            "div",
                            { class: "card-body" },
                            l.a.createElement(
                              "h5",
                              { class: "card-title" },
                              "Card title"
                            ),
                            l.a.createElement(
                              "p",
                              { class: "card-text" },
                              "This card has supporting text below as a natural lead-in to additional content."
                            ),
                            l.a.createElement(
                              "p",
                              { class: "card-text" },
                              l.a.createElement(
                                "small",
                                { class: "text-muted" },
                                "Last updated 3 mins ago"
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          "div",
                          { class: "container card" },
                          l.a.createElement("img", {
                            class: "card-img-top",
                            src:
                              "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
                            alt: "Card image cap"
                          }),
                          l.a.createElement(
                            "div",
                            { class: "card-body" },
                            l.a.createElement(
                              "h5",
                              { class: "card-title" },
                              "Card title"
                            ),
                            l.a.createElement(
                              "p",
                              { class: "card-text" },
                              "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
                            ),
                            l.a.createElement(
                              "p",
                              { class: "card-text" },
                              l.a.createElement(
                                "small",
                                { class: "text-muted" },
                                "Last updated 3 mins ago"
                              )
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        "main",
                        { role: "main", class: "container" },
                        l.a.createElement(
                          "div",
                          { class: "row" },
                          l.a.createElement(
                            "div",
                            { class: "col-md-8 blog-main" },
                            l.a.createElement(
                              "h3",
                              { class: "pb-3 mb-4 font-italic border-bottom" },
                              "From the Firehose"
                            ),
                            l.a.createElement(
                              "div",
                              { class: "blog-post" },
                              l.a.createElement(
                                "h2",
                                { class: "blog-post-title" },
                                "Sample blog post"
                              ),
                              l.a.createElement(
                                "p",
                                { class: "blog-post-meta" },
                                "January 1, 2014 by ",
                                l.a.createElement("a", { href: "#" }, "Mark")
                              ),
                              l.a.createElement(
                                "p",
                                null,
                                "This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported."
                              ),
                              l.a.createElement("hr", null),
                              l.a.createElement(
                                "p",
                                null,
                                "Cum sociis natoque penatibus et magnis",
                                " ",
                                l.a.createElement(
                                  "a",
                                  { href: "#" },
                                  "dis parturient montes"
                                ),
                                ", nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."
                              ),
                              l.a.createElement(
                                "blockquote",
                                null,
                                l.a.createElement(
                                  "p",
                                  null,
                                  "Curabitur blandit tempus porttitor.",
                                  " ",
                                  l.a.createElement(
                                    "strong",
                                    null,
                                    "Nullam quis risus eget urna mollis"
                                  ),
                                  " ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit."
                                )
                              ),
                              l.a.createElement(
                                "p",
                                null,
                                "Etiam porta ",
                                l.a.createElement(
                                  "em",
                                  null,
                                  "sem malesuada magna"
                                ),
                                " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."
                              ),
                              l.a.createElement("h2", null, "Heading"),
                              l.a.createElement(
                                "p",
                                null,
                                "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
                              ),
                              l.a.createElement("h3", null, "Sub-heading"),
                              l.a.createElement(
                                "p",
                                null,
                                "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                              ),
                              l.a.createElement(
                                "pre",
                                null,
                                l.a.createElement(
                                  "code",
                                  null,
                                  "Example code block"
                                )
                              ),
                              l.a.createElement(
                                "p",
                                null,
                                "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa."
                              ),
                              l.a.createElement("h3", null, "Sub-heading"),
                              l.a.createElement(
                                "p",
                                null,
                                "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
                              ),
                              l.a.createElement(
                                "ul",
                                null,
                                l.a.createElement(
                                  "li",
                                  null,
                                  "Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  "Donec id elit non mi porta gravida at eget metus."
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  "Nulla vitae elit libero, a pharetra augue."
                                )
                              ),
                              l.a.createElement(
                                "p",
                                null,
                                "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue."
                              ),
                              l.a.createElement(
                                "ol",
                                null,
                                l.a.createElement(
                                  "li",
                                  null,
                                  "Vestibulum id ligula porta felis euismod semper."
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  "Maecenas sed diam eget risus varius blandit sit amet non magna."
                                )
                              ),
                              l.a.createElement(
                                "p",
                                null,
                                "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis."
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { class: "blog-post" },
                              l.a.createElement(
                                "h2",
                                { class: "blog-post-title" },
                                "Another blog post"
                              ),
                              l.a.createElement(
                                "p",
                                { class: "blog-post-meta" },
                                "December 23, 2013 by ",
                                l.a.createElement("a", { href: "#" }, "Jacob")
                              ),
                              l.a.createElement(
                                "p",
                                null,
                                "Cum sociis natoque penatibus et magnis",
                                " ",
                                l.a.createElement(
                                  "a",
                                  { href: "#" },
                                  "dis parturient montes"
                                ),
                                ", nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."
                              ),
                              l.a.createElement(
                                "blockquote",
                                null,
                                l.a.createElement(
                                  "p",
                                  null,
                                  "Curabitur blandit tempus porttitor.",
                                  " ",
                                  l.a.createElement(
                                    "strong",
                                    null,
                                    "Nullam quis risus eget urna mollis"
                                  ),
                                  " ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit."
                                )
                              ),
                              l.a.createElement(
                                "p",
                                null,
                                "Etiam porta ",
                                l.a.createElement(
                                  "em",
                                  null,
                                  "sem malesuada magna"
                                ),
                                " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."
                              ),
                              l.a.createElement(
                                "p",
                                null,
                                "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { class: "blog-post" },
                              l.a.createElement(
                                "h2",
                                { class: "blog-post-title" },
                                "New feature"
                              ),
                              l.a.createElement(
                                "p",
                                { class: "blog-post-meta" },
                                "December 14, 2013 by ",
                                l.a.createElement("a", { href: "#" }, "Chris")
                              ),
                              l.a.createElement(
                                "p",
                                null,
                                "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
                              ),
                              l.a.createElement(
                                "ul",
                                null,
                                l.a.createElement(
                                  "li",
                                  null,
                                  "Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  "Donec id elit non mi porta gravida at eget metus."
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  "Nulla vitae elit libero, a pharetra augue."
                                )
                              ),
                              l.a.createElement(
                                "p",
                                null,
                                "Etiam porta ",
                                l.a.createElement(
                                  "em",
                                  null,
                                  "sem malesuada magna"
                                ),
                                " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."
                              ),
                              l.a.createElement(
                                "p",
                                null,
                                "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue."
                              )
                            ),
                            l.a.createElement(
                              "nav",
                              { class: "blog-pagination  p-3 col-1" },
                              l.a.createElement(
                                "a",
                                { class: "btn btn-outline-primary", href: "#" },
                                "go to top"
                              )
                            )
                          ),
                          l.a.createElement(
                            "aside",
                            { class: "col-md-4 blog-sidebar" },
                            l.a.createElement(
                              "div",
                              { class: "p-3 mb-3 bg-light rounded" },
                              l.a.createElement(
                                "h4",
                                { class: "font-italic" },
                                "About"
                              ),
                              l.a.createElement(
                                "p",
                                { class: "mb-0" },
                                "Etiam porta ",
                                l.a.createElement(
                                  "em",
                                  null,
                                  "sem malesuada magna"
                                ),
                                " mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { class: "p-3" },
                              l.a.createElement(
                                "h4",
                                { class: "font-italic" },
                                "Archives"
                              ),
                              l.a.createElement(
                                "ol",
                                { class: "list-unstyled mb-0" },
                                l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement(
                                    "a",
                                    { href: "#" },
                                    "March 2014"
                                  )
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement(
                                    "a",
                                    { href: "#" },
                                    "February 2014"
                                  )
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement(
                                    "a",
                                    { href: "#" },
                                    "January 2014"
                                  )
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement(
                                    "a",
                                    { href: "#" },
                                    "December 2013"
                                  )
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement(
                                    "a",
                                    { href: "#" },
                                    "November 2013"
                                  )
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement(
                                    "a",
                                    { href: "#" },
                                    "October 2013"
                                  )
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement(
                                    "a",
                                    { href: "#" },
                                    "September 2013"
                                  )
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement(
                                    "a",
                                    { href: "#" },
                                    "August 2013"
                                  )
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement(
                                    "a",
                                    { href: "#" },
                                    "July 2013"
                                  )
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement(
                                    "a",
                                    { href: "#" },
                                    "June 2013"
                                  )
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement(
                                    "a",
                                    { href: "#" },
                                    "May 2013"
                                  )
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement(
                                    "a",
                                    { href: "#" },
                                    "April 2013"
                                  )
                                )
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { class: "p-3" },
                              l.a.createElement(
                                "h4",
                                { class: "font-italic" },
                                "Elsewhere"
                              ),
                              l.a.createElement(
                                "ol",
                                { class: "list-unstyled" },
                                l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement(
                                    "a",
                                    { href: "#" },
                                    "GitHub"
                                  )
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement(
                                    "a",
                                    { href: "#" },
                                    "Twitter"
                                  )
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement(
                                    "a",
                                    { href: "#" },
                                    "Facebook"
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        W = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return (
                    console.log("render"),
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        "div",
                        { className: "container" },
                        l.a.createElement(
                          "h1",
                          null,
                          "React Interview Questions"
                        ),
                        l.a.createElement(U, null)
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        G = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  console.log("render");
                  return l.a.createElement(
                    "div",
                    null,
                    l.a.createElement(
                      "div",
                      { className: "container" },
                      l.a.createElement(
                        "h1",
                        null,
                        "Kafka Interview Questions"
                      ),
                      l.a.createElement(U, { languageType: "kafka" })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        Y = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return (
                    console.log("render"),
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        "div",
                        { className: "container" },
                        l.a.createElement(
                          "h1",
                          null,
                          "Cassandra Interview Questions"
                        ),
                        l.a.createElement(U, null)
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        H = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return (
                    console.log("render"),
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        "div",
                        { className: "container" },
                        l.a.createElement(
                          "h1",
                          null,
                          "SQL Interview Questions"
                        ),
                        l.a.createElement(U, null)
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        V = a(13),
        z = (function(e) {
          function t(e) {
            var a;
            return (
              Object(s.a)(this, t),
              ((a = Object(c.a)(this, Object(u.a)(t).call(this, e))).state = {
                id: a.props.match.params.id,
                createdBy: "",
                createdDate: "",
                languageType: "Java",
                topic: "Core Java",
                subTopic: "Introduction of Java",
                question: "",
                answer: "",
                difficultyLevel: "BEGINNER",
                isLastMinutePreparation: !1
              }),
              (a.handleLanguageTypeChange = a.handleLanguageTypeChange.bind(
                Object(j.a)(a)
              )),
              (a.handleTopicChange = a.handleTopicChange.bind(Object(j.a)(a))),
              (a.handlesubTopicChange = a.handlesubTopicChange.bind(
                Object(j.a)(a)
              )),
              (a.handleQuestionChange = a.handleQuestionChange.bind(
                Object(j.a)(a)
              )),
              (a.handleAnswerChange = a.handleAnswerChange.bind(
                Object(j.a)(a)
              )),
              (a.handleDifficultyLevelChange = a.handleDifficultyLevelChange.bind(
                Object(j.a)(a)
              )),
              (a.handleLastMinutePreparationChange = a.handleLastMinutePreparationChange.bind(
                Object(j.a)(a)
              )),
              (a.onSubmit = a.onSubmit.bind(Object(j.a)(a))),
              (a.validate = a.validate.bind(Object(j.a)(a))),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              { key: "validate", value: function(e) {} },
              {
                key: "handleLanguageTypeChange",
                value: function(e) {
                  this.setState({ languageType: e.target.value });
                }
              },
              {
                key: "handleTopicChange",
                value: function(e) {
                  this.setState({ topic: e.target.value });
                }
              },
              {
                key: "handlesubTopicChange",
                value: function(e) {
                  this.setState({ subTopic: e.target.value });
                }
              },
              {
                key: "handleQuestionChange",
                value: function(e) {
                  this.setState({ question: e.target.value });
                }
              },
              {
                key: "handleAnswerChange",
                value: function(e) {
                  this.setState({ answer: e.target.value });
                }
              },
              {
                key: "handleDifficultyLevelChange",
                value: function(e) {
                  this.setState({ difficultyLevel: e.target.value });
                }
              },
              {
                key: "handleLastMinutePreparationChange",
                value: function(e) {
                  console.log("flag " + e.target.checked),
                    this.setState({
                      isLastMinutePreparation: e.target.checked
                    });
                }
              },
              {
                key: "onSubmit",
                value: function(e) {
                  var t = w.getLoggedInUserName();
                  console.log("languageType is : " + this.state.languageType),
                    console.log("username is " + t);
                  var a = {
                    id: this.state.id,
                    createdBy: t,
                    createdDate: P()(new Date()).format("YYYY-MM-DD"),
                    languageType: this.state.languageType,
                    topic: this.state.topic,
                    subTopic: this.state.subTopic,
                    question: this.state.question,
                    answer: this.state.answer,
                    difficultyLevel: this.state.difficultyLevel,
                    isLastMinutePreparation: this.state.isLastMinutePreparation
                  };
                  console.log(a),
                    -1 === this.state.id
                      ? (console.log("I am inside if block !"), J.createQnA(a))
                      : (console.log("I am inside else block !"),
                        J.createQnA(a)),
                    console.log(e);
                }
              },
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "container" },
                    l.a.createElement("h1", null, "Add Question"),
                    l.a.createElement(
                      V.a,
                      { onSubmit: this.onSubmit },
                      l.a.createElement(
                        V.a.Group,
                        { controlId: "exampleForm.ControlSelect1" },
                        l.a.createElement(V.a.Label, null, "Language"),
                        l.a.createElement(
                          V.a.Control,
                          {
                            as: "select",
                            name: "languageType",
                            onChange: this.handleLanguageTypeChange
                          },
                          l.a.createElement(
                            "option",
                            { value: "Java" },
                            "Java"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "Cassandra" },
                            "Cassandra"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "Kafka" },
                            "Kafka"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "React" },
                            "React"
                          ),
                          l.a.createElement("option", { value: "SQL" }, "SQL")
                        )
                      ),
                      l.a.createElement(
                        V.a.Group,
                        { controlId: "exampleForm.ControlSelect1" },
                        l.a.createElement(V.a.Label, null, "Topic"),
                        l.a.createElement(
                          V.a.Control,
                          {
                            as: "select",
                            name: "topic",
                            onChange: this.handleTopicChange
                          },
                          l.a.createElement(
                            "option",
                            { value: "Core Java" },
                            "Core Java"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "Advance Java" },
                            "Advance Java"
                          )
                        )
                      ),
                      l.a.createElement(
                        V.a.Group,
                        { controlId: "exampleForm.ControlSelect1" },
                        l.a.createElement(V.a.Label, null, "Sub-Topic"),
                        l.a.createElement(
                          V.a.Control,
                          {
                            as: "select",
                            name: "subTopic",
                            onChange: this.handleSubTopicChange
                          },
                          l.a.createElement(
                            "option",
                            { value: "Introduction of Java" },
                            "Introduction of Java"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "Data types and Operators" },
                            "Data types and Operators"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "Control Flow statements" },
                            "Control Flow statements"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "OOPS and its application in Java" },
                            "OOPS and its application in Java"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "Constructors" },
                            "Constructors"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "Access Modifers in Java" },
                            "Access Modifers in Java"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "Exceptions in Java" },
                            "Exceptions in Java"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "Strings in Java" },
                            "Strings in Java"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "Collection Framework in Java" },
                            "Collection Framework in Java"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "Generics" },
                            "Generics"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "Input-Output in Java" },
                            "Input-Output in Java"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "Serialization" },
                            "Serialization"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "Inner Classes" },
                            "Inner Classes"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "Statics" },
                            "Statics"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "Threads in Java" },
                            "Threads in Java"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "JDBC" },
                            "JDBC"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "Packages" },
                            "Packages"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "Miscellaneous" },
                            "Miscellaneous"
                          )
                        )
                      ),
                      l.a.createElement(
                        V.a.Group,
                        { controlId: "exampleForm.ControlInput1" },
                        l.a.createElement(V.a.Label, null, "Question"),
                        l.a.createElement(V.a.Control, {
                          as: "textarea",
                          rows: "3",
                          placeholder: "write question here",
                          name: "question",
                          onChange: this.handleQuestionChange
                        })
                      ),
                      l.a.createElement(
                        V.a.Group,
                        { controlId: "exampleForm.ControlTextarea1" },
                        l.a.createElement(V.a.Label, null, "Answer"),
                        l.a.createElement(V.a.Control, {
                          as: "textarea",
                          rows: "5",
                          placeholder: "write answer here",
                          name: "answer",
                          onChange: this.handleAnswerChange
                        })
                      ),
                      l.a.createElement(
                        V.a.Group,
                        { controlId: "exampleForm.ControlSelect1" },
                        l.a.createElement(V.a.Label, null, "Difficulty Level"),
                        l.a.createElement(
                          V.a.Control,
                          {
                            as: "select",
                            name: "difficultyLevel",
                            onChange: this.handleDifficultyLevelChange
                          },
                          l.a.createElement(
                            "option",
                            { value: "BEGINNER" },
                            "1"
                          ),
                          l.a.createElement(
                            "option",
                            { value: "INTERMEDIATE" },
                            "2"
                          ),
                          l.a.createElement("option", { value: "SENIOR" }, "3")
                        )
                      ),
                      l.a.createElement(
                        V.a.Group,
                        { controlId: "exampleForm.ControlSelect1" },
                        l.a.createElement(
                          "label",
                          null,
                          "Is Last minute preparation ?",
                          l.a.createElement("input", {
                            className: "m-2",
                            name: "isLastMinutePreparation",
                            type: "checkbox",
                            onChange: this.handleLastMinutePreparationChange
                          })
                        )
                      ),
                      l.a.createElement(
                        "button",
                        { className: "btn btn-success m-3", type: "submit" },
                        "Save"
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        K = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "TodoApp" },
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        "div",
                        { className: "container" },
                        l.a.createElement(
                          "h1",
                          null,
                          "Please find the sample projects below"
                        ),
                        l.a.createElement("h4", null, "Overview"),
                        l.a.createElement(
                          "div",
                          null,
                          "We are honored to see you in our space. The sole intention of this space is to guide you throughout all stages of programming and designing. We will guide you from basic to advance level of tutorials, interview materials and practice questions. Also we will provide you the possible behavioral questions. Also, from this space we will post various use ful blogs where you can also contribute."
                        ),
                        l.a.createElement(
                          "div",
                          null,
                          "Our team is committed to help you throughout all the stages of the software development life cycle. Thank you for believing us."
                        ),
                        l.a.createElement("div", null, "==================="),
                        l.a.createElement(
                          "li",
                          { class: "list-inline" },
                          l.a.createElement(
                            "div",
                            { className: "row" },
                            l.a.createElement(
                              "div",
                              { className: "col-sm-3" },
                              l.a.createElement(
                                "a",
                                {
                                  href:
                                    "https://github.com/rbnpantha/BlogApp/tree/master/blog"
                                },
                                "Movie Project"
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { className: "col-sm-9" },
                              " ",
                              "This is a react client for the Blog App. This is a react client for the Blog App. This is a react client for the Blog App.",
                              " "
                            )
                          ),
                          l.a.createElement(
                            "div",
                            { className: "row" },
                            l.a.createElement(
                              "div",
                              { className: "col-sm-3" },
                              l.a.createElement(
                                "a",
                                {
                                  href:
                                    "https://github.com/rbnpantha/BlogApp/tree/master/blog"
                                },
                                "Movie Project"
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { className: "col-sm-9" },
                              " ",
                              "This is a react client for the Blog App. This is a react client for the Blog App. This is a react client for the Blog App.",
                              " "
                            )
                          ),
                          l.a.createElement(
                            "div",
                            { className: "row" },
                            l.a.createElement(
                              "div",
                              { className: "col-sm-3" },
                              l.a.createElement(
                                "a",
                                {
                                  href:
                                    "https://github.com/rbnpantha/BlogApp/tree/master/blog"
                                },
                                "Movie Project"
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { className: "col-sm-9" },
                              " ",
                              "This is a react client for the Blog App. This is a react client for the Blog App. This is a react client for the Blog App.",
                              " "
                            )
                          ),
                          l.a.createElement(
                            "div",
                            { className: "row" },
                            l.a.createElement(
                              "div",
                              { className: "col-sm-3" },
                              l.a.createElement(
                                "a",
                                {
                                  href:
                                    "https://github.com/rbnpantha/BlogApp/tree/master/blog"
                                },
                                "Movie Project"
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { className: "col-sm-9" },
                              " ",
                              "This is a react client for the Blog App. This is a react client for the Blog App. This is a react client for the Blog App.",
                              " "
                            )
                          ),
                          l.a.createElement(
                            "div",
                            { className: "row" },
                            l.a.createElement(
                              "div",
                              { className: "col-sm-3" },
                              l.a.createElement(
                                "a",
                                {
                                  href:
                                    "https://github.com/rbnpantha/BlogApp/tree/master/blog"
                                },
                                "Movie Project"
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { className: "col-sm-9" },
                              " ",
                              "This is a react client for the Blog App. This is a react client for the Blog App. This is a react client for the Blog App.",
                              " "
                            )
                          )
                        ),
                        l.a.createElement("div", null, "===================")
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        _ = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "TodoApp" },
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        "div",
                        { className: "container" },
                        l.a.createElement(
                          "h1",
                          null,
                          "Programming Job Interview Process"
                        ),
                        l.a.createElement("h4", null, "Overview"),
                        l.a.createElement(
                          "div",
                          null,
                          "We are honored to see you in our space. The sole intention of this space is to guide you throughout all stages of programming and designing. We will guide you from basic to advance level of tutorials, interview materials and practice questions. Also we will provide you the possible behavioral questions. Also, from this space we will post various use ful blogs where you can also contribute."
                        ),
                        l.a.createElement(
                          "div",
                          null,
                          "Our team is committed to help you throughout all the stages of the software development life cycle. Thank you for believing us."
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        $ = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "TodoApp" },
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        "div",
                        { className: "container" },
                        l.a.createElement(
                          "h1",
                          null,
                          "How to prepare for the programming interview"
                        ),
                        l.a.createElement("h4", null, "Overview"),
                        l.a.createElement(
                          "div",
                          null,
                          "We are honored to see you in our space. The sole intention of this space is to guide you throughout all stages of programming and designing. We will guide you from basic to advance level of tutorials, interview materials and practice questions. Also we will provide you the possible behavioral questions. Also, from this space we will post various use ful blogs where you can also contribute."
                        ),
                        l.a.createElement(
                          "div",
                          null,
                          "Our team is committed to help you throughout all the stages of the software development life cycle. Thank you for believing us."
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        X = a(26),
        Z = a.n(X),
        ee = a(32),
        te = a(21),
        ae = function(e) {
          var t = e.posts;
          return e.loading
            ? l.a.createElement("h2", null, "Loading...")
            : l.a.createElement(
                "ul",
                { className: "container list-group mb-4" },
                t.map(function(e) {
                  return l.a.createElement(
                    "li",
                    {
                      key: e.questionId,
                      className: "list-group-item text-left"
                    },
                    e.question,
                    l.a.createElement("p", null, e.answer)
                  );
                })
              );
        },
        ne = function(e) {
          for (
            var t = e.postsPerPage,
              a = e.totalPosts,
              n = e.paginate,
              r = [],
              o = 1;
            o <= Math.ceil(a / t);
            o++
          )
            r.push(o);
          return l.a.createElement(
            "div",
            { className: "text-center" },
            l.a.createElement(
              "nav",
              null,
              l.a.createElement(
                "ul",
                { className: "pagination justify-content-center" },
                r.map(function(e) {
                  return l.a.createElement(
                    "li",
                    { key: e, className: "page-item" },
                    l.a.createElement(
                      "a",
                      {
                        onClick: function() {
                          return n(e);
                        },
                        href: "#",
                        className: "page-link"
                      },
                      e
                    )
                  );
                })
              )
            )
          );
        },
        le = function() {
          var e = Object(n.useState)([]),
            t = Object(te.a)(e, 2),
            a = t[0],
            r = t[1],
            o = Object(n.useState)(!1),
            s = Object(te.a)(o, 2),
            i = s[0],
            c = s[1],
            u = Object(n.useState)(1),
            m = Object(te.a)(u, 2),
            d = m[0],
            p = m[1],
            h = Object(n.useState)(10),
            E = Object(te.a)(h, 1)[0];
          Object(n.useEffect)(function() {
            (function() {
              var e = Object(ee.a)(
                Z.a.mark(function e() {
                  var t;
                  return Z.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            c(!0),
                            (e.next = 3),
                            g.a.get("".concat(y, "/qa/all"))
                          );
                        case 3:
                          (t = e.sent), r(t.data), c(!1);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function() {
                return e.apply(this, arguments);
              };
            })()();
          }, []);
          var v = d * E,
            f = v - E,
            b = a.slice(f, v);
          return l.a.createElement(
            "div",
            null,
            l.a.createElement(
              "h1",
              { className: "text-primary mb-3" },
              "My Questions"
            ),
            l.a.createElement(ae, { posts: b, loading: i }),
            l.a.createElement(ne, {
              postsPerPage: E,
              totalPosts: a.length,
              paginate: function(e) {
                return p(e);
              }
            }),
            l.a.createElement(
              "div",
              { className: "container" },
              l.a.createElement(
                "div",
                { class: "row" },
                l.a.createElement(
                  "div",
                  { class: "card-deck mb-4" },
                  l.a.createElement(
                    "div",
                    { class: "card" },
                    l.a.createElement("img", {
                      class: "card-img-top",
                      src:
                        "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
                      alt: "Card image cap"
                    }),
                    l.a.createElement(
                      "div",
                      { class: "card-body" },
                      l.a.createElement(
                        "h5",
                        { class: "card-title" },
                        "Card title"
                      ),
                      l.a.createElement(
                        "p",
                        { class: "card-text" },
                        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                      ),
                      l.a.createElement(
                        "p",
                        { class: "card-text" },
                        l.a.createElement(
                          "small",
                          { class: "text-muted" },
                          "Last updated 3 mins ago"
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    "div",
                    { class: "card" },
                    l.a.createElement("img", {
                      class: "card-img-top",
                      src:
                        "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
                      alt: "Card image cap"
                    }),
                    l.a.createElement(
                      "div",
                      { class: "card-body" },
                      l.a.createElement(
                        "h5",
                        { class: "card-title" },
                        "Card title"
                      ),
                      l.a.createElement(
                        "p",
                        { class: "card-text" },
                        "This card has supporting text below as a natural lead-in to additional content."
                      ),
                      l.a.createElement(
                        "p",
                        { class: "card-text" },
                        l.a.createElement(
                          "small",
                          { class: "text-muted" },
                          "Last updated 3 mins ago"
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    "div",
                    { class: "container card" },
                    l.a.createElement("img", {
                      class: "card-img-top",
                      src:
                        "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
                      alt: "Card image cap"
                    }),
                    l.a.createElement(
                      "div",
                      { class: "card-body" },
                      l.a.createElement(
                        "h5",
                        { class: "card-title" },
                        "Card title"
                      ),
                      l.a.createElement(
                        "p",
                        { class: "card-text" },
                        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
                      ),
                      l.a.createElement(
                        "p",
                        { class: "card-text" },
                        l.a.createElement(
                          "small",
                          { class: "text-muted" },
                          "Last updated 3 mins ago"
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        re = a(50),
        oe = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "container-fluid" },
                    l.a.createElement(
                      "div",
                      { className: "row flex-xl-nowrap" },
                      l.a.createElement(
                        "div",
                        {
                          className:
                            "col-6 col-md-2 clo-xl-2 bd-sidebar mb-2 border-right border-bottom"
                        },
                        l.a.createElement(
                          V.a,
                          { className: "form-center p-2" },
                          l.a.createElement(re.a, {
                            type: "text",
                            placeholder: "Search",
                            className: ""
                          })
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "test sidebar")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "test sidebar")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "test sidebar")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "test sidebar")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "test sidebar")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "test sidebar")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "test sidebar")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "test sidebar")
                        )
                      ),
                      l.a.createElement(
                        "main",
                        {
                          className:
                            "col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content",
                          role: "main"
                        },
                        l.a.createElement(le, null)
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: "col-6 col-md-2 clo-xl-2 mb-2 border-left"
                        },
                        l.a.createElement("h2", null, "Most Popular Blogs"),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "Blog Post 1")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "Blog Post 2")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "Blog Post 3")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "Blog Post 4")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "Blog Post 5")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "Blog Post 6")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "Blog Post 7")
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        se = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    null,
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement("h2", null, "Most Popular Blogs"),
                      l.a.createElement(
                        "ul",
                        null,
                        l.a.createElement("a", { href: "#" }, "Blog Post 1")
                      ),
                      l.a.createElement(
                        "ul",
                        null,
                        l.a.createElement("a", { href: "#" }, "Blog Post 2")
                      ),
                      l.a.createElement(
                        "ul",
                        null,
                        l.a.createElement("a", { href: "#" }, "Blog Post 3")
                      ),
                      l.a.createElement(
                        "ul",
                        null,
                        l.a.createElement("a", { href: "#" }, "Blog Post 4")
                      ),
                      l.a.createElement(
                        "ul",
                        null,
                        l.a.createElement("a", { href: "#" }, "Blog Post 5")
                      ),
                      l.a.createElement(
                        "ul",
                        null,
                        l.a.createElement("a", { href: "#" }, "Blog Post 6")
                      ),
                      l.a.createElement(
                        "ul",
                        null,
                        l.a.createElement("a", { href: "#" }, "Blog Post 7")
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        ie = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "container-fluid" },
                    l.a.createElement(
                      "div",
                      { className: "row flex-xl-nowrap" },
                      l.a.createElement(
                        "div",
                        {
                          className:
                            "col-6 col-md-2 clo-xl-2 bd-sidebar mb-2 m4"
                        },
                        l.a.createElement("div", null),
                        l.a.createElement("img", {
                          src:
                            "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
                          class: "rounded-circle w-50 p-2 m-4",
                          alt: "Cinque Terre"
                        }),
                        l.a.createElement("div", null),
                        l.a.createElement(
                          "a",
                          { href: "https://www.linkedin.com/in/rabinpantha" },
                          "Er. Rabin Pantha"
                        ),
                        l.a.createElement("div", null, "Globallogic Inc.")
                      ),
                      l.a.createElement(
                        "main",
                        {
                          className:
                            "col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content",
                          role: "main"
                        },
                        l.a.createElement(
                          "div",
                          { className: "col-xs-12" },
                          l.a.createElement(
                            "h2",
                            { className: "m-5" },
                            "Where does it come from?"
                          ),
                          l.a.createElement(
                            "p",
                            {
                              className:
                                "text-left lead text-justify text-break"
                            },
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
                            l.a.createElement("mark", null, "highlight"),
                            " ",
                            "industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                          ),
                          l.a.createElement("var", null, "y"),
                          " = ",
                          l.a.createElement("var", null, "m"),
                          l.a.createElement("var", null, "x"),
                          " + ",
                          l.a.createElement("var", null, "b"),
                          l.a.createElement("div", null),
                          l.a.createElement(
                            "samp",
                            null,
                            "This text is meant to be treated as sample output from a computer program."
                          ),
                          l.a.createElement(
                            "p",
                            {
                              className:
                                "text-left lead text-justify text-break"
                            },
                            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
                          ),
                          l.a.createElement(
                            "pre",
                            null,
                            l.a.createElement(
                              "code",
                              null,
                              "<p>Sample text here...</p> <p>And another line of sample text here...</p>"
                            )
                          ),
                          l.a.createElement(
                            "p",
                            {
                              className:
                                "text-left lead text-justify text-break"
                            },
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                          ),
                          l.a.createElement(
                            "p",
                            { className: "text-left lead text-justify" },
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
                          )
                        )
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: "col-6 col-md-2 clo-xl-2 mb-2 border-left"
                        },
                        l.a.createElement(se, null)
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        ce = a(51),
        ue = a.n(ce),
        me = a(52),
        de = a.n(me),
        pe = a(53),
        he = a.n(pe),
        Ee = function() {
          var e = Object(n.useState)([]),
            t = Object(te.a)(e, 2),
            a = t[0],
            r = t[1],
            o = Object(n.useState)(!1),
            s = Object(te.a)(o, 2),
            i = (s[0], s[1]),
            c = Object(n.useState)(1),
            u = Object(te.a)(c, 2),
            m = u[0],
            d = (u[1], Object(n.useState)(10)),
            p = Object(te.a)(d, 1)[0];
          Object(n.useEffect)(function() {
            (function() {
              var e = Object(ee.a)(
                Z.a.mark(function e() {
                  var t;
                  return Z.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            i(!0),
                            (e.next = 3),
                            g.a.get("".concat(y, "/qa/all"))
                          );
                        case 3:
                          (t = e.sent), r(t.data), i(!1);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function() {
                return e.apply(this, arguments);
              };
            })()();
          }, []);
          var h = m * p,
            E = h - p;
          a.slice(E, h);
          return l.a.createElement(
            "div",
            null,
            l.a.createElement(
              "h1",
              { className: "text-primary mb-3" },
              "Android Apps"
            ),
            l.a.createElement(
              "div",
              { className: "container" },
              l.a.createElement(
                "div",
                { class: "row" },
                l.a.createElement(
                  "div",
                  { class: "card-deck mb-4" },
                  l.a.createElement(
                    "div",
                    { class: "card" },
                    l.a.createElement("img", {
                      class: "card-img-top",
                      src: de.a,
                      alt: "Card image cap"
                    }),
                    l.a.createElement(
                      "div",
                      { class: "card-body" },
                      l.a.createElement(
                        "a",
                        { href: "/addressBookPrivacyPolicy" },
                        l.a.createElement(
                          "h5",
                          { class: "card-title" },
                          "Address Book"
                        )
                      ),
                      l.a.createElement(
                        "p",
                        { class: "card-text" },
                        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                      ),
                      l.a.createElement(
                        "p",
                        { class: "card-text" },
                        l.a.createElement(
                          "small",
                          { class: "text-muted" },
                          "Last updated 3 mins ago"
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    "div",
                    { class: "card" },
                    l.a.createElement("img", {
                      class: "card-img-top",
                      src: ue.a,
                      alt: "Card image cap"
                    }),
                    l.a.createElement(
                      "div",
                      { class: "card-body" },
                      l.a.createElement(
                        "a",
                        { href: "/vocabularyAppPrivacyPolicy" },
                        l.a.createElement(
                          "h5",
                          { class: "card-title" },
                          "Vocabulary App"
                        )
                      ),
                      l.a.createElement(
                        "p",
                        { class: "card-text" },
                        "This card has supporting text below as a natural lead-in to additional content."
                      ),
                      l.a.createElement(
                        "p",
                        { class: "card-text" },
                        l.a.createElement(
                          "small",
                          { class: "text-muted" },
                          "Last updated 3 mins ago"
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    "div",
                    { class: "container card" },
                    l.a.createElement("img", {
                      class: "card-img-top",
                      src: he.a,
                      alt: "Card image cap"
                    }),
                    l.a.createElement(
                      "div",
                      { class: "card-body" },
                      l.a.createElement(
                        "a",
                        { href: "/interviewGuidePrivacyPolicy" },
                        l.a.createElement(
                          "h5",
                          { class: "card-title" },
                          "Interview Guide"
                        )
                      ),
                      l.a.createElement(
                        "p",
                        { class: "card-text" },
                        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
                      ),
                      l.a.createElement(
                        "p",
                        { class: "card-text" },
                        l.a.createElement(
                          "small",
                          { class: "text-muted" },
                          "Last updated 3 mins ago"
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        ve = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "container-fluid" },
                    l.a.createElement(
                      "div",
                      { className: "row flex-xl-nowrap" },
                      l.a.createElement(
                        "div",
                        {
                          className:
                            "col-6 col-md-2 clo-xl-2 bd-sidebar mb-2 border-right border-bottom"
                        },
                        l.a.createElement(
                          V.a,
                          { className: "form-center p-2" },
                          l.a.createElement(re.a, {
                            type: "text",
                            placeholder: "Search",
                            className: ""
                          })
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "test sidebar")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "test sidebar")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "test sidebar")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "test sidebar")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "test sidebar")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "test sidebar")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "test sidebar")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "test sidebar")
                        )
                      ),
                      l.a.createElement(
                        "main",
                        {
                          className:
                            "col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content",
                          role: "main"
                        },
                        l.a.createElement(Ee, null)
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: "col-6 col-md-2 clo-xl-2 mb-2 border-left"
                        },
                        l.a.createElement("h2", null, "Most Popular Blogs"),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "Blog Post 1")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "Blog Post 2")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "Blog Post 3")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "Blog Post 4")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "Blog Post 5")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "Blog Post 6")
                        ),
                        l.a.createElement(
                          "ul",
                          null,
                          l.a.createElement("a", { href: "#" }, "Blog Post 7")
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        ge = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "text-left m-5" },
                    l.a.createElement("h2", null, "Address Book"),
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Privacy Policy"),
                      " "
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      "Rabin Pantha built the AddressBook app as a Free app. This SERVICE is provided by Rabin Pantha at no cost and is intended for use as is."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at AddressBook unless otherwise defined in this Privacy Policy."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement(
                        "strong",
                        null,
                        "Information Collection and Use"
                      )
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to Nothing. The information that I request will be retained on your device and is not collected by me in any way."
                    ),
                    " ",
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        "p",
                        null,
                        "The app does use third party services that may collect information used to identify you."
                      ),
                      " ",
                      l.a.createElement(
                        "p",
                        null,
                        "Link to privacy policy of third party service providers used by the app"
                      ),
                      " ",
                      l.a.createElement(
                        "ul",
                        null,
                        l.a.createElement(
                          "li",
                          null,
                          l.a.createElement(
                            "a",
                            {
                              href: "https://www.google.com/policies/privacy/",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            },
                            "Google Play Services"
                          )
                        )
                      )
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Log Data")
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (\u201cIP\u201d) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Cookies")
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "This Service does not use these \u201ccookies\u201d explicitly. However, the app may use third party code and libraries that use \u201ccookies\u201d to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Service Providers")
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "I may employ third-party companies and individuals due to the following reasons:"
                    ),
                    " ",
                    l.a.createElement(
                      "ul",
                      null,
                      l.a.createElement(
                        "li",
                        null,
                        "To facilitate our Service;"
                      ),
                      " ",
                      l.a.createElement(
                        "li",
                        null,
                        "To provide the Service on our behalf;"
                      ),
                      " ",
                      l.a.createElement(
                        "li",
                        null,
                        "To perform Service-related services; or"
                      ),
                      " ",
                      l.a.createElement(
                        "li",
                        null,
                        "To assist us in analyzing how our Service is used."
                      )
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Security")
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Links to Other Sites")
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement(
                        "strong",
                        null,
                        "Children\u2019s Privacy"
                      )
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement(
                        "strong",
                        null,
                        "Changes to This Privacy Policy"
                      )
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "This policy is effective as of 2020-06-07"
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Contact Us")
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at rbnpantha@gmail.com."
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        fe = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "text-left m-5" },
                    l.a.createElement("h2", null, "Vocabulary App"),
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Privacy Policy"),
                      " "
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      "Rabin Pantha built the VocabularyApp app as a Free app. This SERVICE is provided by Rabin Pantha at no cost and is intended for use as is."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at VocabularyApp unless otherwise defined in this Privacy Policy."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement(
                        "strong",
                        null,
                        "Information Collection and Use"
                      )
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to your own vocabulary. The information that I request will be retained on your device and is not collected by me in any way."
                    ),
                    " ",
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        "p",
                        null,
                        "The app does use third party services that may collect information used to identify you."
                      ),
                      " ",
                      l.a.createElement(
                        "p",
                        null,
                        "Link to privacy policy of third party service providers used by the app"
                      ),
                      " ",
                      l.a.createElement(
                        "ul",
                        null,
                        l.a.createElement(
                          "li",
                          null,
                          l.a.createElement(
                            "a",
                            {
                              href: "https://www.google.com/policies/privacy/",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            },
                            "Google Play Services"
                          )
                        )
                      )
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Log Data")
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (\u201cIP\u201d) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Cookies")
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "This Service does not use these \u201ccookies\u201d explicitly. However, the app may use third party code and libraries that use \u201ccookies\u201d to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Service Providers")
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "I may employ third-party companies and individuals due to the following reasons:"
                    ),
                    " ",
                    l.a.createElement(
                      "ul",
                      null,
                      l.a.createElement(
                        "li",
                        null,
                        "To facilitate our Service;"
                      ),
                      " ",
                      l.a.createElement(
                        "li",
                        null,
                        "To provide the Service on our behalf;"
                      ),
                      " ",
                      l.a.createElement(
                        "li",
                        null,
                        "To perform Service-related services; or"
                      ),
                      " ",
                      l.a.createElement(
                        "li",
                        null,
                        "To assist us in analyzing how our Service is used."
                      )
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Security")
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Links to Other Sites")
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement(
                        "strong",
                        null,
                        "Children\u2019s Privacy"
                      )
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement(
                        "strong",
                        null,
                        "Changes to This Privacy Policy"
                      )
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "This policy is effective as of 2020-06-07"
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Contact Us")
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at rbnpantha@gmail.com."
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        be = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "text-left m-5" },
                    l.a.createElement("h2", null, "InterviewGuide"),
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Privacy Policy")
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "Rabin Pantha built the InterviewGuide app as an Ad Supported app. This SERVICE is provided by Rabin Pantha at no cost and is intended for use as is."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at InterviewGuide unless otherwise defined in this Privacy Policy."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement(
                        "strong",
                        null,
                        "Information Collection and Use"
                      )
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request will be retained on your device and is not collected by me in any way."
                    ),
                    " ",
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        "p",
                        null,
                        "The app does use third party services that may collect information used to identify you."
                      ),
                      " ",
                      l.a.createElement(
                        "p",
                        null,
                        "Link to privacy policy of third party service providers used by the app"
                      ),
                      " ",
                      l.a.createElement(
                        "ul",
                        null,
                        l.a.createElement(
                          "li",
                          null,
                          l.a.createElement(
                            "a",
                            {
                              href: "https://www.google.com/policies/privacy/",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            },
                            "Google Play Services"
                          )
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          l.a.createElement(
                            "a",
                            {
                              href:
                                "https://support.google.com/admob/answer/6128543?hl=en",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            },
                            "AdMob"
                          )
                        )
                      )
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Log Data")
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (\u201cIP\u201d) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Cookies")
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "This Service does not use these \u201ccookies\u201d explicitly. However, the app may use third party code and libraries that use \u201ccookies\u201d to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Service Providers")
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "I may employ third-party companies and individuals due to the following reasons:"
                    ),
                    " ",
                    l.a.createElement(
                      "ul",
                      null,
                      l.a.createElement(
                        "li",
                        null,
                        "To facilitate our Service;"
                      ),
                      " ",
                      l.a.createElement(
                        "li",
                        null,
                        "To provide the Service on our behalf;"
                      ),
                      " ",
                      l.a.createElement(
                        "li",
                        null,
                        "To perform Service-related services; or"
                      ),
                      " ",
                      l.a.createElement(
                        "li",
                        null,
                        "To assist us in analyzing how our Service is used."
                      )
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Security")
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Links to Other Sites")
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement(
                        "strong",
                        null,
                        "Children\u2019s Privacy"
                      )
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement(
                        "strong",
                        null,
                        "Changes to This Privacy Policy"
                      )
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page."
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "This policy is effective as of 2020-06-07"
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("strong", null, "Contact Us")
                    ),
                    " ",
                    l.a.createElement(
                      "p",
                      null,
                      "If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at rbnpantha."
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        ye = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    { className: "TodoApp" },
                    l.a.createElement(
                      d.a,
                      null,
                      l.a.createElement(
                        l.a.Fragment,
                        null,
                        l.a.createElement(A, null),
                        l.a.createElement(
                          p.a,
                          null,
                          l.a.createElement(h.a, {
                            path: "/",
                            exact: !0,
                            component: C
                          }),
                          l.a.createElement(h.a, {
                            path: "/login",
                            component: C
                          }),
                          l.a.createElement(k, {
                            path: "/welcome/:name",
                            component: q
                          }),
                          l.a.createElement(k, {
                            path: "/todos/:id",
                            component: Q
                          }),
                          l.a.createElement(k, {
                            path: "/todos",
                            component: S
                          }),
                          l.a.createElement(k, {
                            path: "/logout",
                            component: B
                          }),
                          l.a.createElement(k, {
                            path: "/addQuestion/:id",
                            component: z
                          }),
                          l.a.createElement(h.a, {
                            path: "/qaHome",
                            component: R
                          }),
                          l.a.createElement(h.a, {
                            path: "/questions",
                            component: F
                          }),
                          l.a.createElement(h.a, {
                            path: "/java",
                            component: F
                          }),
                          l.a.createElement(h.a, {
                            path: "/kafka",
                            component: G
                          }),
                          l.a.createElement(h.a, {
                            path: "/cassandra",
                            component: Y
                          }),
                          l.a.createElement(h.a, {
                            path: "/react",
                            component: W
                          }),
                          l.a.createElement(h.a, {
                            path: "/sql",
                            component: H
                          }),
                          l.a.createElement(h.a, {
                            path: "/projects",
                            component: K
                          }),
                          l.a.createElement(h.a, {
                            path: "/interviewProcess",
                            component: _
                          }),
                          l.a.createElement(h.a, {
                            path: "/all",
                            component: oe
                          }),
                          l.a.createElement(h.a, {
                            path: "/privacyPolicyMain",
                            component: ve
                          }),
                          l.a.createElement(h.a, {
                            path: "/addressBookPrivacyPolicy",
                            component: ge
                          }),
                          l.a.createElement(h.a, {
                            path: "/vocabularyAppPrivacyPolicy",
                            component: fe
                          }),
                          l.a.createElement(h.a, {
                            path: "/interviewGuidePrivacyPolicy",
                            component: be
                          }),
                          l.a.createElement(h.a, {
                            path: "/blog/java/streamAPI",
                            component: ie
                          }),
                          l.a.createElement(h.a, {
                            path: "/prepareForInterview",
                            component: $
                          }),
                          l.a.createElement(h.a, { component: N })
                        ),
                        l.a.createElement(L, null)
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        we =
          (a(90),
          a(91),
          (function(e) {
            function t() {
              return (
                Object(s.a)(this, t),
                Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
              );
            }
            return (
              Object(m.a)(t, e),
              Object(i.a)(t, [
                {
                  key: "render",
                  value: function() {
                    return l.a.createElement(
                      "div",
                      { className: "App" },
                      l.a.createElement(ye, null)
                    );
                  }
                }
              ]),
              t
            );
          })(n.Component));
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      o.a.render(l.a.createElement(we, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  },
  [[55, 1, 2]]
]);
//# sourceMappingURL=main.5f369e8a.chunk.js.map
