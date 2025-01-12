import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const UpdateCampaign = () => {
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

  const { user } = useContext(authContext);

  const handleToUpdateCampaign = (e) => {
    e.preventDefault();

    const thumbnail = e.target.thumbnail.value;
    const title = e.target.title.value;
    const campaignType = e.target.campaignType.value;
    const description = e.target.description.value;
    const minDonation = e.target.minDonation.value;
    const deadline = e.target.deadline.value;
    const email = e.target.email.value;
    const name = e.target.name.value;

    const updatedCampaign = {
      thumbnail,
      title,
      campaignType,
      description,
      minDonation,
      deadline,
      email,
      name,
    };

    // sent data to the server
    fetch(`https://crowdcube-server-bay.vercel.app/updateCampaign/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "New Campaign updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center py-12">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-orange_color text-center">
            Update Campaign
          </h2>
          <form onSubmit={handleToUpdateCampaign}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue_color">
                  Image Thumbnail(URL)
                </span>
              </label>
              <input
                type="url"
                name="thumbnail"
                defaultValue={thumbnail}
                placeholder="Image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue_color">
                  Campaign Title
                </span>
              </label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                placeholder="Campaign Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue_color">
                  Campaign Type
                </span>
              </label>
              <select name="campaignType" className="select select-bordered">
                <option value="personal issue">Personal Issue</option>
                <option value="startup">Startup</option>
                <option value="business">Business</option>
                <option value="creative ideas">Creative Ideas</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue_color">Description</span>
              </label>
              <textarea
                name="description"
                defaultValue={description}
                placeholder="Description"
                className="textarea textarea-bordered"
                rows={5}
                cols={20}
                required
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue_color">
                  Minimum Donation Amount
                </span>
              </label>
              <input
                type="number"
                name="minDonation"
                defaultValue={minDonation}
                placeholder="Minimum Donation Amount"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue_color">Deadline</span>
              </label>
              <input
                type="date"
                name="deadline"
                defaultValue={deadline}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue_color">User Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={user?.email || ""}
                readOnly
                className="input input-bordered bg-gray-200"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue_color">User Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={user?.displayName || ""}
                readOnly
                className="input input-bordered bg-gray-200"
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn text-white_color font-bold bg-blue_bg_color"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCampaign;
