import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";

const Location = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState({});
  let [results, setResults] = useState([]);
  let api = `https://rickandmortyapi.com/api/location/${id}`;

  let { dimension, type, name } = info;
  console.log(info);
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = Promise.all(
        data.residents.map((resident) => {
          return fetch(resident).then((res) => res.json());
        })
      );
      setResults(await a);
    })();
  }, [api]);
  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-4">
          Location :{" "}
          <span className="text-primary">{name === "" ? "UnKnown" : name}</span>
        </h1>
        <h5 className="text-center mb-3">
          Dimension : {dimension === "" ? "UnKnown" : dimension}
        </h5>
        <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center fw-bold fs-4 mb-2">select here</h4>
          <InputGroup total={126} name="Location" setId={setId} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
