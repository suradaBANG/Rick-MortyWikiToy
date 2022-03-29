import React from "react";

const FiltersBtn = ({ item, index, name, task, setPageNumber }) => {
  return (
    <div>
      <div className="form-check">
        <style jsx="true">{`
          .x:checked + label {
            background-color: #0b5ed7;
            color: #fff;
          }
          input[type="radio"] {
            display: none;
          }
        `}</style>
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          className="btn btn-outline-primary"
          htmlFor={`${name}-${index}`}
          onClick={() => {
            setPageNumber(1);
            task(item);
          }}
        >
          {item}
        </label>
      </div>
    </div>
  );
};

export default FiltersBtn;
