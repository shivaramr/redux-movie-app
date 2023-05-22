import React, { memo } from "react";
import pnf from "../../images/pnf.jpg";
import "./PageNotFound.scss";

const PageNotFound = memo(() => {
  return (
    <div className="pnf-page">
      <img src={pnf} alt="Page Not Found..." className="pnf-img" />
    </div>
  );
});

export default PageNotFound;
