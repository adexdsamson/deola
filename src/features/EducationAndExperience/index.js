/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Typography } from "../../common/shared";
// import { BusinessCenter, School } from '@material-ui/icons';

const BackgroundExperience = () => {
  let [activeTab, setActtiveTab] = useState("carousel");
  let data = [
    {
      company: "Oracle Christian Center O2C",
      position: "Sound Engineer",
      content:
        "Coordinate a team of technical sound engineers, to provide an excellent sound to the church",
      duration: "July 2014 - 2018 ",
      // icon: <BusinessCenter />
    },
    {
      company: "FIIRO",
      position: "Internship",
      content:
        "Assisted with the processing of foodstuffs into granular and preserved state.",
      duration: "6 months",
      // icon: <BusinessCenter />
    },
    {
      company: "NIMET",
      position: "Internship",
      content:
        "Assisted in reading, calculate and measuring the current state of weather and also predicting the weather outcomes.",
      duration: "05 May 2018 - 05 Oct 2018",
      // icon: <BusinessCenter />
    },
    {
      company: "Alabian Solutions",
      position: "Internship",
      content:
        "Assisted in developing the company's client website and also design some website with figma",
      duration: "1 Sept 2021 - 20 Nov 2022",
      // icon: <BusinessCenter />
    },
    {
      company: "Federal University of Agriculture, Abeokuta",
      position: "Bachelor Degree",
      content: "Studied Physics in Federal University of Agriculture Abeokuta.",
      duration: "December 2014 - June 2018",
      // icon: <School />
    },
    // { company: "", position: "", content: "", duration: "" },
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
          variant={"body1"}
          className={`mx-1 ${
            activeTab === "carousel" && "border-b-2 p-2 border-green-400"
          } cursor-pointer`}
          color={"white"}
          onClick={() => setActtiveTab('carousel')}
        >
          Carousel
        </Typography>
        <Typography
          variant={"body1"}
          className={`mx-1 ${
            activeTab === "sparsed" && "border-b-2 p-2 border-green-400"
          } cursor-pointer`}
          color={"white"}
          onClick={() => setActtiveTab('sparsed')}
        >
          Scattered
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-10 mt-14 px-20"></div>
    </div>
  );
};

export default BackgroundExperience;
