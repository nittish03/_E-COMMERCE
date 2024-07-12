import React from "react";

function Footer() {
  return (
    <>
      <>
        <p />

        <button className="back">
          <a className="back" style={{ color: "white" }} href="#">
            Back to Top
          </a>
        </button>
        <footer id="footer2">
          <div className="box1">
            <ul>
              <li className="heading">Get to know us</li>
              <br />
              <li>
                <a className="white" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="white" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="white" href="#">
                  About E-Commerce
                </a>
              </li>
              <li>
                <a className="white" href="#">
                  E-Commerce devices
                </a>
              </li>
              <li>
                <a className="white" href="#">
                  E-Commerce services
                </a>
              </li>
            </ul>
          </div>
          <div className="box2">
            <ul>
              <li className="heading">Make money with us</li>+
              <br />
              <li>
                <a className="white" href="#">
                  Sell apps
                </a>
              </li>
              <li>
                <a className="white" href="#">
                  Become an Affiliate
                </a>
              </li>
              <li>
                <a className="white" href="#">
                  Host an E-Commerce hub
                </a>
              </li>
              <li>
                <a className="white" href="#">
                  Self-publish with us
                </a>
              </li>
            </ul>
          </div>
          <div className="box3">
            <ul>
              <li className="heading">Payment products</li>
              <br />
              <li></li>
              <li>
                <a className="white" href="#">
                  Shop with points
                </a>
              </li>
              <li>
                <a className="white" href="#">
                  Reload your balance
                </a>
              </li>
            </ul>
          </div>
          <div className="box4">
            <ul>
              <li className="heading">Let us help you</li>
              <br />
              <li>
                <a className="white" href="#">
                  Your account
                </a>
              </li>
              <li>
                <a className="white" href="#">
                  Your orders
                </a>
              </li>
              <li>
                <a className="white" href="#">
                  Returns &amp; replacements
                </a>
              </li>
              <li>
                <a className="white" href="#">
                  Assisstant
                </a>
              </li>
              <li>
                <a className="white" href="#">
                  help
                </a>
              </li>{" "}
            </ul>
          </div>
        </footer>
        <footer style={{ backgroundColor: "#37475a" }} className="footer3">
          <div className="logo2"></div>
          <select style={{borderRadius:"4px"}} className="option2">
            <option>English</option>
            <option>Hindi</option>
            <option>Dutch</option>
          </select>
          <select style={{borderRadius:"4px"}} className="option2">
            <option>USD</option>
            <option>INR</option>
            <option>DTH</option>
          </select>
          <select style={{borderRadius:"4px"}} className="option2">
            <option>UNITED STATES</option>
            <option>INDIA</option>
            <option>DUTCH</option>
          </select>
        </footer>
        <p />
      </>
    </>
  );
}

export default Footer;
