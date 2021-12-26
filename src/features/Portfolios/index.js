import { useState } from "react";
import { Typography } from "../../common/shared";
import { Portfolio } from './layouts/Portfolio';

const Portfolios = () => {
  const [selectedKeyword, setSelectedKeyword] = useState("all");
  let data = [{ img: "", title: "", keywords: ["all"] }];
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
              capitalize: true
            }}
          >
            {item}
          </Typography>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-10 mt-14 px-20">
        <Portfolio />
        <Portfolio />
        <Portfolio />
      </div>
    </div>
  );
};

export default Portfolios;
