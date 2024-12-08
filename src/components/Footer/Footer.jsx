import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue_color">
      <div className="w-11/12 mx-auto grid sm:grid-cols-1 md:grid-cols-4 gap-8 py-16 text-white_color">
        <div>
          <h1 className="text-2xl font-bold mb-2">
            Crowdcube
          </h1>
          <p className="text-sm">
          Crowdcube connects entrepreneurs with millions in funding, empowering businesses to grow and thrive through investments from a large community of backers.
          </p>
        </div>
        <div className="md:w-2/5 md:mx-auto">
          <h3 className="font-bold mb-2">Company</h3>
          <div className="flex flex-col space-y-2">
            <Link to={"#"} className="text-sm hover:text-orange_color">
              About Us
            </Link>
            <Link to={"#"} className="text-sm hover:text-orange_color">
              Latest Event
            </Link>
            <Link to={"#"} className="text-sm hover:text-orange_color">
              How It Works
            </Link>
            <Link to={"#"} className="text-sm hover:text-orange_color">
              News & Articles
            </Link>
            <Link to={"#"} className="text-sm hover:text-orange_color">
            Contact Us
            </Link>
          </div>
        </div>
        <div className="md:w-2/5 md:mx-auto">
          <h3 className="font-bold mb-2">Fundraising</h3>
          <div className="flex flex-col space-y-2">
            <Link to={"#"} className="text-sm hover:text-orange_color">
              Education
            </Link>
            <Link to={"#"} className="text-sm hover:text-orange_color">
              Design
            </Link>
            <Link to={"#"} className="text-sm hover:text-orange_color">
              Video
            </Link>
            <Link to={"#"} className="text-sm hover:text-orange_color">
              Fashion
            </Link>
            <Link to={"#"} className="text-sm hover:text-orange_color">
              Medical
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">Contact</h3>
          <div className="flex flex-col space-y-2">
            <Link to={"#"} className="text-sm hover:text-orange_color">
            Number:666 888 0000
            </Link>
            <Link to={"#"} className="text-sm hover:text-orange_color">
             Gmail: crowdcube@gmail.com
            </Link>
            <Link to={"#"} className="text-sm hover:text-orange_color">
            Address: 22 Broklyn Street New York USA
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-blue_bg_color border-t border-blue_bg_color mt-8 py-8 text-center">
        <p className="text-sm text-white_color">
          &copy; 2024 All Rights Reserved. Built with ❤️ for a better world.
        </p>
      </div>
    </div>
  );
};

export default Footer;
