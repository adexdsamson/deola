import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../common/Layout";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  Home,
  About,
  Skills,
  BackgroundExperience,
  Portfolio,
  ContactUs,
  Blog,
} from "../features";
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  SKILLS_ROUTE,
  BACKGROUND_ROUTE,
  PORTFOLIO_ROUTE,
  CONTACT_US_ROUTE,
  BLOG_ROUTE,
} from "./constant";

const RouteComponent = () => {
  const location = useLocation();
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={700}>
        <Layout>
          <Routes>
            <Route path={HOME_ROUTE} element={<Home />} />
            <Route path={ABOUT_ROUTE} element={<About />} />
            <Route path={SKILLS_ROUTE} element={<Skills />} />
            <Route path={BACKGROUND_ROUTE} element={<BackgroundExperience />} />
            <Route path={PORTFOLIO_ROUTE} element={<Portfolio />} />
            <Route path={CONTACT_US_ROUTE} element={<ContactUs />} />
            <Route path={BLOG_ROUTE} element={<Blog />} />
          </Routes>
        </Layout>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RouteComponent;
