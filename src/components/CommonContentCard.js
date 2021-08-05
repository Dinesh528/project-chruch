import React from "react";

function CommonContentCard(props) {
  return (
    <div className="row" style={{ backgroundColor: `${props.bg}` }}>
      <div className="col-md-12 text-center">
        <h3 className="pt-1">{props.contentHeading}</h3>
        <p>{props.contentText}</p>
        <a className="mt-2 text-light">READ MORE</a>
      </div>
    </div>
  );
}

export default CommonContentCard;
