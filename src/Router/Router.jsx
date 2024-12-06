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
        path: "/ForgetPassword",
        element: <ForgetPassword></ForgetPassword>
      },
      {
        path: "/AllCampaign",
        element: <AllCampaign></AllCampaign>
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
        </PrivateRoute>
      },
      {
        path: "/MyDonations",
        element: <PrivateRoute>
          <MyDonations></MyDonations>
        </PrivateRoute>
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
