import { Typography } from "../../../common/shared";

/* eslint-disable jsx-a11y/anchor-is-valid */
const SparedComponent = ({ data }) => {
  return (
    <div className="relative">
      <div className="absolute -top-16 left-0">
        <div className="shadow-lg rounded-xl h-52 w-80 p-4 bg-gray-700 relative overflow-hidden">
          <div href="#" className="w-full h-full block">
            <div className="flex items-center border-b-2 mb-2 py-2">
              <div className="h-3 w-3 absolute top-2 bg-green-400 rounded-full"></div>
              <div className="h-3 w-3 absolute top-2 right-4 bg-green-400 rounded-full"></div>
              <div className="pl-3">
                <div className="">
                  <Typography
                    capitalize
                    className="font-medium"
                    variant={"subheader1"}
                    color={"white"}
                  >
                    {data?.[0]?.company}
                  </Typography>
                </div>
                <div className="flex py-1 items-center">
                  <div className="text-gray-600 text-sm">
                    <Typography
                      capitalize
                      className=""
                      variant={"small"}
                      color={"white"}
                    >
                      {data?.[0]?.position}
                    </Typography>{" "}
                    -
                  </div>
                  <div className="text-gray-600 rounded-full bg-green-200 px-2 py-0.5 text-sm ml-1">
                    {data?.[0]?.duration}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4">
              <Typography
                capitalize
                variant={"body2"}
                className={"text-white/60"}
              >
                {data?.[0]?.content}
              </Typography>
            </div>
            <div className="w-full h-2 bg-green-200 rounded-full absolute bottom-2 right-1 left-1">
              <div className="w-full h-full text-center text-xs text-white bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-60 left-16">
        <div className="shadow-lg rounded-xl h-52 w-80 p-4 bg-gray-700 relative overflow-hidden">
          <div href="#" className="w-full h-full block">
            <div className="flex items-center border-b-2 mb-2 py-2">
              <div className="h-3 w-3 absolute top-2 bg-green-400 rounded-full"></div>
              <div className="h-3 w-3 absolute top-2 right-4 bg-green-400 rounded-full"></div>
              <div className="pl-3">
                <div className="">
                  <Typography
                    capitalize
                    className="font-medium"
                    variant={"subheader1"}
                    color={"white"}
                  >
                    {data?.[1]?.company}
                  </Typography>
                </div>
                <div className="flex py-1 items-center">
                  <div className="text-gray-600 text-sm">
                    <Typography
                      capitalize
                      className=""
                      variant={"small"}
                      color={"white"}
                    >
                      {data?.[1]?.position}
                    </Typography>{" "}
                    -
                  </div>
                  <div className="text-gray-600 rounded-full bg-green-200 px-2 py-0.5 text-sm ml-1">
                    {data?.[1]?.duration}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4">
              <Typography
                capitalize
                variant={"body2"}
                className={"text-white/60"}
              >
                {data?.[1]?.content}
              </Typography>
            </div>
            <div className="w-full h-2 bg-green-200 rounded-full absolute bottom-2 right-1 left-1">
              <div className="w-full h-full text-center text-xs text-white bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-10 left-83 shadow-lg shadow-current">
        <div className="shadow-lg rounded-xl h-52 w-80 p-4 bg-gray-700 relative overflow-hidden">
          <div href="#" className="w-full h-full block">
            <div className="flex items-center border-b-2 mb-2 py-2">
              <div className="h-3 w-3 absolute top-2 bg-green-400 rounded-full"></div>
              <div className="h-3 w-3 absolute top-2 right-4 bg-green-400 rounded-full"></div>
              <div className="pl-3">
                <div className="">
                  <Typography
                    capitalize
                    className="font-medium"
                    variant={"subheader1"}
                    color={"white"}
                  >
                    {data?.[2]?.company}
                  </Typography>
                </div>
                <div className="flex py-1 items-center">
                  <div className="text-gray-600 text-sm">
                    <Typography
                      capitalize
                      className=""
                      variant={"small"}
                      color={"white"}
                    >
                      {data[2].position}
                    </Typography>{" "}
                    -
                  </div>
                  <div className="text-gray-600 rounded-full bg-green-200 px-2 py-0.5 text-sm ml-1">
                    {data?.[2]?.duration}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4">
              <Typography
                capitalize
                variant={"body2"}
                className={"text-white/60"}
              >
                {data?.[2]?.content}
              </Typography>
            </div>
            <div className="w-full h-2 bg-green-200 rounded-full absolute bottom-2 right-1 left-1">
              <div className="w-full h-full text-center text-xs text-white bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-52 right-[23rem] shadow-lg shadow-current">
        <div className="shadow-lg rounded-xl h-52 w-80 p-4 bg-gray-700 relative overflow-hidden">
          <div href="#" className="w-full h-full block">
            <div className="flex items-center border-b-2 mb-2 py-2">
              <div className="h-3 w-3 absolute top-2 bg-green-400 rounded-full"></div>
              <div className="h-3 w-3 absolute top-2 right-4 bg-green-400 rounded-full"></div>
              <div className="pl-3">
                <div className="font-medium">
                  <Typography
                    capitalize
                    className="font-medium"
                    variant={"subheader1"}
                    color={"white"}
                  >
                    {data?.[3]?.company}
                  </Typography>
                </div>
                <div className="flex py-1 items-center">
                  <div className="text-gray-600 text-sm">
                    <Typography
                      capitalize
                      className=""
                      variant={"small"}
                      color={"white"}
                    >
                      {data?.[3]?.position}
                    </Typography>{" "}
                    -
                  </div>
                  <div className="text-gray-600 rounded-full bg-green-200 px-2 py-0.5 text-sm ml-1">
                    {data?.[3]?.duration}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4">
              <Typography
                capitalize
                variant={"body2"}
                className={"text-white/60"}
              >
                {data?.[3]?.content}
              </Typography>
            </div>
            <div className="w-full h-2 bg-green-200 rounded-full absolute bottom-2 right-1 left-1">
              <div className="w-full h-full text-center text-xs text-white bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-16 right-0 shadow-lg shadow-current">
        <div className="shadow-lg rounded-xl h-52 w-80 p-4 bg-gray-700 relative overflow-hidden">
          <div href="#" className="w-full h-full block">
            <div className="flex items-center border-b-2 mb-2 py-2">
              <div className="h-3 w-3 absolute top-2 bg-green-400 rounded-full"></div>
              <div className="h-3 w-3 absolute top-2 right-4 bg-green-400 rounded-full"></div>
              <div className="pl-3">
                <div className="font-medium">
                  <Typography
                    capitalize
                    className="font-medium"
                    variant={"subheader1"}
                    color={"white"}
                  >
                    {data?.[4]?.company}
                  </Typography>
                </div>
                <div className="flex py-1 items-center">
                  <div className="text-gray-600 text-sm">
                    <Typography
                      capitalize
                      className=""
                      variant={"small"}
                      color={"white"}
                    >
                      {data?.[4]?.position}
                    </Typography>{" "}
                    -
                  </div>
                  <div className="text-gray-600 rounded-full bg-green-200 px-2 py-0.5 text-sm ml-1">
                    {data?.[4]?.duration}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4">
              <Typography
                capitalize
                variant={"body2"}
                className={"text-white/60"}
              >
                {data?.[4]?.content}
              </Typography>
            </div>
            <div className="w-full h-2 bg-green-200 rounded-full absolute bottom-2 right-1 left-1">
              <div className="w-full h-full text-center text-xs text-white bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparedComponent;
