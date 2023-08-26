import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Typography } from "../../common/shared";

const Skills = () => {
  let data = [
    {
      skill: "hlml",
      progress: "85",
      img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
    },
    {
      skill: "css",
      progress: "85",
      img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
    },
    {
      skill: "javascript",
      progress: "85",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      skill: "bootstrap",
      progress: "80",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png",
    },
    {
      skill: "tailwind",
      progress: "80",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    },
    {
      skill: "firebase",
      progress: "80",
      img: "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png",
    },
    {
      skill: "react",
      progress: "90",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7V3AIISY1irgSFCmxWXK5TLNan8gFuOO_AYxbJv2&s",
    },
    {
      skill: "react native",
      progress: "80",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7V3AIISY1irgSFCmxWXK5TLNan8gFuOO_AYxbJv2&s",
    },
    {
      skill: "pwa",
      progress: "80",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/pwa-icon.png",
    },
    {
      skill: "redux",
      progress: "90",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmY2vDZRg0yFcDtTaQDp1GIfKD2hcEGSLWB0Ym41gBQ&s",
    },
    {
      skill: "figma",
      progress: "40",
      img: "https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png",
    },
    {
      skill: "typescript",
      progress: "60",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFC4zJmpDhVeE8mTvtvHnoiQfsCx9gCjgRzTBukGjz&s",
    },
  ];


  return (
    <div className="lg:h-screen md:h-screen h-full overflow-x-hidden bg-black">
      <div className="text-center pt-20">
        <Typography
          variant="h2"
          color="white"
          className={"font-bold text-secondary"}
          uppercase
        >
          My <span className="text-primary">Skills</span>
        </Typography>
      </div>
      <div className="flex flex-wrap items-center justify-center px-10">
        {data.map(({ skill, progress, img }, i) => (
          <div
            key={i}
            className="h-32 w-83 my-3 flex bg-primary/30 rounded-md gap-2 lg:mx-2 px-5 py-5"
          >
            <div className="h-full w-28 rounded-md ">
              <img
                src={img}
                alt={skill}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between w-full">
                <Typography
                  className={""}
                  variant="subheader1"
                  color="white"
                  uppercase
                >
                  {skill}
                </Typography>
                <Typography className={"mt-"} color="white" uppercase>
                  {progress}%
                </Typography>
              </div>
              <Typography variant="body2">Front End</Typography>

              <div className="w-full bg-secondary rounded-lg h-3 mt-7 relative">
                <div
                  style={{ width: `${progress}%` }}
                  className={`h-full absolute bg-primary rounded-lg`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
