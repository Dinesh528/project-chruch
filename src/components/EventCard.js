import React from "react";

function EventCard(props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <img className="img img-responsive" src={props.eventImg} />
        <div className="h3 lead mt-2">{props.eventHeading}</div>
        <div className="text-muted">
          <p>{props.date}</p>
          <p>{props.location}</p>
          <p>{props.address}</p>
        </div>
        <p>{props.eventText}</p>
      </div>
    </div>
  );
}

export default EventCard;
