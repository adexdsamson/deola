const Avatar = ({ src }) => {
  return (
    <div className="h-5/6 w-96 bg-sky-800 rounded-3xl shadow-lg shadow-current">
      <img className="h-full w-full rounded-3xl" src={src} alt="" />
    </div>
  );
};

export default Avatar;
