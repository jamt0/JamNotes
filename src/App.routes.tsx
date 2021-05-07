import React from "react";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import RoutesPath from "util/routesPath";
import Home from "pages/Home/Home";

const AppRoutes: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path={RoutesPath.home} exact>
          <Home />
        </Route>
        <Route path={RoutesPath.welcome} exact>
          <Redirect to={RoutesPath.home} />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default AppRoutes;
