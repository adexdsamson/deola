import { Typography } from ".";

const Button = ({
  variant,
  className,
  textClassName,
  text,
  icon,
  iconClassName,
  component,
  ...button
}) => {
  const Component = component ? component : 'div';
  return (
    <Component
      {...button}
      className={`h-12 w-48 rounded-full cursor-pointer border flex items-center relative border-green-600 group border-r-0 overflow-hidden ${className}`}
    >
      <span className="absolute w-0 group-hover:w-full h-full transition-all ease-out duration-700 top-0 left-0 rounded-full bg-green-600 rotate-45"></span>
      <Typography
        variant="small"
        uppercase
        color={'defaultBody'}
        className={`ml-9 relative ${textClassName}`}
      >
        {text}
      </Typography>
      <div
        className={`h-11 w-11 rounded-full cursor-pointer flex items-center justify-center absolute right-0 top-0.5 bg-green-600 hover:drop-shadow-lg ${iconClassName}`}
      >
        {icon}
      </div>
    </Component>
  );
};

export default Button;
