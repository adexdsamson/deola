import { Link } from "react-router-dom";
import {
  ABOUT_ROUTE,
  HOME_ROUTE,
  SKILLS_ROUTE,
  BACKGROUND_ROUTE,
  PORTFOLIO_ROUTE,
  CONTACT_US_ROUTE,
  BLOG_ROUTE,
} from "../../routes/constant";

const Navbar = () => {
  let data = [
    { link: HOME_ROUTE },
    { link: ABOUT_ROUTE },
    { link: SKILLS_ROUTE },
    { link: BACKGROUND_ROUTE },
    { link: PORTFOLIO_ROUTE },
    { link: CONTACT_US_ROUTE },
    { link: BLOG_ROUTE },
  ];
  return (
    <ul className="">
      {data.map((item) => (
        <Link to={item.link}>
          <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-700 relative my-4 mt-2"></div>
        </Link>
      ))}
    </ul>
  );
};

export default Navbar;
