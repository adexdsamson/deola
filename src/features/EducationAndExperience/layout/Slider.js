/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography } from "../../../common/shared";

const SliderComponent = ({ data }) => {
  return (
    <ul className="overflow-x-auto w-full h-83 items-center flex gap-8 snap-x">
      {data.map(({ company, position, content, duration, icon }, i) => (
        <li key={i} className="snap-center">
          <div className="shadow-lg rounded-xl h-52 w-72 max-w-[40vw] md:w-96 p-4 bg-white relative overflow-hidden">
            <a href="#" className="w-full h-full block">
              <div className="flex items-center border-b-2 mb-2 py-2">
                <div className="h-10 w-10 bg-green-400 rounded-full">
                  {" "}
                  {icon}{" "}
                </div>
                <div className="pl-3">
                  <div className="font-medium">{company}</div>
                  <div className="flex py-1 items-center">
                    <div className="text-gray-600 text-sm">{position} -</div>
                    <div className="text-gray-600 rounded-full bg-green-200 px-2 py-0.5 text-sm ml-1">{duration}</div>
                  </div>
                </div>
              </div>
              <div className="w-full p-4">
                <Typography capitalize variant={"body2"} color={"defaultBody"}>
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
  );
};

export default SliderComponent;
