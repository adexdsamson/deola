import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Typography } from "../../common/shared";

const Skills = () => {
  let data = [
    {skill: 'hlml', progress: '80'},
    {skill: 'css', progress: '80'},
    {skill: 'javascript', progress: '85'},
    {skill: 'bootstrap', progress: '80'},
    {skill: 'tailwind', progress: '80'},
    {skill: 'firebase', progress: '80'},
    {skill: 'react', progress: '80'},
    {skill: 'react native', progress: '80'},
    {skill: 'nodejs', progress: '40'},
    {skill: 'pwa', progress: '80'},
    {skill: 'expressjs', progress: '50'},
    {skill: 'graphql', progress: '60'},
  ];
  return (
    <div className="lg:h-screen md:h-screen h-full lg:overflow-hidden bg-black">
      <div className="text-center pt-20">
        <Typography
          variant="h2"
          color="white"
          className={"font-bold"}
          uppercase
        >
          My <span className="text-green-400">Skills</span>
        </Typography>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:mt-10 lg:px-20 md:px-16 px-8 pb-10">
        {data.map(({ skill, progress }, i) => (
          <div key={i} className="h-32 w-32 text-center my-10">
            <CircularProgressbar
              styles={{ text: { fill: "#fff" }, path: { stroke: "#4ade80" } }}
              value={progress}
              text={`${progress}%`}
            />
            <Typography className={"mt-5"} color="white" uppercase>
              {skill}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
