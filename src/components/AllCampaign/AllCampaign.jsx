import React, { useState } from "react";
import { PiSlidersBold } from "react-icons/pi";
import { useLoaderData } from "react-router-dom";

const AllCampaign = () => {
  const campaigns = useLoaderData();

  const [sortedCampaigns, setSortedCampaigns] = useState(campaigns);

  // Sorting handler function
  const handleSortByMinDonation = () => {
    const sorted = [...sortedCampaigns].sort(
      (a, b) => a.minDonation - b.minDonation
    );
    setSortedCampaigns(sorted);
  };

  return (
    <div className="w-11/12 mx-auto my-12">
      <div className="mb-5 flex justify-between items-center">
        <p className="mb-3 text-3xl font-bold text-orange_color">
          All Campaign
        </p>
        <button
          onClick={handleSortByMinDonation}
          className="text-purple_color font-semibold px-4 py-2 border border-purple_color rounded-2xl flex items-center"
        >
          <span className="text-2xl font-bold text-blue_color">
            Sort by Min Donation
          </span>
          <PiSlidersBold className="ml-2" />
        </button>
      </div>

      {/* Table format for campaigns */}
      <div className="overflow-x-auto">
        <table className="table table-auto w-full">
          <thead>
            <tr className="space-x-4 space-y-2">
              <th className="text-left text-gray_color">Thumbnail</th>
              <th className="text-left text-gray_color">Title</th>
              <th className="text-left text-gray_color">Deadline</th>
              <th className="text-left text-gray_color">Min Donation($)</th>
              <th className="text-left text-gray_color">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedCampaigns.map((sortedCampaign, index) => (
              <tr key={index} className="space-x-4 space-y-2">
                <td>
                  <img
                    className="h-12 w-12 object-cover"
                    src={sortedCampaign.thumbnail}
                    alt={sortedCampaign.title}
                  />
                </td>
                <td className=" text-blue_color font-semibold">
                  {sortedCampaign.title}
                </td>
                <td className="text-gray_color">{sortedCampaign.deadline}</td>
                <td className="text-gray_color">
                  {sortedCampaign.minDonation}
                </td>
                <td>
                  <button className="btn text-white_color font-bold bg-blue_bg_color">
                    See More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaign;
