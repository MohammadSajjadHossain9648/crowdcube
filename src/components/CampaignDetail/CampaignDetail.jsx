import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CampaignDetail = () => {
  const campaign = useLoaderData();
  const {
    _id,
    thumbnail,
    title,
    campaignType,
    description,
    minDonation,
    deadline,
    email,
    name,
  } = campaign;

  const currentDate = new Date();
  const deadlineDate = new Date(deadline);
  const isDeadlineOver = currentDate > deadlineDate;

  if(isDeadlineOver){
    Swal.fire({
      title: "warning!",
      text: "Donation Deadline Is Over",
      icon: "warning",
      confirmButtonText: "Ok",
    });
  }

  const handleToDonate = (_id) => {
    // sent data to the server
    fetch(`https://crowdcube-server-bay.vercel.app/campaignDetail/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(campaign),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "New Donate Campaign Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="sm:w-full md:w-11/12 mx-auto my-12">
      <h1 className="text-4xl font-bold text-orange_color text-center">
        Explore Campaign Details
      </h1>

      {/* card section */}
      <div className="card card-compact bg-base-100 shadow-xl grid sm:grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <figure>
          <img
            className="h-64 w-full rounded-2xl"
            src={thumbnail}
            alt={title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold text-blue_color">
            {title}
          </h2>
          <p className="text-sm text-gray_color">{description}</p>
          <p className="text-sm text-gray_color">
            CampaignType: {campaignType}
          </p>
          <p className="text-sm text-gray_color">
            Minimum Donation: {minDonation}$
          </p>
          <p className="text-sm text-gray_color">Deadline: {deadline}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleToDonate(_id)}
              className="btn text-white_color font-bold bg-blue_bg_color"
              disabled={isDeadlineOver}
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
