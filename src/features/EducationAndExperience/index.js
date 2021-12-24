/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography } from "../../common/shared";
import { BusinessCenter, School } from '@material-ui/icons';

const BackgroundExperience = () => {
  let data = [
    {
      company: "Oracle Christian Center O2C",
      position: "Sound Engineer",
      content:
        "Coordinate a team of technical sound engineers, to provide an excellent sound to the church",
      duration: "July 2014 - 2018 ",
      icon: <BusinessCenter />
    },
    {
      company: "FIIRO",
      position: "Internship",
      content:
        "Assisted with the processing of foodstuffs into granular and preserved state.",
      duration: "6 months",
      icon: <BusinessCenter />
    },
    {
      company: "NIMET",
      position: "Internship",
      content:
        "Assisted in reading, calculate and measuring the current state of weather and also predicting the weather outcomes.",
      duration: "05 May 2018 - 05 Oct 2018",
      icon: <BusinessCenter />
    },
    {
      company: "Alabian Solutions",
      position: "Internship",
      content:
        "Assisted in developing the company's client website and also design some website with figma",
      duration: "1 Sept 2021 - 20 Nov 2022",
      icon: <BusinessCenter />
    },
    {
      company: "Federal University of Agriculture, Abeokuta",
      position: "Bachelor Degree",
      content: "Studied Physics in Federal University of Agriculture Abeokuta.",
      duration: "December 2014 - June 2018",
      icon: <School />
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
      <div className="grid grid-cols-1 gap-10 mt-14 px-20">
        <ul className="overflow-x-auto w-full h-83 items-center flex gap-8 snap-x">
          {data.map(({ company, position, content, duration, icon }, i) => (
            <li key={i} className="snap-center">
              <div className="shadow-lg rounded-xl h-52 w-72 max-w-[40vw] md:w-96 p-4 bg-white relative overflow-hidden">
                <a href="#" className="w-full h-full block">
                  <div className="flex items-center border-b-2 mb-2 py-2">
                    <div className="h-10 w-10 bg-green-400 rounded-full"> {icon} </div>
                    <div className="pl-3">
                      <div className="font-medium">{company}</div>
                      <div className="flex py-1">
                        <div className="text-gray-600 text-sm">
                          {position} -
                        </div>
                        <div className="text-gray-600 text-sm ml-1">
                          {duration}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-4">
                    <Typography
                      capitalize
                      variant={"body2"}
                      color={"defaultBody"}
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
        </ul>
      </div>
    </div>
  );
};

export default BackgroundExperience;
