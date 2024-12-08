import React from "react";
import { Link } from "react-router-dom";

const RunningCampaign = ({ campaigns }) => {
  return (
    <div id="runningCampaign" className="m-12">
      <div className="text-center mb-6">
        <p className="mb-3 text-2xl font-bold text-orange_color">
          Popular projects
        </p>
        <h1 className="text-4xl font-bold text-blue_color">
          Explore Our Projects
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 justify-center gap-8">
        {campaigns.map((campaign, index) => (
          <div key={index} className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img className="sm:h-64 md:h-52 w-full" src={campaign.thumbnail} alt={campaign.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold text-blue_color">
                {campaign.title}
              </h2>
              <p className="text-sm text-gray_color">{campaign.description}</p>
              <p className="text-sm text-gray_color">Minimum Donation: {campaign.minDonation}$</p>
                <p className="text-sm text-gray_color">Deadline: {campaign.deadline}</p>
              <div className="card-actions justify-end">
                <button className="btn text-white_color font-bold bg-blue_bg_color">
                  <Link to={`/campaignDetail/${campaign._id}`}>See More</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningCampaign;
