import React from "react";
import office from "../../assets/office.avif";

const Advertisement = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content grid sm:grid-cols-1 md:grid-cols-2 w-11/12">
        <div>
          <h4 className="font-bold text-orange_color mb-3">READY TO GO</h4>
          <h1 className="text-4xl font-bold text-blue_color">
            Why You Should Choose Crowdcube Platform
          </h1>
          <p className="py-6 text-gray_color">
            Crowdcube is a trusted platform for connecting visionary
            entrepreneurs with investors. It offers transparent investment
            opportunities, diverse funding options, and a supportive community.
            With a proven track record, Crowdcube helps businesses grow while
            enabling investors to support innovative ideas.
          </p>
          <h2 className="text-2xl font-bold text-blue_color">
            Highest Success Rates
          </h2>
          <p className="py-6 text-gray_color">
            Achieve your goals with confidence on our platform, backed by a
            proven track record of high success rates and expert support.
          </p>
          <h2 className="text-2xl font-bold text-blue_color">
            Millions in Funding
          </h2>
          <p className="py-6 text-gray_color">
            Access millions in funding opportunities to bring your vision to
            life with the support of a trusted platform and a network of
            investors.
          </p>
        </div>
        <img src={office} className="h-full rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default Advertisement;
