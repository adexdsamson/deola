/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Typography } from "../../common/shared";
import Carousel from "./layout/Slider";
import Sparsed from "./layout/Sparsed";
import { HandIcon, BookOpenIcon } from "@heroicons/react/solid";

const BackgroundExperience = () => {
  let [activeTab, setActtiveTab] = useState("carousel");
  let data = [
    {
      company: "Oracle Christian Center O2C",
      position: "Sound Engineer",
      content:
        "Coordination of a team of expert sound specialists to ensure that the church has outstanding sound.",
      duration: "2014 - 2018 ",
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
    },
    {
      company: "FIIRO",
      position: "Internship",
      content:
        "Aided in the processing of foodstuffs into granular and preserved states, as well as the development of specialized devices to achieve a desired texture or gastronomic outcome.",
      duration: "6 months",
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
    },
    {
      company: "NIMET",
      position: "Internship",
      content:
        "Aided in reading, calculating, and measuring the current state of the weather, as well as projecting meteorological consequences.",
      duration: "2018 - 2018",
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
    },
    {
      company: "Alabian Solutions",
      position: "Internship",
      content:
        "Aided in the development of a number of companies' client websites, as well as the design of several websites using Figma.",
      duration: "2021 - 2022",
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
    },
    {
      company: "Pottershub network",
      position: "Team lead",
      content: "Aided in the development of a number of companies' client websites with group of developers.",
      duration: "2022 - present",
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
    },
    {
      company: "Funaab",
      position: "Bachelor Degree",
      content: "Attended the Federal University of Agriculture Abeokuta and majored in Physics.",
      duration: "2014 - 2018",
      icon: <BookOpenIcon className="text-white/80 h-5 w-5" />,
    },
    
    // { company: "", position: "", content: "", duration: "" },
  ];
  return (
    <div className="lg:h-screen h-full lg:overflow-hidden bg-black">
      <div className="text-center pt-20">
        <Typography
          variant="h2"
          color="white"
          className={"font-bold"}
          uppercase
        >
          Experience & <span className="text-green-400">Education</span>
        </Typography>
      </div>
      <div className="hidden lg:block">
        <div className="flex items-center justify-center mt-2">
          <Typography
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
          </Typography>
          <Typography
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
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-10 mt-14 px-20">
          {activeTab === "carousel" && <Carousel {...{ data }} />}
          {activeTab === "sparsed" && <Sparsed {...{ data }} />}
        </div>
      </div>
      <div className="grid grid-cols-1 px-8 lg:hidden pb-10">
        {data.map(({ company, position, content, duration, icon }, i) => (
          <li key={i} className="snap-center">
            <div className="shadow-lg rounded-xl h-52 w-full p-4 bg-gray-700 relative overflow-hidden">
              <a href="#" className="w-full h-full block">
                <div className="flex items-center border-b-2 mb-2 py-2">
                  <div className="h-10 w-10 bg-green-400 flex items-center justify-center rounded-full">
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
                        -
                      </div>
                      <div className="text-gray-700 rounded-full bg-green-200 px-2 py-0.5 text-sm ml-1">
                        {duration}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full p-4">
                  <Typography
                    capitalize
                    variant={"body2"}
                    className={"text-white/60"}
                  >
                    {content}
                  </Typography>
                </div>
                <div className="w-full h-2 bg-green-200 rounded-full absolute bottom-2 right-1 left-1">
                  <div className="w-full h-full text-center text-xs text-white bg-green-400 rounded-full"></div>
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
