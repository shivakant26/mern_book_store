import Layout from "../component/layout";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectdRouteArray, publicRouteArray } from "../utils/RouteConstent";
const DashBoardLayout = lazy(() => import("../component/layout/DashLayout"));
const PublicRoutes = lazy(() => import("./PublicRoute"));
const ProtectedRoutes = lazy(() => import("./ProtectedRoute"));

const MainRoute = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          element={
            <PublicRoutes>
              <Layout />
            </PublicRoutes>
          }
        >
          {publicRouteArray?.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.component} />
            );
          })}
        </Route>
        <Route
          element={
            <ProtectedRoutes>
              <DashBoardLayout />
            </ProtectedRoutes>
          }
        >
          {ProtectdRouteArray?.map((routes, index) => {
            return (
              <Route
                key={index}
                path={routes.path}
                element={routes.component}
              />
            );
          })}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default MainRoute;
