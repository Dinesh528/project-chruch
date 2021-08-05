import React from "react";
import EventCard from "./EventCard";
import background8 from "../Assets/background8.png";
import background9 from "../Assets/background9.png";
function Events() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="container">
            <EventCard
              eventImg={background8}
              eventHeading="Spirit And Truth"
              date={new Date().getFullYear()}
              location="St. Paul Church"
              address="510 102th Ave. NE, Bellevue, WA 68005"
              eventText="Spirit & Fact Fellowship International motivates the development of Church Organizations in every nation throughout the globe. All companies affix to STF on the basis of sharing the very same vision, Building An Enduring Work of Reality, together with having the identical function, well worths, beliefs, in addition to techniques. Example HTML Template would help you to create beautiful site."
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="container">
            <EventCard
              eventImg={background9}
              eventHeading="Sunday School"
              date={new Date().getFullYear()}
              location="St. Paul Church"
              address="510 102th Ave. NE, Bellevue, WA 68005"
              eventText="A Sunday university is a school, normally (yet not always) Christian, which deals with children likewise various other youngsters that would certainly be taking care of weekdays. Sunday colleges were really initial established in the 1780s in England to provide education and discovering to working children. William King at first started a Sunday university in Dursley and Gloucestershire."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
