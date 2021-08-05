import React from "react";
// import background1 from "../Assets/background10.jpg";
// import background2 from "../Assets/background2.png";
// import background3 from "../Assets/background3.jpg";

function Banner() {
  return (
    // <div className="landing">
    //   <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    //     <div class="carousel-indicators">
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleDark"
    //         data-bs-slide-to="0"
    //         class="active"
    //         aria-current="true"
    //         aria-label="Slide 1"
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleDark"
    //         data-bs-slide-to="1"
    //         aria-label="Slide 2"
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleDark"
    //         data-bs-slide-to="2"
    //         aria-label="Slide 3"
    //       ></button>
    //     </div>
    //     <div class="carousel-inner">
    //       <div class="carousel-item active" data-bs-interval="10000">
    //         <img
    //           src={background1}
    //           className="d-block w-100"
    //           alt="..."
    //           style={{ maxHeight: "489px", opacity: 0.5 }}
    //         />
    //         <div
    //           className="carousel-caption"
    //           style={{ marginBottom: "200px", marginleft: "150px", textAlign: "left" }}
    //         >
    //           <h1 style={{ color: "white" }}>Welcome to our Chruch</h1>
    //           <p>Some representative placeholder content for the first slide.</p>
    //         </div>
    //       </div>
    //       <div class="carousel-item" data-bs-interval="2000">
    //         <img
    //           src={background2}
    //           className="d-block w-100"
    //           alt="..."
    //           style={{ maxHeight: "489px", opacity: 0.8 }}
    //         />{" "}
    //         <div class="carousel-caption d-none d-md-block">
    //           <h5>Second slide label</h5>
    //           <p>Some representative placeholder content for the second slide.</p>
    //         </div>
    //       </div>
    //       <div class="carousel-item">
    //         <img
    //           src={background3}
    //           className="d-block w-100"
    //           alt="..."
    //           style={{ maxHeight: "489px", opacity: 0.8 }}
    //         />{" "}
    //         <div class="carousel-caption d-none d-md-block">
    //           <h5>Third slide label</h5>
    //           <p>Some representative placeholder content for the third slide.</p>
    //         </div>
    //       </div>
    //     </div>
    //     <button
    //       class="carousel-control-prev"
    //       type="button"
    //       data-bs-target="#carouselExampleDark"
    //       data-bs-slide="prev"
    //     >
    //       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span class="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       class="carousel-control-next"
    //       type="button"
    //       data-bs-target="#carouselExampleDark"
    //       data-bs-slide="next"
    //     >
    //       <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span class="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </div>
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-3 mb-4">Welcome to Chruch</h1>
              <p className="lead">
                Church is more than just entertainment, having large numbers of people attending
                services or hearing messages of empowerment from the pulpit that makes one feel
                good. Church is the lifeline of any society. Church is a unique place that should
                instill change in people's lives.
              </p>
              <hr />
              <div className="ml-auto">
                <button href="#" className="btn btn-lg btn-danger ">
                  Join With Us
                </button>
                <span className="ml-3">&nbsp; &nbsp; &nbsp;</span>
                <button href="#" className="btn btn-lg btn-outline-danger ">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
