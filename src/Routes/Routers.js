import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "../containers/Loading";
// components
const DashboardContainer = lazy(() => import("../containers/DashBoard"));
const NotFound = lazy(() => import("../containers/NotFound"));
const LandingPage = lazy(() => import("../containers/LandingPage"));

let PrivateRouteArr = [
  {
    component: <DashboardContainer />,
    path: "/dashboard",
  },
];
const Routers = () => {
  const token = localStorage.getItem("token");
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            {/* public routes */}
            <Route exact path="" element={<LandingPage />} />
            {/* private routes */}
            {token &&
              PrivateRouteArr.map((elem) => (
                <Route exact path={elem.path} element={elem.component} />
              ))}
            {/* keet that last--- error 404 */}
            <Route path="*" exact element={<NotFound />} status={404} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default Routers;
