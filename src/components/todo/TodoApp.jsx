import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute.jsx";
import LoginComponent from "./LoginComponent.jsx";
import ListTodosComponent from "./ListTodosComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";
import TodoComponent from "./TodoComponent.jsx";
import StreamAPIBlog from "../blogs/java/StreamAPIBlog.jsx";
import PrivacyPolicyMain from "../privacy/PrivacyPolicyMain.jsx";
import AddressBookPrivacyPolicy from "../privacy/AddressBookPrivacyPolicy.jsx";
import VocabularyAppPrivacyPolicy from "../privacy/VocabularyAppPrivacyPolicy.jsx";
import InterviewGuidePrivacyPolicy from "../privacy/InterviewGuidePrivacyPolicy.jsx";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <>
            <HeaderComponent />
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <AuthenticatedRoute
                path="/welcome/:name"
                component={WelcomeComponent}
              />
              <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
              <AuthenticatedRoute
                path="/todos"
                component={ListTodosComponent}
              />
              <AuthenticatedRoute path="/logout" component={LogoutComponent} />

              <Route path="/privacyPolicyMain" component={PrivacyPolicyMain} />

              <Route
                path="/addressBookPrivacyPolicy"
                component={AddressBookPrivacyPolicy}
              />

              <Route
                path="/vocabularyAppPrivacyPolicy"
                component={VocabularyAppPrivacyPolicy}
              />

              <Route
                path="/interviewGuidePrivacyPolicy"
                component={InterviewGuidePrivacyPolicy}
              />

              <Route path="/blog/java/streamAPI" component={StreamAPIBlog} />

              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </>
        </Router>
        {/*<LoginComponent/>
                <WelcomeComponent/>*/}
      </div>
    );
  }
}

export default TodoApp;
