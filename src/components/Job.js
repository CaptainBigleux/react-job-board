import React from "react";
import "./Job.css";

const Job = (props) => {
  const { className, title, contractType, country, city } = props;
  return (
    <div className={`${className} job`}>
      <p>{title}</p>
      <span>
        {contractType} - {country} - {city}
      </span>
    </div>
  );
};

export default Job;
