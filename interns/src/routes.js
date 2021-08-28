import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import  DefaultLayout from "./layouts/DefaultLayout";

// Route Views
import AdminDashboard from "./views/AdminDashboard";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/admin-dashboard" />
  },
  {
    path: "/admin-dashboard",
    layout:  DefaultLayout,
    component: AdminDashboard
  },
];
