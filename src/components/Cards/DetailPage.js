import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  let params = useParams();
  let [result, setResult] = useState({});

  let api = `https://rickandmortyapi.com/api/character/${params.id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setResult(data);
    })();
  }, [api]);
  let { name, image, status, species, location, gender, type } = result;
  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column gap-3 ">
        <h1 className="text-center">{name}</h1>
        <img src={image} alt={name} className="" />
        {(() => {
          if (status === "Dead") {
            return <div className={`badge bg-danger fs-5`}>{status}</div>;
          } else if (status === "Alive") {
            return <div className={` badge bg-success fs-5`}>{status}</div>;
          } else {
            return <div className={`badge bg-secondary fs-5`}>{status}</div>;
          }
        })()}
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender : </span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Type: </span>
            {type === "" ? "unknown" : type}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
