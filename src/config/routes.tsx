import React from "react";
import { AppRoute } from "react-fanap";

const routes: AppRoute[] = [
  {
    path: "/test",
    component: () => <div>Test</div>,
    isPrivate: true,
    render: () => null
  }
];

export default routes;
