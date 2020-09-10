import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
  return (
    <div>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <Users />
            </Route>
            <Route path="/:userId/places" exact>
              <UserPlaces />
            </Route>
            <Route path="/places/new" exact>
              <NewPlace />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
