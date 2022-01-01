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
        "A web app for built for a nurse college, to display information about v",
    },
    {
      src: Jsn,
      name: "Justice support network",
      keywords: ["all", "website"],
      stacks: ["Reactjs", "Material -ui", "Redux"],
      project_link: "",
      github_link: "",
      description: "",
    },
    {
      src: Samanad,
      name: "Samanad solar",
      keywords: ["all", "website"],
      stacks: ["Reactjs"],
      project_link: "https://samanad-solar.web.app/",
      github_link: "",
      description: "",
    },
    {
      src: Global,
      name: "global investment",
      keywords: ["all", "website"],
      stacks: ["Reactjs"],
      project_link: "https://global-forex-investment-cf594.web.app/",
      github_link: "",
      description: "",
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
      description: "A single page appliction for a bakery business, allows customers of the site to submit request for cakes to the business whatsapp",
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
      description: "A platform for selling cryptocurrency and gift cards to Shawn Exchange. The site allows customers to register an account, choose the goods they want to deal with, and provide transaction proof. Users can also view their previous transactions",
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
      description: "A minimal uber clone, fetches location from google geolocation api and calculates the distance matrix from origin to destination, displays map distance",
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
