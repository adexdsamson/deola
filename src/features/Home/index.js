import { Pic } from "../../assets";
import { Button, Typography } from "../../common/shared";
import Avatar from "./layouts/avatar";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const Homepage = () => {
  return (
    <section className="h-screen overflow-hidden">
      <div className="h-full bg-black"></div>
      <div className="h-full bg-green-400 absolute top-0 w-72 z-10 skew-x-6 -left-9 rounded-md"></div>
      <div className="absolute top-0 h-full w-full z-50 flex items-center px-8">
        <Avatar src={Pic} />
        <div className="w-[48%] mx-auto">
          <Typography
            variant="h1"
            // color='white'
            className="before:content-[''] before:absolute before:-left-14 before:top-8 before:h-1 before:w-10 before:rounded before:bg-green-400 relative font-bold text-green-400"
          >
            I'M ADEOLA ADEDIRAN.
            <span className="block uppercase text-5xl relative -top-[15px] text-white/90">
              web developer
            </span>
          </Typography>
          <Typography className="text-white/60 w-11/12 leading-8">
            I'm a Nigerian based web designer & front‑end developer focused on
            crafting clean & user‑friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </Typography>

          <Button
            text="more about me"
            className={"mt-8"}
            icon={<ArrowNarrowRightIcon className="text-white h-5 w-5 animate-pulse" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
