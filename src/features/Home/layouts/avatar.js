const Avatar = ({ src }) => {
  return (
    <div className="lg:h-5/6 lg:w-96 h-60 w-60 lg:rounded-3xl rounded-full shadow-lg shadow-current mx-auto">
      <img className="h-full w-full lg:rounded-3xl rounded-full object-cover" src={src} alt="" />
    </div>
  );
};


export default Avatar;
