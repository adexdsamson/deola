const variantInputMapping = {
  input: "input",
  textarea: "textarea",
};

const Input = ({ variant, className, ...input }) => {
  const Component = variant ? variantInputMapping[variant] : "input";
  return (
    <Component
      {...input}
      className={`w-full p-2 rounded-full px-4 capitalize bg-gray-700 focus:outline-0 focus:border focus:border-green-400 text-white/60 ${className}`}
    />
  );
};

export default Input;
