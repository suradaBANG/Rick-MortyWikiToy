import React from "react";

const InputGroup = ({ total, name, setId }) => {
  // create an array from 1 to 51
  //   console.log([...Array(total).keys()]);
  let Episodes = [...Array(total).keys()];
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => setId(e.target.value)}
        className="form-select"
        id={name}
      >
        {Episodes.map((Episode) => {
          return (
            <option key={Episode + 1} value={Episode + 1}>
              {name} -{Episode + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
