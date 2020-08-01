import React from "react";
import ReactDOM from "react-dom";
import App from "react-fanap";
import config from "config";

ReactDOM.render(
  <React.StrictMode>
    <App appConfig={config} />
  </React.StrictMode>,
  document.getElementById("root")
);
