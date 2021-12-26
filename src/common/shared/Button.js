import { Typography } from ".";


const Button = ({ variant, className, textClassName, text, icon, iconClassName, ...button }) => {
  return (
    <div
      {...button}
      className={`h-12 w-48 rounded-full cursor-pointer border flex items-center relative border-green-600  hover:bg-green-600 border-r-0 ${className}`}
    >
      <Typography variant="small" uppercase className={`text-white ml-9 ${textClassName}`}>
        {text}
      </Typography>
      <div className={`h-11 w-11 rounded-full cursor-pointer absolute right-0 top-0.5 bg-green-600 ${iconClassName}`}>{icon}</div>
    </div>
  );
};

export default Button;
