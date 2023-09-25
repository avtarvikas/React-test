import React from "react";
import "./tab.css";

const Tabs = ({ tabList, onChange, value }) => {
  return (
    <div className="tab-container">
      <div className="tabList-wrap">
        {tabList.map((tab, index) => {
          return (
            <li
              key={index}
              className={`tabList ${
                value.label === tab.label ? "activeTabList" : ""
              }`}
              onClick={() => onChange(tab)}
            >
              {tab.label}
            </li>
          );
        })}
      </div>
      <div className="tab-container-para-wrapper">
        <p className="tab-container-para">{value.tabContent}</p>
      </div>
    </div>
  );
};

export default Tabs;
