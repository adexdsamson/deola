import { Link, useLocation } from "react-router-dom";
import {
  ABOUT_ROUTE,
  HOME_ROUTE,
  SKILLS_ROUTE,
  BACKGROUND_ROUTE,
  PORTFOLIO_ROUTE,
  CONTACT_US_ROUTE,
  BLOG_ROUTE,
} from "../../routes/constant";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  HandIcon,
  MailIcon,
  PhotographIcon,
  NewspaperIcon,
} from "@heroicons/react/solid";

const Navbar = () => {
  const location = useLocation();
  let data = [
    { link: HOME_ROUTE, icon: <HomeIcon className="text-white/80 h-5 w-5" /> },
    { link: ABOUT_ROUTE, icon: <UserIcon className="text-white/80 h-5 w-5" /> },
    {
      link: SKILLS_ROUTE,
      icon: <BriefcaseIcon className="text-white/80 h-5 w-5" />,
    },
    {
      link: BACKGROUND_ROUTE,
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
    },
    {
      link: PORTFOLIO_ROUTE,
      icon: <PhotographIcon className="text-white/80 h-5 w-5" />,
    },
    {
      link: CONTACT_US_ROUTE,
      icon: <MailIcon className="text-white/80 h-5 w-5" />,
    },
    {
      link: BLOG_ROUTE,
      icon: <NewspaperIcon className="text-white/80 h-5 w-5" />,
    },
  ];
  return (
    <ul className="">
      {data.map((item) => (
        <Link className="relative" to={item?.link}>
          <div
            className={`h-10 w-10 rounded-full cursor-pointer  ${
              location.pathname === item.link ? "bg-green-400 animate-ping" : "bg-transparent"
            } absolute mt-1`}
          ></div>
          <div
            className={`h-10 w-10 rounded-full cursor-pointer flex items-center justify-center ${
              location.pathname === item.link ? "bg-green-400" : "bg-gray-700"
            } relative my-4 mt-2 hover:border-2 hover:border-green-400`}
          >
            {item?.icon}
          </div>
        </Link>
      ))}
    </ul>
  );
};

export default Navbar;
