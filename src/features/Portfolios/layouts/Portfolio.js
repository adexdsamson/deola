import { memo } from "react";

function PImage ({ src, name, onClick }){
  return (
    <div
      onClick={onClick}
      className="h-60 w-full rounded-xl border hover:border-primary overflow-hidden relative group"
    >
      <span className="absolute w-0 group-hover:w-full h-full transition-all ease-out duration-700 top-0 left-0 rounded-xl bg-primary bg-opacity-70"></span>
      <span className="absolute top-5 left-0 right-0 bottom-0 text-center transition-all ease-out duration-700 text-white group-hover:block hidden capitalize text-lg">
        {name}
      </span>
      <img className="h-full w-full rounded-xl object-cover" src={src} alt="" />
    </div>
  );
};

export const PortfolioImage = memo(PImage);