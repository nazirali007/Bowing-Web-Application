import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import SignIn from "./components/Authentication/SignIn";
import ForgetPassword from "./components/Authentication/ForgetPassword";
import OTPVerification from "./components/Authentication/OTPVerification";
import ResetPassword from "./components/Authentication/ResetPassword";
import MyProfile from "./components/homePage/MyProfile";
import ActiveLeaque from "./components/ActiveLeaque/ActiveLeaque";
import UpcomingLeaque from "./components/UpcomingLeaque/UpcomingLeaque";
import PastLeaque from "./components/PastLeaque/PastLeaque";
import UpcomingTeamCart from "./components/UpcomingTeam/UpcomingTeamCart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route path="dashboard" element={<HomePage />} />
        <Route path="myprofile" element={<MyProfile />} />
      </Route>

      {/* Authentications route */}
      <Route path="/auth">
        <Route path="signin" element={<SignIn />} />
        <Route path="forgetpassword" element={<ForgetPassword />} />
        <Route path="register" element={<ForgetPassword />} />
        <Route path="optverification/:emailId" element={<OTPVerification />} />
        <Route path="resetpassword/:emailId" element={<ResetPassword />} />
        <Route path="activeleaque" element={<ActiveLeaque />} />
        <Route path="upcomingleaque" element={<UpcomingLeaque />} />
        <Route path="pastleaque" element={<PastLeaque />} />
        <Route path="upcomingteamcart" element={<UpcomingTeamCart />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
