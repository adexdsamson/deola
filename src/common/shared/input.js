const variantInputMapping = {
  input: "input",
  textarea: "textarea",
};

const Input = ({ variant, className, ...input }) => {
  const Component = variant ? variantInputMapping[variant] : "input";
  return (
    <Component
      {...input}
      className={`w-full p-4 rounded-full px-4 capitalize bg-secondary placeholder:text-primary focus:outline-0 focus:border focus:border-primary text-sm ${className}`}
    />
  );
};

export default Input;
