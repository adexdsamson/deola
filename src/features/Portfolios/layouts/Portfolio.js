

export const Portfolio = ({ src }) => {
  return (
    <div className="h-52 w-full rounded-xl border hover:border-green-400 overflow-hidden relative group">
      <span className="absolute w-0 group-hover:w-full h-full transition-all ease-out duration-700 top-0 left-0 rounded-xl bg-green-600 rotate-45"></span>
      <span className="absolute top-[45%] left-[45%] text-center transition-all ease-out duration-700 text-white group-hover:block hidden">hello</span>
      <img className="h-full w-full rounded-3xl" src={src} alt="" />
    </div>
  );
}
