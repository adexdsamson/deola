

export const Portfolio = ({ src }) => {
  return (
    <div className="h-52 w-full rounded-xl border hover:border-green-400 hover:bg-green-400">
      <img className="h-full w-full rounded-3xl" src={src} alt="" />
    </div>
  );
}
