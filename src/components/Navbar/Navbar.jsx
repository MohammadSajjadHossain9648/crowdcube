import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { Tooltip } from "react-tooltip";
import { authContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, handleToSignOut } = useContext(authContext);

  return (
    <div className="navbar sm:w-full lg:w-11/12 mx-auto">
      <div className="navbar-start md:w-1/4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <RxHamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] backdrop-blur-md mt-3 w-44 p-2 space-y-3 bg-orange_color"
          >
            <li className="hover:font-bold text-white_color">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:font-bold text-white_color">
              <Link to={"/AllCampaign"}>All Campaign</Link>
            </li>
            <li className="hover:font-bold text-white_color">
              <Link to={"/AddNewCampaign"}>Add New Campaign</Link>
            </li>
            <li className="hover:font-bold text-white_color">
              <Link to={"/MyCampaign"}>My Campaign</Link>
            </li>
            <li className="hover:font-bold text-white_color">
              <Link to={"/MyDonations"}>My Donations</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="text-xl font-extrabold text-blue_color w-80">
          Crowdcube
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal md:space-x-4 lg:space-x-8">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "font-bold text-orange_color" : "text-blue_color"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/AllCampaign"}
            className={({ isActive }) =>
              isActive ? "font-bold text-orange_color" : "text-blue_color"
            }
          >
            All Campaign
          </NavLink>
          <NavLink
            to={"/AddNewCampaign"}
            className={({ isActive }) =>
              isActive ? "font-bold text-orange_color" : "text-blue_color"
            }
          >
            Add New Campaign
          </NavLink>
          <NavLink
            to={"/MyCampaign"}
            className={({ isActive }) =>
              isActive ? "font-bold text-orange_color" : "text-blue_color"
            }
          >
            My Campaign
          </NavLink>
          <NavLink
            to={"/MyDonations"}
            className={({ isActive }) =>
              isActive ? "font-bold text-orange_color" : "text-blue_color"
            }
          >
            My Donations
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
                data-tooltip-place="left"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={user.photoURL}
                  alt="user image"
                />
                <Tooltip id="my-tooltip" />
              </a>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] backdrop-blur-md mt-3 w-36 p-2 bg-orange_color"
            >
              <button onClick={handleToSignOut} className="btn ml-4">
                LogOut
              </button>
            </ul>
          </div>
        ) : (
          <div className="flex items-center">
            <Link
              to={"/LogIn"}
              className="btn text-white_color bg-orange_bg_color font-bold mr-4"
            >
              LogIn
            </Link>
            <Link
              to={"/Register"}
              className="btn text-white_color bg-orange_bg_color font-bold"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
