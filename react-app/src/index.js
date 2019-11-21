/*!

=========================================================
* Material Dashboard PRO React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import App from "app.js"
import * as serviceWorker from './serviceWorker';
import b2cauth from 'react-azure-adb2c';

b2cauth.initialize({
  instance: 'https://login.microsoftonline.com/tfp/', 
  tenant: 'realeazy.onmicrosoft.com',
  signInPolicy: 'B2C_1_signupsignin',
  applicationId: 'a8194748-3646-4b6a-acdf-e0b19180c1bc',
  cacheLocation: 'sessionStorage',
  scopes: ['https://realeazy.onmicrosoft.com/api/user_impersonation'],
  redirectUri: 'http://localhost:3000',
  postLogoutRedirectUri: window.location.origin,
});

b2cauth.run(() => {
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
  serviceWorker.unregister();
});
