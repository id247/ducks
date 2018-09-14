import React from "react";
import _ from "lodash";
import { Switch, Route } from "react-router-dom";
import { Home, Counter } from "../components/pages";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    exact: true
  },
  {
    path: "/counter",
    name: "counter",
    component: Counter,
    exact: true
  }
];

const renderRoutes = routes => (
  <Switch>
    {routes.map((route, i) => (
      <Route
        exact={route.exact}
        key={i}
        path={route.path}
        render={props => <route.component {...props} routes={route.routes} />}
      />
    ))}
  </Switch>
);

export const mapRoutes = routes =>
  routes && routes.length ? renderRoutes(routes) : "";

export const routeTo = name => _.find(routes, { name: name }).path;
