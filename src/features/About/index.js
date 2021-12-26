import { Typography } from "../../common/shared";

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
    <section className="h-screen overflow-hidden bg-black">
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
      <div className="grid gap-5 grid-cols-2 mt-14">
        <div className="p-10 ml-14">
          <Typography
            color={"white"}
            variant={"h3"}
            uppercase={true}
            className={"font-bold mb-5"}
          >
            Personal <span className="text-green-400"> Infos </span>
          </Typography>
          <div className="flex flex-wrap">
            <div>
              {LeftData.map((item) => (
                <div className="flex my-4 items-center">
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
                    className="ml-2"
                  >
                    {item.value}
                  </Typography>
                </div>
              ))}
            </div>
            <div className="ml-20">
              {RightData.map((item) => (
                <div className="flex my-4 items-center">
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
                    className="ml-2"
                  >
                    {item.value}
                  </Typography>
                </div>
              ))}
            </div>

            <div className="h-12 w-48 rounded-full cursor-pointer border flex items-center relative border-green-600 mt-4 hover:bg-green-600 border-r-0">
            <Typography variant='small' uppercase className="text-white/60 ml-9">
              Download CV
            </Typography>
            <div className="h-11 w-11 rounded-full cursor-pointer absolute right-0 top-0.5 bg-green-600"></div>
          </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="h-40 w-64 border border-gray-500 p-5 px-8 rounded">
            <Typography
              className={"font-bold text-green-400 lining-nums after:content-['+'] after:absolute after:font-semibold after:text-2xl after:ml-1"}
              variant="h1"
            >
              4
            </Typography>
            <Typography
              className={
                "before:content-[''] before:absolute before:-left-9 before:top-3 before:h-0.5 before:w-5 before:rounded before:bg-green-400 relative text-green-400 w-20 ml-10 mt-3"
              }
              variant="body2"
              uppercase
            >
              years of experience
            </Typography>
          </div>
          <div className="h-40 w-64 border float-right border-gray-500 mr-20 p-5 px-8 rounded">
            <Typography
              className={"font-bold text-green-400 lining-nums after:content-['+'] after:absolute after:font-semibold after:text-2xl after:ml-1"}
              variant="h1"
            >
              10
            </Typography>
            <Typography
              className={
                "before:content-[''] before:absolute before:-left-9 before:top-3 before:h-0.5 before:w-5 before:rounded before:bg-green-400 relative text-green-400 w-20 ml-10 mt-3"
              }
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
