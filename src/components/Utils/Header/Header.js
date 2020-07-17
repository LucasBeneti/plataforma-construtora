import React, { useState } from "react";

import { SideDrawer } from "./SideDrawer/SideDrawer";

const Header = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  return (
    <div style={{ alignItems: "center" }}>
      <p onClick={setShowSideDrawer(true)}>Menu</p>
      {/* <i className="fa fa-bars">Menu</i> */}
      <SideDrawer open={showSideDrawer} setShowSideDrawer={setShowSideDrawer} />
    </div>
  );
};

export default Header;
