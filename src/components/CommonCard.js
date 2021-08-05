import React from "react";

function CommonCard(props) {
  return (
    <div className="row">
      <div className="col-md-4 p-5 pt-0 pb-0">
        <div className="container">
          <img
            className="center"
            style={{ maxHeight: "250px", maxWidth: "300px" }}
            src={props.cardImg}
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="container">
          <h3>{props.heading}</h3>
          <div className="font-weight-light">
            <p>{props.date}</p>
            <p>
              <span class="fi-location"></span>
              {props.location}
            </p>
          </div>
          <p>{props.cardText}</p>
        </div>
      </div>
      <div className="col-md-2">
        <div className="container">
          <a href="#" class="btn btn-danger  active" role="button" aria-pressed="true">
            Readmore
          </a>
        </div>
      </div>
      <div className="mb-3"></div>
    </div>
  );
}

export default CommonCard;
