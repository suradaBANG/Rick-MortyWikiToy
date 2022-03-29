import React from "react";
import FiltersBtn from "../FiltersBtn";

const Gender = ({ task, setPageNumber }) => {
  let genders = ["female", "male", "genderless", "unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="true"
          aria-controls="collapseThree"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((item, index) => {
            return (
              <FiltersBtn
                task={task}
                setPageNumber={setPageNumber}
                item={item}
                key={index}
                index={index}
                name="gender"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gender;
