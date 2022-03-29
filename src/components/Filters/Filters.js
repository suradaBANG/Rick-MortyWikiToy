import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({ setPageNumber, setStatus, setGender, setSpecies }) => {
  // clear the props
  let clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber("");
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-4">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline"
        onClick={clear}
      >
        Clear Filters
      </div>
      <div className="accordion mt-4" id="accordionGroup">
        <Status setPageNumber={setPageNumber} task={setStatus} />
        <Species setPageNumber={setPageNumber} task={setSpecies} />
        <Gender setPageNumber={setPageNumber} task={setGender} />
      </div>
    </div>
  );
};

export default Filters;
