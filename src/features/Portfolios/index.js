import { useState } from "react";
import {
  Hootr,
  UberClone,
  HillCross,
  Audapp,
  Herfession,
  HerfessionWeb
} from "../../assets";
import { Typography } from "../../common/shared";
import { PortfolioImage, PortfolioModel } from "./layouts";

const Portfolios = () => {
  const [selectedKeyword, setSelectedKeyword] = useState("all");
  const [fullDetail, setFullDetail] = useState(null);
  let data = [
    {
      src: Audapp,
      name: "Audapp",
      keywords: ["all", "website"],
      stacks: ["Reactjs", "Redux", "Tailwind-ui"],
      project_link: "http://audapp.com/",
      description:
        "AudApp features a Creator Studio tool and a robust set of features that make it easy to create and promote high-quality audio content for the pleasure and growth of their listening community. ",
    },
    {
      src: HillCross,
      name: "HillCross College",
      keywords: ["all", "website"],
      stacks: ["Reactjs", "Redux", "Tailwind-ui"],
      project_link: "http://online.hillcrosscollege.com/",
      description: "An online technology school",
    },
    {
      src: Hootr,
      name: "Hootr - dating app",
      keywords: ["all", "mobile"],
      stacks: [
        "React Native",
        "Expo",
        "Firebase",
        "Redux",
        "Stripe api",
        "Tailwind css",
      ],
      project_link: "https://expo.dev/@adexd/hootr",
      github_link: "",
      description: "",
    },
    {
      src: UberClone,
      name: "Uber clone app",
      keywords: ["all", "mobile"],
      stacks: ["React Native", "Expo", "Google api"],
      project_link: "https://expo.dev/@adexd/uber_clone",
      github_link: "",
      description:
        "A simple Uber clone that retrieves a position from Google Geolocation API and computes the distance matrix from origin to destination, as well as displaying map distance",
    },
    {
      src: Herfession,
      name: "Herfession",
      keywords: ["all", "mobile"],
      stacks: ["React Native", "Expo", "Firebase"],
      project_link:
        "https://play.google.com/store/apps/details?id=com.thrmedia.herfessionsapp",
      github_link: "",
      description: "Built with expo-audio, firebase ",
    },
    {
      src: HerfessionWeb,
      name: "Herfession expert web app",
      keywords: ["all", "website"],
      stacks: ["ReactJs", "Tailwind", "Firebase", "Redux", "Redux-toolkits"],
      project_link: "https://herfession-expert.firebaseapp.com/",
      github_link: "",
      description: "Built with reactjs firebase redux "
    },
  ];


  let keywords = ["all", "website", "mobile"];

  const filteredPortfolios = data.filter((item) =>
    item.keywords.includes(selectedKeyword)
  );
  
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto bg-black">
      <div className="text-center mt-20">
        <Typography
          variant="h2"
          color="white"
          className={"font-bold"}
          uppercase
        >
          Recent <span className="text-green-400">Portfolios</span>
        </Typography>
      </div>
      <div className="flex items-center justify-center mt-2">
        {keywords.map((item, i) => (
          <Typography
            {...{
              key: i,
              variant: "body1",
              className: `mx-1 ${
                selectedKeyword === item &&
                "border-b-2 p-2 border-green-400 font-bold"
              } cursor-pointer hover:text-green-400`,
              color: "white",
              onClick: () => setSelectedKeyword(item),
              capitalize: true,
            }}
          >
            {item}
          </Typography>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:gap-10 gap-10 mt-14 lg:px-20 px-8 pb-10">
        {filteredPortfolios.map(({ src, name }, key) => (
          <PortfolioImage
            {...{
              src,
              name,
              key,
              onClick: () => {
                let result = data.find((item) => item.name === name);
                setFullDetail(result);
              },
            }}
          />
        ))}
      </div>
      <PortfolioModel
        {...{
          src: fullDetail?.src,
          title: fullDetail?.name,
          open: fullDetail !== null,
          onClose: () => setFullDetail(null),
          stacks: fullDetail?.stacks ?? [],
          project_link: fullDetail?.project_link,
          github_link: fullDetail?.github_link,
          description: fullDetail?.description,
        }}
      />
    </div>
  );
};

export default Portfolios;
