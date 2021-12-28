import { useState } from "react";
import { Cruxcoh, Jsn, Port1, Port2, Port3 } from "../../assets";
import { Typography } from "../../common/shared";
import { PortfolioImage } from "./layouts/Portfolio";

const Portfolios = () => {
  const [selectedKeyword, setSelectedKeyword] = useState("all");
  let data = [
    { src: Cruxcoh, name: "Cruxcohtech College", keywords: ["all", "website"] },
    { src: Jsn, name: "Justice support network", keywords: ["all", "website"] },
    { src: Port1, name: "global investment", keywords: ["all", "website"] },
    { src: Port2, name: "Admin web app", keywords: ["all", "website"] },
    { src: Port3, name: "Curly chat", keywords: ["all", "website"] },
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
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-14 lg:px-20 px-8 pb-10">
        {filteredPortfolios.map(({ src, name }, key) => (
          <PortfolioImage {...{ src, name, key }} />
        ))}
      </div>
    </div>
  );
};

export default Portfolios;
