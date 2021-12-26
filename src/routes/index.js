import { Routes, Route } from "react-router-dom";
import Layout from "../common/Layout";
import {
  Home,
  About,
  Skills,
  BackgroundExperience,
  Portfolio,
  ContactUs
} from "../features";
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  SKILLS_ROUTE,
  BACKGROUND_ROUTE,
  PORTFOLIO_ROUTE,
  CONTACT_US_ROUTE
} from "./constant";

const RouteComponent = () => {
  return (
    <Layout>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={ABOUT_ROUTE} element={<About />} />
        <Route path={SKILLS_ROUTE} element={<Skills />} />
        <Route path={BACKGROUND_ROUTE} element={<BackgroundExperience />} />
        <Route path={PORTFOLIO_ROUTE} element={<Portfolio />} />
        <Route path={CONTACT_US_ROUTE} element={<ContactUs />} />
      </Routes>
    </Layout>
  );
};

export default RouteComponent;
