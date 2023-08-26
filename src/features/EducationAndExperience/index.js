/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Typography } from "../../common/shared";
import Carousel from "./layout/Slider";
import { HandIcon, } from "@heroicons/react/solid";
import Fade from "react-reveal/Fade";

const BackgroundExperience = () => {
  const [activeTab, setActtiveTab] = useState("carousel");


  let data = [
    {
      company: "Audapp",
      position: "Frontend developer",
      content:
        "AudApp is Africa’s social audio entertainment platform created to tell African stories and share African experiences.",
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
    },
    {
      company: "Hillcross College",
      position: "Frontend developer",
      content:
        "HillCross College is an institution of higher learning dedicated to human development with the intention to impact positively on community and national development within the global space.",
    },
    {
      company: "Alabian Solutions",
      position: "Frontend",
      content:
        "Alabian is a web solution provision firm based in Lagos with expertise in web development, mobile app development, web hosting, digital marketing and other value added services. ",
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
    },
    {
      company: "Eapay Financial Technology",
      position: "Frontend",
      content:
        "Eapay is a financial application that enable users to send money and receive money through users' phone number and also helps merchant receive payment through QRcode in Nigeria.",
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
    },
    {
      company: "Nupat Technology",
      position: "Frontend",
      content:
        "Ulego (subsidiary of Nupat Technology) is a fintech application that runs on both iOS and Android to provide users with banking experience revolving around day-to-day transactions, interacting with third party services such as airtime and utility services, and P2P.",
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
    },
    {
      company: "Autogon AI",
      position: "Frontend",
      content:
        "Autogon, the leading company in the field of artificial intelligence and machine learning. Our mission is to provide businesses with the most advanced AI-powered solutions that allow them to make data-driven decisions and stay ahead of the competition.",
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
    },
  ];


  return (
    <div className="lg:h-screen md:h-screen h-full lg:overflow-hidden bg-black">
      <div className="text-center pt-20">
        <Typography
          variant="h2"
          color="white"
          className={"font-bold text-secondary"}
          uppercase
        >
          Recent Experience 
        </Typography>
      </div>
      <div className="hidden lg:block">
        <div className="flex items-center justify-center mt-2">
          {/* <Typography
            {...{
              variant: "body1",
              className: `transition ease-in-out mx-1 ${
                activeTab === "carousel" &&
                "border-b-2 p-2 border-green-400 font-bold"
              } cursor-pointer hover:text-green-400 duration-300`,
              color: "white",
              onClick: () => setActtiveTab("carousel"),
            }}
          >
            Carousel
          </Typography> */}
          {/* <Typography
            {...{
              variant: "body1",
              className: `transition ease-in-out mx-1 ${
                activeTab === "sparsed" &&
                "border-b-2 p-2 border-green-400 font-bold"
              } cursor-pointer hover:text-green-400 duration-300`,
              color: "white",
              onClick: () => setActtiveTab("sparsed"),
            }}
          >
            Sparse
          </Typography> */}
        </div>

        <div className="mt-14 px-20">
          <Fade when={activeTab === "carousel"} left>
            {activeTab === "carousel" && <Carousel {...{ data }} />}
          </Fade>
          {/* <Fade when={activeTab === "sparsed"} right>
            {activeTab === "sparsed" && <Sparsed {...{ data }} />}
          </Fade> */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 px-8 lg:hidden md:px-16 pb-10">
        {data.map(({ company, position, content, icon }, i) => (
          <li key={i} className="snap-center">
            <div className="shadow-lg rounded-xl h-52 w-full p-4 bg-primary/30 relative overflow-hidden">
              <a href="#" className="w-full h-full block">
                <div className="flex items-center border-b-2 mb-2 py-2">
                  <div className="h-10 w-10 bg-primary flex items-center justify-center rounded-full">
                    {" "}
                    {icon}{" "}
                  </div>

                  <div className="pl-3">
                    <div>
                      <Typography
                        capitalize
                        className="font-medium"
                        variant={"subheader1"}
                        color={"white"}
                      >
                        {company}
                      </Typography>
                    </div>
                    <div className="flex py-1 items-center">
                      <div className="text-gray-600 text-sm">
                        <Typography
                          capitalize
                          className=""
                          variant={"small"}
                          color={"white"}
                        >
                          {position}
                        </Typography>{" "}
                     
                      </div>
                      {/* <div className="text-gray-700 rounded-full bg-green-200 px-2 py-0.5 text-sm ml-1">
                        {duration}
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="w-full p-1">
                  <Typography
                    capitalize
                    variant={"body2"}
                    className={"text-white/60"}
                  >
                    {content}
                  </Typography>
                </div>
                <div className="w-full h-2 bg-primary rounded-full absolute bottom-2 right-1 left-1">
                  <div className="w-full h-full text-center text-xs text-white bg-primary rounded-full"></div>
                </div>
              </a>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default BackgroundExperience;
