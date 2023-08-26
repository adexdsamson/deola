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
    { link: HOME_ROUTE, icon: <HomeIcon className="group-hover:text-white/80 h-5 w-5 active:text-white/80" /> },
    { link: ABOUT_ROUTE, icon: <UserIcon className="group-hover:text-white/80 h-5 w-5" /> },
    {
      link: SKILLS_ROUTE,
      icon: <BriefcaseIcon className="group-hover:text-white/80 h-5 w-5" />,
    },
    {
      link: BACKGROUND_ROUTE,
      icon: <HandIcon className="group-hover:text-white/80 h-5 w-5" />,
    },
    {
      link: PORTFOLIO_ROUTE,
      icon: <PhotographIcon className="group-hover:text-white/80 h-5 w-5" />,
    },
    {
      link: CONTACT_US_ROUTE,
      icon: <MailIcon className="group-hover:text-white/80 h-5 w-5" />,
    },
    {
      link: BLOG_ROUTE,
      icon: <NewspaperIcon className="group-hover:text-white/80 h-5 w-5" />,
    },
  ];
  return (
    <ul className="">
      {data.map((item, key) => (
        <Link {...{ key }} className="relative" to={item?.link}>
          <div
            className={`h-10 w-10 rounded-full cursor-pointer  ${
              location.pathname === item.link ? "bg-primary animate-pings" : "bg-transparent"
            } absolute lg:top-0 top-0`}
          ></div>
          <div
            className={`h-10 w-10 rounded-full cursor-pointer flex items-center justify-center ${
              location.pathname === item.link ? "bg-primary text-white/80" : "bg-secondary text-primary"
            } relative my-4 mt-2 hover:border-2 hover:border-primary group`}
          >
            {item?.icon}
          </div>
        </Link>
      ))}
    </ul>
  );
};

export default Navbar;
