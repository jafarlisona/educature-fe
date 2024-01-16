import React, { useEffect, useState } from "react";
import "./index.scss";

function Features() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/features")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <section id="features">
      <div className="container">
        <h1>Features That Make Us Hero</h1>
        <p>
          If you are looking at blank cassettes on the web, you may be very
          confused at the difference in price. <br /> You may see some for as
          low as $.17 each.
        </p>
        <div className="cards">
          {features.map((x) => (
            <div className="card" key={x._id}>
              <i className={x.icon}></i>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
