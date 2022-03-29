import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.scss";

const Cards = ({ results }) => {
  let display;
  if (results) {
    display = results.map((result) => {
      let { name, image, status, species, location } = result;
      return (
        <Link
          to={`/${result.id}`}
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-decoration-none text-dark"
          key={result.id}
        >
          <div
            className={`${styles.cards} d-flex flex-column justify-content-center`}
          >
            <img src={image} alt={name} className={`${styles.img} img-fluid`} />
            <div className={styles.content}>
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="fs-6 fw-normal">Last location</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {" "}
                  {status}{" "}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {" "}
                  {status}{" "}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {" "}
                  {status}{" "}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = " No Characters Found";
  }

  return <>{display}</>;
};

export default Cards;
