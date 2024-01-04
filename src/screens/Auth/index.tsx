import React from "react";
import { loginEndpoint } from "../../spotify";
import './login.css'
export default function Login() {
  return (
    <div className="screen-container">
      <div className="login">
        <a href={loginEndpoint}>
          <div className="login-btn">LOG IN</div>
        </a>
      </div>
    </div>
  );
}