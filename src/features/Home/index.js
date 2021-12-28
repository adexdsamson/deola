import { Pic } from "../../assets";
import { Button, Typography } from "../../common/shared";
import Avatar from "./layouts/avatar";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { ABOUT_ROUTE } from "../../routes/constant";

const Homepage = () => {
  return (
    <section className="h-screen overflow-hidden">
      <div className="h-full bg-black"></div>
      <div className="h-full bg-green-400 absolute top-0 w-72 z-10 skew-x-6 -left-9 rounded-md hidden lg:block"></div>
      <div className="absolute top-0 mt-20 lg:mt-0 lg:h-full w-full z-50 lg:flex items-center px-8">
        <Avatar src={Pic} />
        <div className="lg:w-[48%] w-full mt-6 lg:mt-0 lg:mx-auto">
          <Typography
            variant="h1"
            className="before:content-[''] before:absolute before:-left-14 before:top-8 before:h-1 before:w-10 before:rounded before:bg-green-400 relative font-bold text-green-400 hidden lg:block"
          >
            I'M ADEOLA ADEDIRAN.
            <span className="block uppercase text-5xl relative -top-[15px] text-white/90">
              web developer
            </span>
          </Typography>
          <Typography
            variant="h4"
            className="relative font-bold text-green-400 lg:hidden text-center"
          >
            I'M ADEOLA ADEDIRAN.
            <span className="block uppercase lg:text-5xl text-2xl relative -top-[3px] text-white/90">
              web developer
            </span>
          </Typography>
          <Typography className="text-white/60 lg:w-11/12 mt-3 leading-8 text-center">
            I'm a Nigerian based web and app designer & front‑end developer focused on
            crafting clean & user‑friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </Typography>

          <Button
            component={Link}
            to={ABOUT_ROUTE}
            text="more about me"
            className={"mt-8 mx-auto"}
            icon={<ArrowNarrowRightIcon className="text-white h-5 w-5 animate-pulse" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
