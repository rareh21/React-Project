import React, { Component } from "react";
import Popup from "reactjs-popup";
import './ReactPopup.css';
const PopReact = () => (
    <div className="menu">
      <Popup
        trigger={<div className="menu-item"> Item</div>}
        position="right top"
        on="click"
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: "5px", border: "none" }}
        arrow={true}
      >
        <div className="menu">
          <div className="menu-item"> item 1</div>
          <div className="menu-item"> item 2</div>
          <div className="menu-item"> item 3</div>
        </div>
      </Popup>
    </div>
  );

  export default PopReact