import { Pic } from "../../assets";
import { Button, Typography } from "../../common/shared";
import Avatar from "./layouts/avatar";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { ABOUT_ROUTE } from "../../routes/constant";

const Homepage = () => {
  return (
    <section className="md:h-screen pb-10 md:flex md:flex-col md:items-center md:justify-center md:pb-0 lg:overflow-hidden bg-black">
      <div className="h-full bg-black hidden lg:block"></div>
      <div className="h-full bg-primary absolute top-0 w-72 z-10 skew-x-6 -left-9 rounded-md hidden lg:block"></div>

      <div className="lg:absolute top-0 pt-10 md:pt-10 lg:pt-0 h-full w-full z-10 md:flex md:flex-col md:justify-center lg:justify-start lg:flex-row items-center px-8">
        {/* <Slide top> */}
        <Avatar src={Pic} />

        {/* </Slide> */}
        <div className="lg:w-[48%] h-fit w-full pt-6 lg:pt-0 lg:mx-auto">
          <Typography
            variant="h1"
            className="before:content-[''] before:absolute before:-left-14 before:top-8 before:h-1 before:w-10 before:rounded before:bg-primary relative font-bold text-primary hidden lg:block"
          >
            I'M ADEOLA ADEDIRAN.
            <span className="block uppercase text-4xl relative -top-[15px] text-secondary">
              frontend developer
            </span>
          </Typography>

          <Typography
            variant="h4"
            className="relative font-bold text-primary lg:hidden text-center"
          >
            I'M ADEOLA ADEDIRAN.
            <span className="block uppercase lg:text-5xl text-xl relative -top-[3px] text-secondary">
              frontend developer
            </span>
          </Typography>

          <Typography className="text-white/60 lg:w-11/12 md:w-3/4 md:mx-auto mt-3 leading-8 text-center lg:text-left lg:mx-0 lg:mt-0">
            As a mobile and web developer with over 4 years of experience, I
            have successfully built and maintained various projects using modern
            technologies such as React, React Native, Redux, and Tailwind CSS.
            My passion lies in creating innovative solutions that provide a
            seamless user experience
            <br />
            {"  "}
            <br />
            Proven leadership skills in managing and mentoring junior
            developers. Excellent communication and teamwork skills, with the
            ability to work effectively with cross-functional teams. I am
            passionate about building excellent software that improves the lives
            of those around me.
          </Typography>

          <Button
            component={Link}
            to={ABOUT_ROUTE}
            text="more about me"
            className={"mt-8 mx-auto lg:mx-0"}
            icon={
              <ArrowNarrowRightIcon className="text-white h-5 w-5 animate-pulse" />
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
