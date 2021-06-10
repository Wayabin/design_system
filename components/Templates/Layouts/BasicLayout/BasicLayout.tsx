import React from "react";
import "./BasicLayout.scss";
export interface BasicLayoutProps {
  children?: any;
}

export const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  return (
    <div className="container">
      {/* <div className="store-header">Header</div> */}
      <div className="store-body">{children}</div>
      {/* <div className="store-footer">Footer</div> */}
    </div>
  );
};

export default BasicLayout;
