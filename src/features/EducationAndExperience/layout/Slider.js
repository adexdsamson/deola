/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography } from "../../../common/shared";

const SliderComponent = ({ data }) => {
  return (
    <ul className="overflow-x-auto w-full items-center flex flex-wrap gap-8 snap-x">
      {data.map(({ company, position, content, duration, icon }, i) => (
        <li key={i} className="snap-center">
          <div className="shadow-lg rounded-xl h-52 w-72 max-w-[40vw] md:w-96 p-4 bg-gray-700 relative overflow-hidden">
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
                        variant={'small'}
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
                <Typography capitalize variant={"body2"} className={'text-white/60'}>
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
