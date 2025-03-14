import React, {useEffect, useState} from "react";
import "../../assets/styles/mainpage/premiumcard.css";

export default function PremiumCard() {
  const [premium, setPremium] = useState([]);

  function getData() {
    fetch("http://localhost:3000/premium")
      .then((res) => res.json())
      .then((data) => setPremium(data));
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="premium-card-section">
          <div className="premium-card-container">
            {premium.map((item)=>(
                <div key={item._id} className="premium-card">
                <div className="card-body">
                  <h4 className="card-heading">{item.heading}</h4>
                  <h1 className="card-name">{item.name}</h1>
                  <p className="card-price">${item.price}/month</p>
                  <button className="card-info">{item.info}</button>
                  <p className="card-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
