import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";

export default function App() {
  return (
    <Router>
      <AppLayout>
          <Switch>
            <Route path="/reservations">
              <Reservations />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </AppLayout>
    </Router>
  );
}
