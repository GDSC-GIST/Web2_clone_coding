import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "/Users/ualibekova_s/Documents/nwitter/src/routes/Auth";
import Home from "/Users/ualibekova_s/Documents/nwitter/src/routes/Home";
import Navigation from "/Users/ualibekova_s/Documents/nwitter/src/components/Navigation";
import Profile from "/Users/ualibekova_s/Documents/nwitter/src/routes/Profile";

const AppRouter = ({ isLoggedIn, userObj }) => {
    return (
      <Router>
        {isLoggedIn && <Navigation />}
        <Switch>
          {isLoggedIn ? (
            <>
              <Route exact path="/">
                <Home userObj={userObj} />
              </Route>
              <Route exact path="/Profile">
                <Profile />
              </Route>
            </>
          ) : (
            <>
              <Route exact path="/Auth">
                <Auth />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    );
};
export default AppRouter;