import React from "react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="custom-footer">
      <button className="back-to-top" onClick={scrollToTop}>
        Back to Top
      </button>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Get to know us</h3>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About ShopSmart</a></li>
            <li><a href="#">ShopSmart devices</a></li>
            <li><a href="#">ShopSmart services</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Make money with us</h3>
          <ul>
            <li><a href="#">Sell products</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Host a ShopSmart hub</a></li>
            <li><a href="#">Self-publish with us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Payment products</h3>
          <ul>
            <li><a href="#">Shop with points</a></li>
            <li><a href="#">Reload your balance</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Let us help you</h3>
          <ul>
            <li><a href="#">Your account</a></li>
            <li><a href="#">Your orders</a></li>
            <li><a href="#">Returns & replacements</a></li>
            <li><a href="#">Assistant</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="logo">ShopSmart</div>
        <div className="footer-selects">
          <select className="footer-select">
            <option>English</option>
            <option>Hindi</option>
            <option>Dutch</option>
          </select>
          <select className="footer-select">
            <option>USD</option>
            <option>INR</option>
            <option>EUR</option>
          </select>
          <select className="footer-select">
            <option>United States</option>
            <option>India</option>
            <option>Netherlands</option>
          </select>
        </div>
      </div>
    </footer>
  );
}

export default Footer;