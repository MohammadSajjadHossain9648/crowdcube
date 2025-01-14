import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import LogIn from "../components/LogIn/LogIn";
import Register from "../components/Register/Register";
import AllCampaign from "../components/AllCampaign/AllCampaign";
import AddNewCampaign from "../components/AddNewCampaign/AddNewCampaign";
import MyCampaign from "../components/MyCampaign/MyCampaign";
import MyDonations from "../components/MyDonations/MyDonations";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import MainErrorLayout from "../components/MainErrorLayout/MainErrorLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import UpdateCampaign from "../components/UpdateCampaign/UpdateCampaign";
import CampaignDetail from "../components/CampaignDetail/CampaignDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async() => {
          const bannersJSON = await fetch('/banners.json');
          const banners = await bannersJSON.json();

          const campaignsJSON = await fetch('https://crowdcube-server-bay.vercel.app/runningCampaign');
          const campaigns = await campaignsJSON.json();

          return { banners, campaigns };
        }
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
        element: <AllCampaign></AllCampaign>,
        loader: () => fetch('https://crowdcube-server-bay.vercel.app/allCampaign')
      },
      {
        path: "/campaignDetail/:id",
        element: <PrivateRoute>
            <CampaignDetail></CampaignDetail>
          </PrivateRoute>,
        loader: ({params}) => fetch(`https://crowdcube-server-bay.vercel.app/campaignDetail/${params.id}`)
      },
      {
        path: "/AddNewCampaign",
        element: <PrivateRoute>
          <AddNewCampaign></AddNewCampaign>
        </PrivateRoute>
      },
      {
        path: "/MyCampaign",
        element: <PrivateRoute>
          <MyCampaign></MyCampaign>
        </PrivateRoute>,
        loader: () => fetch('https://crowdcube-server-bay.vercel.app/myCampaign')
      },
      {
        path: "/updateCampaign/:id",
        element: <PrivateRoute>
          <UpdateCampaign></UpdateCampaign>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://crowdcube-server-bay.vercel.app/updateCampaign/${params.id}`)
      },
      {
        path: "/MyDonations",
        element: <PrivateRoute>
          <MyDonations></MyDonations>
        </PrivateRoute>,
        loader: () => fetch('https://crowdcube-server-bay.vercel.app/myDonations')
      }
    ]
  },
  {
    path: "*",
    element: <MainErrorLayout></MainErrorLayout>,
    children: [
        {
            path: "*",
            element: <ErrorPage></ErrorPage>
        }
    ]
  }
]);

export default router;
