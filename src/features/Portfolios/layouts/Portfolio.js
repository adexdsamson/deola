

export const PortfolioImage = ({ src, name }) => {
  return (
    <div className="h-52 w-full rounded-xl border hover:border-green-400 overflow-hidden relative group">
      <span className="absolute w-0 group-hover:w-full h-full transition-all ease-out duration-700 top-0 left-0 rounded-xl bg-green-600 bg-opacity-70 rotate-45"></span>
      <span className="absolute top-[45%] left-[5%] text-center w-0 group-hover:w-full transition-all ease-out duration-700 text-white group-hover:block hidden capitalize">{name}</span>
      <img className="h-full w-full rounded-xl" src={src} alt="" />
    </div>
  );
}
