import React from "react";
import Personalinfo from "./Personalinfo";
import Demand from "./Demand";
import "./AccountDetail.css";
import { useState } from "react";

function AccountDetail() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    contary: "",
    city: "",
    Bio: "",
    platform: "",
    socialmedia: "",
    interst: "",
    demand: "",
  });
  const formDisplay = () => {
    if (page === 0)
      return <Personalinfo formData={formData} setFormData={setFormData} />;
    else return <Demand formData={formData} setFormData={setFormData} />;
  };
  const formHeading = ["Personal Info", "Demand"];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 col-12 offset-lg-2 offset-md-1 mt-5">
            <div className="form-heading">
              <h2>{formHeading[page]}</h2>
              <h4>{page + 1}/2</h4>
            </div>
            <div className="form-body">{formDisplay()}</div>
            <div className="form-button">
              <button
                disabled={page === 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Prev.
              </button>
              <button
                disabled={page === formHeading.length - 1}
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountDetail;
