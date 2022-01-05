import { useState } from "react";
import {
  Communique,
  Cruxcoh,
  Eapay,
  Hootr,
  Jsn,
  Cream,
  Port2,
  Port3,
  Shawn,
  UberClone,
  Samanad,
  Global,
} from "../../assets";
import { Typography } from "../../common/shared";
import { PortfolioImage, PortfolioModel } from "./layouts";

const Portfolios = () => {
  const [selectedKeyword, setSelectedKeyword] = useState("all");
  const [fullDetail, setFullDetail] = useState(null);
  let data = [
    {
      src: Cruxcoh,
      name: "Cruxcohtech College",
      keywords: ["all", "website"],
      stacks: ["Reactjs", "Material-ui", "Redux"],
      project_link: "",
      github_link: "",
      description:
        "A web app for a nursing college that displays information about the college and provides updates such as blogs and important updates. To upload those details, use the platform as an admin platform",
    },
    {
      src: Jsn,
      name: "Justice support network",
      keywords: ["all", "website"],
      stacks: ["Reactjs", "Material -ui", "Redux"],
      project_link: "https://justicesupportnetwork.org",
      github_link: "",
      description: "This is a web application built as a role-oriented management system that allows users to request legal assistance or any other type of assistance and also allows lawyers or volunteers to select from a list of available requests, as well as allowing admin to regulate platform usage. When a request is granted, users and volunteers can message one other, upload photographs to the case, dismiss the case when both parties are satisfied with the outcome, or request the admin's assistance",
    },
    {
      src: Samanad,
      name: "Samanad solar",
      keywords: ["all", "website"],
      stacks: ["Reactjs", "Bootstrap"],
      project_link: "https://samanad-solar.web.app/",
      github_link: "",
      description: "A single web page to display information about Samanad solar business",
    },
    {
      src: Global,
      name: "global investment",
      keywords: ["all", "website"],
      stacks: ["Reactjs"],
      project_link: "https://global-forex-investment-cf594.web.app/",
      github_link: "",
      description: "A single web page ",
    },
    {
      src: Port2,
      name: "Admin web app",
      keywords: ["all", "website"],
      stacks: ["Reactjs"],
      project_link: "",
      github_link: "creamBakeryAdmin",
      description: "An admin part for the cream bakery",
    },
    {
      src: Cream,
      name: "Cream Bakery",
      keywords: ["all", "website"],
      stacks: ["Material-ui", "Firebase", "Redux", "Reactjs"],
      project_link: "https://cream-bakery.firebaseapp.com",
      github_link: "creambakery",
      description: "A single-page application for a bakery business that allows site visitors to submit cake requests to the business's Whatsapp account",
    },
    {
      src: Port3,
      name: "Curly chat",
      keywords: ["all", "website"],
      stacks: ["Nodejs", "Ejs", "Express", "Bootstrap"],
      project_link: "",
      github_link: "curlchat",
      description: "A simple chat application",
    },
    {
      src: Shawn,
      name: "Shawn Exchange",
      keywords: ["all", "website"],
      stacks: ["Reactjs", "Redux", "Tailwind-ui"],
      project_link: "http://www.theshawnexchange.com/",
      github_link: "",
      description: "A marketplace where you can sell cryptocurrency and gift cards to Shawn Exchange. Customers can create an account, select the commodities they want to deal with, and give transaction proof on the website. Users can also see a history of their previous transactions",
    },
    {
      src: Eapay,
      name: "Eapay",
      keywords: ["all", "website"],
      stacks: ["Reactjs", "Material-Ui", "Redux", ],
      project_link: "https://eapay.website",
      github_link: "",
      description: "",
    },
    {
      src: Hootr,
      name: "Hootr - dating app",
      keywords: ["all", "mobile"],
      stacks: ["React Native", "Expo", "Firebase", "Redux", "Stripe api", "Tailwind css" ],
      project_link: "https://expo.dev/@adexd/hootr",
      github_link: "",
      description: "",
    },
    {
      src: Communique,
      name: "Communique - chatting app",
      keywords: ["all", "mobile"],
      stacks: ["React Native", "Expo", "Firebase", "Redux", ],
      project_link: "https://expo.dev/@adexd/communique",
      github_link: "",
      description: "",
    },
    {
      src: UberClone,
      name: "Uber clone app",
      keywords: ["all", "mobile"],
      stacks: ["React Native", "Expo", "Google api", ],
      project_link: "https://expo.dev/@adexd/uber_clone",
      github_link: "",
      description: "A simple Uber clone that retrieves a position from Google Geolocation API and computes the distance matrix from origin to destination, as well as displaying map distance",
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
          My <span className="text-green-400">Portfolios</span>
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
