import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PageLoader, NotFound } from "./components/Common";
import { ROUTES } from "./common/constants";
import MainLayout from "./layouts";
import ProfileCard from "./components/ProfileCard";

import "./styles/styles.scss"; // global styles

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<PageLoader />}>
          <MainLayout>
            <Switch>
              <Route exact path={ROUTES.APP_ROOT} component={ProfileCard} />
              <Route component={NotFound} />
            </Switch>
          </MainLayout>
        </Suspense>
      </Router>
    );
  }
}

export default App;
