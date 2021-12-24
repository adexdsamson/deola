import { Typography } from "../../common/shared";

const BackgroundExperience = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <div className="text-center mt-20">
        <Typography
          variant="h2"
          color="white"
          className={"font-bold text-6xl"}
          uppercase
        >
          Experience & <span className="text-green-400">Education</span>
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-10 mt-14 px-20">
        <div class="shadow-lg rounded-xl w-72 md:w-96 p-4 bg-white relative overflow-hidden">
          <a href="#" class="w-full h-full block">
            <div class="flex items-center border-b-2 mb-2 py-2">
              <div class="pl-3">
                <div class="font-medium">Oracle Christian Center O2C</div>
                <div class="text-gray-600 text-sm">Sound Engineer</div>
              </div>
            </div>
            <div class="w-full">
              <Typography
                capitalize
                variant={'body2'}
                color={'defaultBody'}
              >
               Coordinate a team of technical sound engineers, to provide an excellent sound to the church
              </Typography>
            </div>
            <div class="w-full h-2 bg-green-200 rounded-full">
              <div class="w-full h-full text-center text-xs text-white bg-green-400 rounded-full"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BackgroundExperience;
