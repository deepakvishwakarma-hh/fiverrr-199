// import './index.css';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./themes/defaultTheme";
import MetaTags from 'react-meta-tags'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MetaTags>
      <title>App</title>
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    </MetaTags>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
