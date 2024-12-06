import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import LogIn from "../components/LogIn/LogIn";
import Register from "../components/Register/Register";
import AllCampaign from "../components/AllCampaign/AllCampaign";
import AddNewCampaign from "../components/AddNewCampaign/AddNewCampaign";
import MyCampaign from "../components/MyCampaign/MyCampaign";
import MyDonations from "../components/MyDonations/MyDonations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/LogIn",
        element: <LogIn></LogIn>
      },
      {
        path: "/Register",
        element: <Register></Register>
      },
      {
        path: "/AllCampaign",
        element: <AllCampaign></AllCampaign>
      },
      {
        path: "/AddNewCampaign",
        element: <AddNewCampaign></AddNewCampaign>
      },
      {
        path: "/MyCampaign",
        element: <MyCampaign></MyCampaign>
      },
      {
        path: "/MyDonations",
        element: <MyDonations></MyDonations>
      }
    ]
  },
]);

export default router;
