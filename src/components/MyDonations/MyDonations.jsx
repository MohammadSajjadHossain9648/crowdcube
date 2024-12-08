import React from "react";
import { useLoaderData } from "react-router-dom";

const MyDonations = () => {
  const campaigns = useLoaderData();

  return (
    <div className="w-11/12 mx-auto my-12">
      <h1 className="text-center mb-6 text-2xl font-bold text-orange_color">
        My Donation
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 justify-center gap-8">
        {campaigns.map((campaign, index) => (
          <div key={index} className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                className="sm:h-64 md:h-52 w-full"
                src={campaign.thumbnail}
                alt={campaign.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold text-blue_color">
                {campaign.title}
              </h2>
              <p className="text-sm text-gray_color">{campaign.description}</p>
              <p className="text-sm text-gray_color">
                Campaign Type: {campaign.campaignType}
              </p>
              <p className="text-sm text-gray_color">
                Minimum Donation: {campaign.minDonation}$
              </p>
              <p className="text-sm text-gray_color">
                Deadline: {campaign.deadline}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDonations;
