import React from "react";

export const FileItem = ({ file }) => {
  return (
    <div className="col-md-6  mb-3 ">
      <span className="badge badge-secondary p-2 d-flex justify-content-center mt-auto text-break text-capitalize">
        {file.indexOf(".") > 0 ? (
          <i className="fa fa-file fa-3x iconStyle" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-folder fa-3x iconStyle" aria-hidden="true"></i>
        )}
        &nbsp;&nbsp;&nbsp;
        <h5 className="mt-auto font-weight-normal">{file}</h5>
      </span>
    </div>
  );
};
