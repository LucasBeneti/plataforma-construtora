import React from "react";
import { history } from "../../../helpers/history";

import "./sidedrawer.css";

export const SideDrawer = (props) => {
  let attachedClasses = "";

  {
    props.open
      ? (attachedClasses = "SideDrawer Open")
      : (attachedClasses = "SideDrawer Close");
  }
  return (
    <div className={attachedClasses}>
      <div>Menu</div>
      <span
        className="fa-bars"
        style={{ color: "black" }}
        onClick={props.setShowSideDrawer(false)}
      ></span>
      <nav>
        <ul>
          <MenuItem
            text="Dashboard"
            on_click={() => history.push("/dashboard")}
          />
          <MenuItem
            text="Relatório"
            on_click={() => history.push("/relatorio")}
          />
        </ul>
      </nav>
    </div>
  );
};

export const MenuItem = (props) => {
  return (
    <div className="menu-item" onClick={props.on_click}>
      <li>{props.text}</li>
    </div>
  );
};
