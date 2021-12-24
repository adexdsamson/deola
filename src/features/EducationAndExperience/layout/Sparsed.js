import { Typography } from "../../../common/shared";

/* eslint-disable jsx-a11y/anchor-is-valid */
const SparedComponent = ({ data }) => {
  return (
    <div className="relative">
      <div className="absolute -top-16 left-0">
        <div className="shadow-lg rounded-xl h-52 w-80 p-4 bg-white relative overflow-hidden">
          <a href="#" className="w-full h-full block">
            <div className="flex items-center border-b-2 mb-2 py-2">
            <div className="h-3 w-3 absolute top-2 bg-green-400 rounded-full"></div>
              <div className="h-3 w-3 absolute top-2 right-4 bg-green-400 rounded-full"></div>
              <div className="pl-3">
                <div className="font-medium">{data[0].company}</div>
                <div className="flex py-1 items-center">
                  <div className="text-gray-600 text-sm">
                    {data[0].position} -
                  </div>
                  <div className="text-gray-600 rounded-full bg-green-200 px-2 py-0.5 text-sm ml-1">
                    {data[0].duration}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4">
              <Typography capitalize variant={"body2"} color={"defaultBody"}>
                {data[0].content}
              </Typography>
            </div>
            <div className="w-full h-2 bg-green-200 rounded-full absolute bottom-2 right-1 left-1">
              <div className="w-full h-full text-center text-xs text-white bg-green-400 rounded-full"></div>
            </div>
          </a>
        </div>
      </div>

      <div className="absolute top-60 left-16">
        <div className="shadow-lg rounded-xl h-52 w-80 p-4 bg-white relative overflow-hidden">
          <a href="#" className="w-full h-full block">
            <div className="flex items-center border-b-2 mb-2 py-2">
            <div className="h-3 w-3 absolute top-2 bg-green-400 rounded-full"></div>
              <div className="h-3 w-3 absolute top-2 right-4 bg-green-400 rounded-full"></div>
              <div className="pl-3">
                <div className="font-medium">{data[1].company}</div>
                <div className="flex py-1 items-center">
                  <div className="text-gray-600 text-sm">
                    {data[1].position} -
                  </div>
                  <div className="text-gray-600 rounded-full bg-green-200 px-2 py-0.5 text-sm ml-1">
                    {data[1].duration}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4">
              <Typography capitalize variant={"body2"} color={"defaultBody"}>
                {data[1].content}
              </Typography>
            </div>
            <div className="w-full h-2 bg-green-200 rounded-full absolute bottom-2 right-1 left-1">
              <div className="w-full h-full text-center text-xs text-white bg-green-400 rounded-full"></div>
            </div>
          </a>
        </div>
      </div>

      <div className="absolute -top-10 left-83 shadow-lg shadow-current">
        <div className="shadow-lg rounded-xl h-52 w-80 p-4 bg-white relative overflow-hidden">
          <a href="#" className="w-full h-full block">
            <div className="flex items-center border-b-2 mb-2 py-2">
              <div className="h-3 w-3 absolute top-2 bg-green-400 rounded-full"></div>
              <div className="h-3 w-3 absolute top-2 right-4 bg-green-400 rounded-full"></div>
              <div className="pl-3">
                <div className="font-medium">{data[2].company}</div>
                <div className="flex py-1 items-center">
                  <div className="text-gray-600 text-sm">
                    {data[2].position} -
                  </div>
                  <div className="text-gray-600 rounded-full bg-green-200 px-2 py-0.5 text-sm ml-1">
                    {data[2].duration}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4">
              <Typography capitalize variant={"body2"} color={"defaultBody"}>
                {data[2].content}
              </Typography>
            </div>
            <div className="w-full h-2 bg-green-200 rounded-full absolute bottom-2 right-1 left-1">
              <div className="w-full h-full text-center text-xs text-white bg-green-400 rounded-full"></div>
            </div>
          </a>
        </div>
      </div>

      <div className="absolute top-52 right-[23rem] shadow-lg shadow-current">
        <div className="shadow-lg rounded-xl h-52 w-80 p-4 bg-white relative overflow-hidden">
          <a href="#" className="w-full h-full block">
            <div className="flex items-center border-b-2 mb-2 py-2">
              <div className="h-3 w-3 absolute top-2 bg-green-400 rounded-full"></div>
              <div className="h-3 w-3 absolute top-2 right-4 bg-green-400 rounded-full"></div>
              <div className="pl-3">
                <div className="font-medium">{data[3].company}</div>
                <div className="flex py-1 items-center">
                  <div className="text-gray-600 text-sm">
                    {data[3].position} -
                  </div>
                  <div className="text-gray-600 rounded-full bg-green-200 px-2 py-0.5 text-sm ml-1">
                    {data[3].duration}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4">
              <Typography capitalize variant={"body2"} color={"defaultBody"}>
                {data[3].content}
              </Typography>
            </div>
            <div className="w-full h-2 bg-green-200 rounded-full absolute bottom-2 right-1 left-1">
              <div className="w-full h-full text-center text-xs text-white bg-green-400 rounded-full"></div>
            </div>
          </a>
        </div>
      </div>

      <div className="absolute -top-16 right-0 shadow-lg shadow-current">
        <div className="shadow-lg rounded-xl h-52 w-80 p-4 bg-white relative overflow-hidden">
          <a href="#" className="w-full h-full block">
            <div className="flex items-center border-b-2 mb-2 py-2">
              <div className="h-3 w-3 absolute top-2 bg-green-400 rounded-full"></div>
              <div className="h-3 w-3 absolute top-2 right-4 bg-green-400 rounded-full"></div>
              <div className="pl-3">
                <div className="font-medium">{data[4].company}</div>
                <div className="flex py-1 items-center">
                  <div className="text-gray-600 text-sm">
                    {data[4].position} -
                  </div>
                  <div className="text-gray-600 rounded-full bg-green-200 px-2 py-0.5 text-sm ml-1">
                    {data[4].duration}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4">
              <Typography capitalize variant={"body2"} color={"defaultBody"}>
                {data[4].content}
              </Typography>
            </div>
            <div className="w-full h-2 bg-green-200 rounded-full absolute bottom-2 right-1 left-1">
              <div className="w-full h-full text-center text-xs text-white bg-green-400 rounded-full"></div>
            </div>
          </a>
        </div>
      </div>

      <div className="absolute top-60 right-0 shadow-lg shadow-current">
        <div className="shadow-lg rounded-xl h-52 w-80 p-4 bg-white relative overflow-hidden">
          <a href="#" className="w-full h-full block">
            <div className="flex items-center border-b-2 mb-2 py-2">
              <div className="h-3 w-3 absolute top-2 bg-green-400 rounded-full"></div>
              <div className="h-3 w-3 absolute top-2 right-4 bg-green-400 rounded-full"></div>
              <div className="pl-3">
                <div className="font-medium">{data[5].company}</div>
                <div className="flex py-1 items-center">
                  <div className="text-gray-600 text-sm">
                    {data[5].position} -
                  </div>
                  <div className="text-gray-600 rounded-full bg-green-200 px-2 py-0.5 text-sm ml-1">
                    {data[5].duration}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4">
              <Typography capitalize variant={"body2"} color={"defaultBody"}>
                {data[5].content}
              </Typography>
            </div>
            <div className="w-full h-2 bg-green-200 rounded-full absolute bottom-2 right-1 left-1">
              <div className="w-full h-full text-center text-xs text-white bg-green-400 rounded-full"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SparedComponent;
