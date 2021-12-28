import { Button, Typography } from "../../common/shared";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const About = () => {
  let LeftData = [
    { title: "First name", value: "adeola" },
    { title: "age", value: "27 years" },
    { title: "freelance", value: "available" },
    { title: "phone", value: "08160622940" },
    { title: "whatsApp", value: "08160622940" },
  ];
  let RightData = [
    { title: "last name", value: "adediran" },
    { title: "nationality", value: "nigeria" },
    { title: "address", value: "ifako gbagada" },
    { title: "email", value: "adexdsamson@gmail.com" },
    { title: "language", value: "yoruba, english" },
  ];
  return (
    <section className="h-full overflow-hidden bg-black scrollbar-hide">
      <div className="text-center mt-20">
        <Typography
          variant="h2"
          color="white"
          className={"font-bold"}
          uppercase
        >
          About <span className="text-green-400">Me</span>
        </Typography>
        {/* <span className="text-7xl left-0 tracking-wide leading-7 right-0 top-1/2 uppercase font-bold -translate-y-1/2 text-slate-50">Resume</span> */}
      </div>
      <div className="grid gap-5 lg:grid-cols-2 grid-cols-1 mt-14 mx-8">
        <div className="lg:p-10 lg:ml-14">
          <Typography
            color={"white"}
            variant={"h3"}
            uppercase={true}
            className={"font-bold mb-5 hidden"}
          >
            Personal <span className="text-green-400"> Infos </span>
          </Typography>
          <Typography
            color={"white"}
            variant={"h4"}
            uppercase={true}
            className={"font-bold mb-5 lg:hidden"}
          >
            Personal <span className="text-green-400"> Infos </span>
          </Typography>
          <div className="flex flex-wrap gap-x-10 lg:gap-1">
            <div>
              {LeftData.map((item) => (
                <div className="lg:flex my-4 items-center">
                  <Typography
                    variant={"small"}
                    className={"text-white/50"}
                    capitalize
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant={"body2"}
                    color={"white"}
                    capitalize
                    className="lg:ml-2 mt-1 lg:mt-0"
                  >
                    {item.value}
                  </Typography>
                </div>
              ))}
            </div>
            <div className="">
              {RightData.map((item) => (
                <div className="lg:flex my-4 items-center">
                  <Typography
                    variant={"small"}
                    className={"text-white/50"}
                    capitalize
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant={"body2"}
                    color={"white"}
                    capitalize
                    className="lg:ml-2 mt-1 lg:mt-0"
                  >
                    {item.value}
                  </Typography>
                </div>
              ))}
            </div>
            <Button
              text="Download CV"
              className={"mt-4"}
              icon={
                <ArrowNarrowRightIcon className="text-white h-5 w-5 animate-pulse" />
              }
            />
          </div>
        </div>
        <div className="py-10 lg:pb-0 flex gap-x-4">
          <div className="h-28 w-40 lg:h-40 lg:w-64 border border-gray-500 p-5 px-8 rounded">
            <Typography
              className={
                "font-bold text-green-400 lining-nums after:content-['+'] after:absolute after:font-semibold after:text-2xl after:ml-1 hidden lg:block"
              }
              variant="h1"
            >
              4
            </Typography>
            <Typography
              className={
                "font-bold text-green-400 lining-nums after:content-['+'] after:absolute after:font-semibold after:text-2xl after:ml-1 lg:hidden"
              }
              variant="h4"
            >
              4
            </Typography>
            <Typography
              className={
                "before:content-[''] before:absolute before:-left-9 before:top-3 before:h-0.5 before:w-5 before:rounded before:bg-green-400 relative text-green-400 w-20 ml-10 mt-3 hidden lg:block"
              }
              variant="body2"
              uppercase
            >
              years of experience
            </Typography>
            <Typography
              className={"relative text-green-400 w-20 mt-1 lg:hidden"}
              variant="body2"
              uppercase
            >
              years of experience
            </Typography>
          </div>
          <div className="h-28 w-40 lg:h-40 lg:w-64 border lg:float-right border-gray-500 lg:mr-20 p-5 px-8 rounded">
            <Typography
              className={
                "font-bold text-green-400 lining-nums after:content-['+'] after:absolute after:font-semibold after:text-2xl after:ml-1 hidden lg:block"
              }
              variant="h1"
            >
              10
            </Typography>
            <Typography
              className={
                "font-bold text-green-400 lining-nums after:content-['+'] after:absolute after:font-semibold after:text-2xl after:ml-1 lg:hidden"
              }
              variant="h4"
            >
              10
            </Typography>
            <Typography
              className={
                "before:content-[''] before:absolute before:-left-9 before:top-3 before:h-0.5 before:w-5 before:rounded before:bg-green-400 relative text-green-400 w-20 ml-10 mt-3 hidden lg:block"
              }
              variant="body2"
              uppercase
            >
              completed project
            </Typography>
            <Typography
              className={"relative text-green-400 w-20 mt-1 lg:hidden"}
              variant="body2"
              uppercase
            >
              completed project
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
