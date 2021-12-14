/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { makeStyles } from "@material-ui/core";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import "../assets/css/bootstrap.css";
import "../assets/css/responsive.css";
import "../assets/css/style.css";
import LandingNav from "../components/Navbar.js/LandingNav";

const useStyles = makeStyles((theme) => ({
  landingPageRoot: {
    height: "100vh ",
    paddingTop: 49,
    overflow: "auto",
  },
  backgroundImage: {
    paddingTop: 140,
    background: `url(${process.env.PUBLIC_URL}/images/hero-bg.png)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    minHeight: "100vh",
  },
}));
const LandingPage = () => {
  const classes = useStyles();
  return (
    <>
      <LandingNav />
      <div className={classes.landingPageRoot}>
        <div class="hero_area" className={classes.backgroundImage}>
          <section class="slider_section" id="home">
            <div
              id="customCarousel1"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-7">
                        <div class="detail-box">
                          <h1>We Provide Best Healthcare</h1>
                          <p>
                            Explicabo esse amet tempora quibusdam laudantium,
                            laborum eaque magnam fugiat hic? Esse dicta aliquid
                            error repudiandae earum suscipit fugiat molestias,
                            veniam, vel architecto veritatis delectus repellat
                            modi impedit sequi.
                          </p>
                          <div class="btn-box">
                            <a href="" class="btn1">
                              {" "}
                              Read More{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-7">
                        <div class="detail-box">
                          <h1>We Provide Best Healthcare</h1>
                          <p>
                            Explicabo esse amet tempora quibusdam laudantium,
                            laborum eaque magnam fugiat hic? Esse dicta aliquid
                            error repudiandae earum suscipit fugiat molestias,
                            veniam, vel architecto veritatis delectus repellat
                            modi impedit sequi.
                          </p>
                          <div class="btn-box">
                            <a href="" class="btn1">
                              {" "}
                              Read More{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-7">
                        <div class="detail-box">
                          <h1>We Provide Best Healthcare</h1>
                          <p>
                            Explicabo esse amet tempora quibusdam laudantium,
                            laborum eaque magnam fugiat hic? Esse dicta aliquid
                            error repudiandae earum suscipit fugiat molestias,
                            veniam, vel architecto veritatis delectus repellat
                            modi impedit sequi.
                          </p>
                          <div class="btn-box">
                            <a href="" class="btn1">
                              {" "}
                              Read More{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ol class="carousel-indicators">
                <li
                  data-target="#customCarousel1"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#customCarousel1" data-slide-to="1"></li>
                <li data-target="#customCarousel1" data-slide-to="2"></li>
              </ol>
            </div>
          </section>
        </div>

        <section class="department_section layout_padding" id="services">
          <div class="department_container">
            <div class="container">
              <div class="heading_container heading_center">
                <h2>Our Services</h2>
                <p>
                  Asperiores sunt consectetur impedit nulla molestiae delectus
                  repellat laborum dolores doloremque accusantium
                </p>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <div class="box">
                    <div class="img-box">
                      <img src="images/s1.png" alt="" />
                    </div>
                    <div class="detail-box">
                      <h5>Cardiology</h5>
                      <p>
                        fact that a reader will be distracted by the readable
                        page when looking at its layout.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="box">
                    <div class="img-box">
                      <img src="images/s2.png" alt="" />
                    </div>
                    <div class="detail-box">
                      <h5>Diagnosis</h5>
                      <p>
                        fact that a reader will be distracted by the readable
                        page when looking at its layout.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="box">
                    <div class="img-box">
                      <img src="images/s3.png" alt="" />
                    </div>
                    <div class="detail-box">
                      <h5>Surgery</h5>
                      <p>
                        fact that a reader will be distracted by the readable
                        page when looking at its layout.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="box">
                    <div class="img-box">
                      <img src="images/s4.png" alt="" />
                    </div>
                    <div class="detail-box">
                      <h5>First Aid</h5>
                      <p>
                        fact that a reader will be distracted by the readable
                        page when looking at its layout.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn-box">
                <a href=""> View All </a>
              </div>
            </div>
          </div>
        </section>

        <section class="about_section layout_margin-bottom" id="about">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="img-box">
                  <img src="images/about-img.jpg" alt="" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="detail-box">
                  <div class="heading_container">
                    <h2>
                      About <span>Us</span>
                    </h2>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All
                  </p>
                  <a href=""> Read More </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="doctor_section layout_padding" id="doctors">
          <div class="container">
            <div class="heading_container heading_center">
              <h2>Our Doctors</h2>
              <p class="col-md-10 mx-auto px-0">
                Incilint sapiente illo quo praesentium officiis laudantium
                nostrum, ad adipisci cupiditate sit, quisquam aliquid. Officiis
                laudantium fuga ad voluptas aspernatur error fugiat quos facilis
                saepe quas fugit, beatae id quisquam.
              </p>
            </div>
            <div class="row">
              <div class="col-sm-6 col-lg-4 mx-auto">
                <div class="box">
                  <div class="img-box">
                    <img src="images/d1.jpg" alt="" />
                  </div>
                  <div class="detail-box">
                    <div class="social_box">
                      <a href="">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-youtube" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </div>
                    <h5>Elina Josh</h5>
                    <h6 class="">Doctor</h6>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 mx-auto">
                <div class="box">
                  <div class="img-box">
                    <img src="images/d2.jpg" alt="" />
                  </div>
                  <div class="detail-box">
                    <div class="social_box">
                      <a href="">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-youtube" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </div>
                    <h5>Adam View</h5>
                    <h6 class="">Doctor</h6>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 mx-auto">
                <div class="box">
                  <div class="img-box">
                    <img src="images/d3.jpg" alt="" />
                  </div>
                  <div class="detail-box">
                    <div class="social_box">
                      <a href="">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-youtube" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </div>
                    <h5>Mia Mike</h5>
                    <h6 class="">Doctor</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="client_section layout_padding-bottom layout_padding-top">
          <div class="container">
            <div class="heading_container heading_center">
              <h2>Testimonial</h2>
            </div>
            <div
              id="carouselExample2Controls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-md-11 col-lg-10 mx-auto">
                      <div class="box">
                        <div class="img-box">
                          <img src="images/client.jpg" alt="" />
                        </div>
                        <div class="detail-box">
                          <div class="name">
                            <h6>Alan Emerson</h6>
                          </div>
                          <p>
                            Enim consequatur odio assumenda voluptas
                            voluptatibus esse nobis officia. Magnam, aspernatur
                            nostrum explicabo, distinctio laudantium delectus
                            deserunt quia quidem magni corporis earum inventore
                            totam consectetur corrupti! Corrupti, nihil sunt?
                            Natus.
                          </p>
                          <i class="fa fa-quote-left" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-11 col-lg-10 mx-auto">
                      <div class="box">
                        <div class="img-box">
                          <img src="images/client.jpg" alt="" />
                        </div>
                        <div class="detail-box">
                          <div class="name">
                            <h6>Alan Emerson</h6>
                          </div>
                          <p>
                            Enim consequatur odio assumenda voluptas
                            voluptatibus esse nobis officia. Magnam, aspernatur
                            nostrum explicabo, distinctio laudantium delectus
                            deserunt quia quidem magni corporis earum inventore
                            totam consectetur corrupti! Corrupti, nihil sunt?
                            Natus.
                          </p>
                          <i class="fa fa-quote-left" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-11 col-lg-10 mx-auto">
                      <div class="box">
                        <div class="img-box">
                          <img src="images/client.jpg" alt="" />
                        </div>
                        <div class="detail-box">
                          <div class="name">
                            <h6>Alan Emerson</h6>
                          </div>
                          <p>
                            Enim consequatur odio assumenda voluptas
                            voluptatibus esse nobis officia. Magnam, aspernatur
                            nostrum explicabo, distinctio laudantium delectus
                            deserunt quia quidem magni corporis earum inventore
                            totam consectetur corrupti! Corrupti, nihil sunt?
                            Natus.
                          </p>
                          <i class="fa fa-quote-left" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel_btn-container">
                <a
                  class="carousel-control-prev"
                  href="#carouselExample2Controls"
                  role="button"
                  data-slide="prev"
                >
                  <ArrowBackSharpIcon />
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExample2Controls"
                  role="button"
                  data-slide="next"
                >
                  <ArrowForwardSharpIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer class="footer_section" id="contact">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-3 footer_col">
                <div class="footer_contact">
                  <h4>Reach at..</h4>
                  <div class="contact_link_box">
                    <a href="">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <span> Location </span>
                    </a>
                    <a href="">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                      <span> Call +01 1234567890 </span>
                    </a>
                    <a href="">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                      <span> demo@gmail.com </span>
                    </a>
                  </div>
                </div>
                <div class="footer_social">
                  <a href="">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 footer_col">
                <div class="footer_detail">
                  <h4>About</h4>
                  <p>
                    Beatae provident nobis mollitia magnam voluptatum, unde
                    dicta facilis minima veniam corporis laudantium alias
                    tenetur eveniet illum reprehenderit fugit a delectus
                    officiis blanditiis ea.
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-2 mx-auto footer_col">
                <div class="footer_link_box">
                  <h4>Links</h4>
                  <div class="footer_links">
                    <a class="active" href="#">
                      {" "}
                      Home{" "}
                    </a>
                    <a class="" href="about.html">
                      {" "}
                      About{" "}
                    </a>
                    <a class="" href="Services.html">
                      {" "}
                      Services{" "}
                    </a>
                    <a class="" href="doctors.html">
                      {" "}
                      Doctors{" "}
                    </a>
                    <a class="" href="contact.html">
                      {" "}
                      Contact Us{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 footer_col">
                <h4>Newsletter</h4>
                <form action="#">
                  <input type="email" placeholder="Enter email" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
            <div class="footer-info">
              <p>
                &copy; <span id="displayYear"></span> All Rights Reserved By
                <a href="#"> Smart Health Solutions</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
