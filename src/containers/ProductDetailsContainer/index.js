import { useState } from "react";
import Tabs from "../../components/Tabs";
import { RANDOM_DETAILS } from "../../utils/data";
import "./index.css";

const tabList = [
  { label: "details", tabContent: RANDOM_DETAILS },
  { label: "delivery", tabContent: RANDOM_DETAILS },
  { label: "fit", tabContent: RANDOM_DETAILS },
  { label: "share", tabContent: RANDOM_DETAILS },
];
const ProductDetailsContainer = () => {
  const [selectedTab, setTab] = useState({
    label: "details",
    tabContent: RANDOM_DETAILS,
  });
  return (
    <div className="product-detail-container">
      <Tabs
        tabList={tabList}
        onChange={(tab) => setTab(tab)}
        value={selectedTab}
      />
      <p className="detail-container-span">
        See the <span className="detail-editor">EDITOR’S NOTE</span>
      </p>
      <p className="detail-container-span">
        Learn about the <span className="detail-designer">DESIGNER</span>
      </p>
    </div>
  );
};

export default ProductDetailsContainer;
