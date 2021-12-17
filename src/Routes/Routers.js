import React, { useEffect, useState } from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "../containers/Loading";
// components
const DashboardContainer = lazy(() => import("../containers/DashBoard"));
const NotFound = lazy(() => import("../containers/NotFound"));
const LandingPage = lazy(() => import("../containers/LandingPage"));
const AuthContainer = lazy(() => import("../containers/AuthContainer"));
const DoctorsContainer = lazy(() => import("../containers/DoctorsContainer"));

let PrivateRouteArr = [
  {
    component: <DashboardContainer />,
    path: "/dashboard",
    key: "dashboard",
  },
  {
    component: <DoctorsContainer />,
    path: "/specialits",
    key: "specialits",
  },
];
const Routers = () => {
  const [authToken, setauthToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setauthToken(token);
  });

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            {/* public routes */}
            <Route exact path="" element={<LandingPage />} />
            <Route exact path="/register" element={<AuthContainer />} />
            <Route exact path="/login" element={<AuthContainer />} />
            {/* private routes */}
            {authToken &&
              PrivateRouteArr.map((elem) => (
                <Route
                  path={elem.path}
                  element={elem.component}
                  key={elem.key}
                />
              ))}
            {/* keet that last--- error 404 */}
            <Route path="*" element={<NotFound />} status={404} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default Routers;
