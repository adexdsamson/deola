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
        "Coordinate a team of technical sound engineers, to provide an excellent sound to the church",
      duration: "2014 - 2018 ",
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
    },
    {
      company: "FIIRO",
      position: "Internship",
      content:
        "Assisted with the processing of foodstuffs into granular and preserved state.",
      duration: "6 months",
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
    },
    {
      company: "NIMET",
      position: "Internship",
      content:
        "Assisted in reading, calculate and measuring the current state of weather and also predicting the weather outcomes.",
      duration: "2018 - 2018",
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
    },
    {
      company: "Alabian Solutions",
      position: "Internship",
      content:
        "Assisted in developing the company's client website and also design some website with figma",
      duration: "2021 - 2022",
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
    },
    {
      company: "Federal University of Agriculture, Abeokuta",
      position: "Bachelor Degree",
      content: "Studied Physics in Federal University of Agriculture Abeokuta.",
      duration: "2014 - 2018",
      icon: <BookOpenIcon className="text-white/80 h-5 w-5" />,
    },
    {
      company: "Pottershub network",
      position: "Team lead",
      content: "",
      duration: "2022 - present",
      icon: <HandIcon className="text-white/80 h-5 w-5" />,
    },
    // { company: "", position: "", content: "", duration: "" },
  ];
  return (
    <div className="h-screen overflow-hidden bg-black">
      <div className="text-center mt-20">
        <Typography
          variant="h2"
          color="white"
          className={"font-bold"}
          uppercase
        >
          Experience & <span className="text-green-400">Education</span>
        </Typography>
      </div>
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
  );
};

export default BackgroundExperience;
