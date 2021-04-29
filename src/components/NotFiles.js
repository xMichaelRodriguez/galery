import React from "react";
import emptyImage from "../helper/undraw_empty_xct9.svg";
export const NotFiles = () => {
  return (
    <img
      src={emptyImage}
      className="img-fluid w-50"
      alt={emptyImage.toString()}
    />
  );
};
