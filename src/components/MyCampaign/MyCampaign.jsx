import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const MyCampaign = () => {
  const data = useLoaderData();

  const { user } = useContext(authContext);
  const filteredCampaigns = data.filter((person) => person.email === user.email);

  const [campaigns, setCampaign] = useState(filteredCampaigns);

  const handleToDelete = (_id) => {
    // Delete campaign from the database using the _id
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/myCampaign/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your campaign has been deleted.",
                icon: "success",
              });

              const remainingCampaigns = campaigns.filter(campaign => campaign._id !== _id);
              setCampaign(remainingCampaigns);
            }
          });
      }
    });
  };

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
                <td className="text-gray_color">{campaign.minDonation}</td>
                <td>
                  <button className="btn mr-2 text-white_color font-bold bg-green_color">
                    Update
                  </button>
                  <button
                    onClick={() => handleToDelete(campaign._id)}
                    className="btn text-white_color font-bold bg-red_color"
                  >
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
