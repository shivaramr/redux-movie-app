import React, { memo } from "react";
import "./Footer.scss";

const Footer = memo(() => {
  return (
    <div className="footer">
      <div>Movie Library</div>
      <div>©2023, Movie, Inc. or its affiliates</div>
    </div>
  );
});

export default Footer;
