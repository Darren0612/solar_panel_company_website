import { createBrowserRouter } from "react-router";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardLayout from "./components/DashboardLayout";
import HomePage from "./pages/HomePage";
import SubscriptionPage from "./pages/SubscriptionPage";
import MaintenancePage from "./pages/MaintenancePage";
import BillingPage from "./pages/BillingPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import GreenImpactPage from "./pages/GreenImpactPage";
import ProfilePage from "./pages/ProfilePage";
import HelpCenterPage from "./pages/HelpCenterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: WelcomePage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "subscription", Component: SubscriptionPage },
      { path: "maintenance", Component: MaintenancePage },
      { path: "billing", Component: BillingPage },
      { path: "analytics", Component: AnalyticsPage },
      { path: "green-impact", Component: GreenImpactPage },
      { path: "profile", Component: ProfilePage },
      { path: "help", Component: HelpCenterPage },
    ],
  },
]);
