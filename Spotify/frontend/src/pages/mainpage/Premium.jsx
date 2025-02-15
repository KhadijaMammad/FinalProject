import React from "react";
import "../../assets/styles/mainpage/premium.css";
import Visa from '../../assets/images/visa.svg'
import Paypal from '../../assets/images/paypal.svg'
import Mastercard from '../../assets/images/mastercard.svg'
import Amex from '../../assets/images/amex.svg'
import PremiumCard from "./PremiumCard";
import { Link } from "react-router-dom";

export default function Premium() {
  return (
    <>
      <div className="container">
        <div className="premium-page">
          <div className="premium-header">
            <h2>
              Listen without limits. Try 2 months
              <br /> of Premium Individual for free.
            </h2>
            <p>Only $4.99/month after. Cancel anytime. </p>
            <div className="premium-button">
              <Link to={'/premiumpayment'}><button className="start">Get Started</button></Link>
              <button className="button-plans">View all plans</button>
            </div>
            <h5 className="premium-finish">
              Premium Individual only. Free for 2 months, then $4.99 per month
              after. Offer only available if you haven't tried Premium before.
              Terms apply.
            </h5>
            <h5 className="premium-finish">Offer ends February 26, 2025.</h5>
          </div>
          {/* Affordable Section */}
          <div className="premium-affordable">
            <h1 className="affordable-heading">Affordable plans for any situation</h1>
            <p className="affordable-text">
              Choose a Premium plan and listen to ad-free music without limits
              on your phone, <br />speaker, and other devices. Pay in various ways.
              Cancel anytime.
            </p>
            <div className="afford-cards">
              <div className="card-images">
                <img src={Visa} style={{width: '60px'}}/>
                <img src={Mastercard} style={{width: '60px'}} />
                <img src={Paypal} style={{width: '60px'}} className="paypal" />
                <img src={Amex}style={{width: '60px'}}/>
              </div>
            </div>
          </div>
          {/* Premium Plans */}
          <div className="premium-plans">
            <div className="plans-header">
              <h1>All Premium plans include</h1>
            </div>
            <div className="plan-lists">
              <p className="plan-list"><i class="fa-solid fa-check"></i> Download to listen offline</p>
              <p className="plan-list"><i class="fa-solid fa-check"></i> Ad-free music listening</p>
              <p className="plan-list"><i class="fa-solid fa-check"></i> Play songs in any order</p>
              <p className="plan-list"><i class="fa-solid fa-check"></i> High audio quality</p>
              <p className="plan-list"><i class="fa-solid fa-check"></i> Listen with friends in real time</p>
              <p className="plan-list"><i class="fa-solid fa-check"></i> Organize listening queue</p>
            </div>
          </div>
          <PremiumCard/>
        </div>
      </div>
    </>
  );
}
