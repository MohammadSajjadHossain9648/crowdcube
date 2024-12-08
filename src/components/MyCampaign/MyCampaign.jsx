import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const MyCampaign = () => {
  const data = useLoaderData();

  const { user } = useContext(authContext);
  const campaigns = data.filter((person) => person.email === user.email)

  return (
    <div>
      {/* Table format for campaigns */}
      <div className="sm:w-full md:w-11/12 mx-auto overflow-x-auto">
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
            {campaigns.map((campaign, index) => (
              <tr key={index} className="space-x-4 space-y-2">
                <td>
                  <img
                    className="h-12 w-12 object-cover"
                    src={campaign.thumbnail}
                    alt={campaign.title}
                  />
                </td>
                <td className=" text-blue_color font-semibold">
                  {campaign.title}
                </td>
                <td className="text-gray_color">{campaign.deadline}</td>
                <td className="text-gray_color">
                  {campaign.minDonation}
                </td>
                <td>
                  <button className="btn mr-2 text-white_color font-bold bg-blue_bg_color">
                    Update
                  </button>
                  <button className="btn text-white_color font-bold bg-blue_bg_color">
                    Delete
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

export default MyCampaign;
