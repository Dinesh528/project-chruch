import Banner from "./components/layout/Banner";
import Header from "./components/layout/Header";
import CommonCard from "./components/CommonCard";
import "./App.css";
import Events from "./components/Events";
import Footer from "./components/layout/Footer";
import CommonContentCard from "./components/CommonContentCard";

function App() {
  return (
    <div className="">
      <Header />
      <Banner />
      <div className="m-5">
        <div className="col-md-12 text-center">
          <h3>UPCOMING EVENTS</h3>
          <p className="font-italic">Serving & Sharing</p>
        </div>
      </div>
      <div className="clearfix"></div>
      <CommonCard
        cardImg="https://source.unsplash.com/weekly?water"
        heading="Heading One"
        date={new Date().getFullYear()}
        location="Tirupati"
        cardText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore eveniet recusandae iste doloribus beatae adipisci tempora molestias neque quae! Molestiae quis expedita consectetur quidem atque culpa, nostrum iusto voluptas nam."
      />
      <CommonCard
        cardImg="https://source.unsplash.com/user/erondu/1600x1100"
        heading="Heading Two"
        date={new Date().getFullYear()}
        location="Chittoor"
        cardText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore eveniet recusandae iste doloribus beatae adipisci tempora molestias neque quae! Molestiae quis expedita consectetur quidem atque culpa, nostrum iusto voluptas nam."
      />
      <CommonCard
        cardImg="https://source.unsplash.com/user/erondu/daily"
        heading="Heading Three"
        date={new Date().getFullYear()}
        location="Andhra Pradesh"
        cardText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore eveniet recusandae iste doloribus beatae adipisci tempora molestias neque quae! Molestiae quis expedita consectetur quidem atque culpa, nostrum iusto voluptas nam."
      />
      <div className="row mt-2 mb-2 text-light">
        <div className="col-md-3">
          <CommonContentCard
            bg="#29333A"
            contentHeading="Our Beliefs"
            contentText="Our firm count on one timeless God who is the Designer of all points. He exists in 3 Individuals: God the Papa, God the Child and also God the Holy Spirit. He is entirely caring as entirely divine."
          />
        </div>
        <div className="col-md-3">
          <CommonContentCard
            bg="#A73D3A"
            contentHeading="Internships"
            contentText="Regional churches generally associate with, associate with, or consider themselves to be important components of religions, which are additionally called churches in numerous customs."
          />
        </div>
        <div className="col-md-3">
          <CommonContentCard
            bg="#CF4A46"
            contentHeading="Our Mission"
            contentText="We collect to commend God, pay attention to him, respond. We support each various other in confidence and also obedience to Christ. We love and take care of each other as God's individuals."
          />
        </div>
        <div className="col-md-3">
          <CommonContentCard
            bg="#DD6043"
            contentHeading="Our Community"
            contentText="We are passionate concerning using the globally area in addition to demonstrating God's love to others. Whether directly or online, individuals remain in our church as all over the globe."
          />
        </div>
      </div>
      <div className="m-5">
        <div className="col-md-12 text-center">
          <h2>OUR EVENTS</h2>
        </div>
      </div>
      <Events />
      <div className="clearfix">
        <Footer />
      </div>
    </div>
  );
}

export default App;
