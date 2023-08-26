import { Typography } from ".";

const Loader = () => {
  return (
    <div className="relative">
      <div
        className={`h-10 w-24 rounded-lg cursor-pointer bg-primary animate-pings absolute top-0`}
      ></div>
      <div className="p-3 px-5 bg-primary/60 rounded-lg ">
        <Typography capitalize className="animate-pulse" color={"white"}>loading...</Typography>
      </div>
    </div>
  );
};

export default Loader;
