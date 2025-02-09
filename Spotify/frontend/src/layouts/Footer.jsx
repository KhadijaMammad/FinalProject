import React from "react";
import {Link} from "react-router-dom";
import "../assets/styles/layouts-page/footer.css";

export default function Footer() {
  return (
    <>
      <div className="container">
        <div className="footer">
          <div className="footer-page">
            <div className="footer-first">
              <h4 className="footer-heading">Company</h4>
              <div className="footer-lists">
                <Link className="footer-list">About</Link>
                <Link className="footer-list">Jobs</Link>
                <Link className="footer-list">For the Record</Link>
              </div>
            </div>
            <div className="footer-second">
              <h4 className="footer-heading">Communities</h4>
              <div className="footer-lists">
                <Link className="footer-list">For Artists</Link>
                <Link className="footer-list">Developers</Link>
                <Link className="footer-list">Advertising</Link>
                <Link className="footer-list">Investors</Link>
                <Link className="footer-list">Vendors</Link>
              </div>
            </div>
            <div className="footer-third">
              <h4 className="footer-heading">Useful links</h4>
              <div className="footer-lists">
                <Link className="footer-list">Support</Link>
                <Link className="footer-list">Free Mobile App</Link>
              </div>
            </div>
            <div className="footer-fourth">
              <h4 className="footer-heading">Spotify Plans</h4>
              <div className="footer-lists">
                <Link className="footer-list">Premium Individual</Link>
                <Link className="footer-list">Premium Duo</Link>
                <Link className="footer-list">Premium Family</Link>
                <Link className="footer-list">Premium Student</Link>
                <Link className="footer-list">Spotify Free</Link>
              </div>
            </div>
            <div className="footer-fifth">
              <div className="footer-icons">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
              </div>
            </div>
          </div>
          <div className="footer-finish">
            <div className="finish-links">
              <Link className="finish-list">Legal</Link>
              <Link className="finish-list">Safety & Privacy Center</Link>
              <Link className="finish-list">Privacy Policy</Link>
              <Link className="finish-list">Cookies</Link>
              <Link className="finish-list">About Ads</Link>
              <Link className="finish-list">Accessibility</Link>
            </div>
            <div className="finish-copyright">
              <span className="finish-list">© 2025 Spotify AB</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
