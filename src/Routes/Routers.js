import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const DashboardContainer = lazy(() => import("../containers/DashBoard"));
// const NotFound = lazy(() => import("./containers/NotFound"));
// const UserAuth = lazy(() => import("./containers/UserAuth"));
const Routers = () => {
  return (
    <div>
      <Suspense fallback={"loading"}>
        <Router>
          <Routes>
            {/* <Route path="/auth" exact component={UserAuth} /> */}
            <Route exact path="/dashboard" element={<DashboardContainer />} />
            {/* keet that last */}
            {/* <Route path="*" exact component={NotFound} status={404} /> */}
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default Routers;
