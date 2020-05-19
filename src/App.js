import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "antd/dist/antd.css";

import {
  LandingPage,
  SettingPage,
  LoginRegisLanding,
  LoginScreenEmail,
  LoginScreenPassword,
  Donate,
  ProofTransfer,
  History,
} from "./screen";

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route path="/setting" component={SettingPage} />
      <Route path="/login-regis" component={LoginRegisLanding} />
      <Route path="/login-email" component={LoginScreenEmail} />
      <Route path="/login-password" component={LoginScreenPassword} />
      <Route path="/donate" component={Donate} />
      <Route path="/payment" component={ProofTransfer} />
      <Route path="/history" component={History} />
    </Router>
  );
}

export default App;
