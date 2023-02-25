import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <div className="row">
              <div className="col-6 col-lg-3">
                <h4>Resources</h4>
                <ul>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Creator Hub</a>
                  </li>
                  <li>
                    <a href="#">Reports</a>
                  </li>
                  
                </ul>
              </div>

              <div className="col-6 col-lg-3">
                <h4>COMPANY</h4>
                <ul>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">
                      Brand Center
                    </a>
                  </li>
                  <li>
                    <a href="">Blogs</a>
                  </li>
                  <li>
                    <a href="">Articles</a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-lg-3">
                <h4>DOWNLOAD</h4>
                <ul>
                  <li>
                    <a href="">PC</a>
                  </li>
                  <li>
                    <a href="">ANDROID</a>
                  </li>
                  {/* <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li> */}
                </ul>
              </div>

              <div className="col-6 col-lg-3">
                <h4>Help</h4>
                <ul>
                  <li>
                    <a href="https://instagram.com/">Instagram</a>
                  </li>
                  <li>
                    <a href="https://twitter.com">Twitter</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com">Facebook</a>
                  </li>
                  <li>
                    {/* <a href="https://www.whatsapp.com">
                      Coronavirus
                    </a> */}
                  </li>
                </ul>
                {/* <div className="row">
                    <div className="col-3 mx-auto">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/thapatechnical/"
                        target="_thapa">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div> */}
              </div>
            </div>
            <hr />
            <div className="mt-5">
              <p className="main-hero-para text-center w-100">
                Copyright @ 2023 Link-Up. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;