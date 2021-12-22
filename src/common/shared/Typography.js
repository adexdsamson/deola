import cn from "classnames";
import PropTypes from "prop-types";

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheader1: "h6",
  subheader2: "h6",
  body1: "p",
  body2: "p",
  small: "span",
};

const fontSizeVariantMapping = {
  h1: "text-5xl",
  h2: "",
  h3: "",
  h4: "text-2xl",
  h5: "text-xl",
  h6: "text-lg font-bold",
  subheader1: "text-base font-bold",
  subheader2: "text-subheader2 font-semibold",
  body1: "text-body1",
  body2: "text-body2",
  small: "text-xs",
};

const colorVariantMapping = {
  defaultHeader: "text-gray-800",
  defaultBody: "text-gray-600",
  white: "text-white",
  danger: "text-red-400",
};

const Typography = ({
  variant,
  className,
  color,
  children,
  capitalize,
  uppercase,
  lowercase,
  ...props
}) => {
  const Component = variant ? variantsMapping[variant] : "p";
  return (
    <Component
      className={`${cn({
        [fontSizeVariantMapping[variant]]: variant,
        [colorVariantMapping[color]]: color,
        capitalize: capitalize,
        uppercase: uppercase,
        lowercase: lowercase,
      })} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

Typography.defaultProps = {
  variant: "body2",
  color: "defaultHeader",
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    "h6",
    "subheader1",
    "subheader2",
    "body1",
    "body2",
    "small",
  ]),
  className: PropTypes.string,
  color: PropTypes.oneOf(["defaultHeader", "defaultBody", "white", "danger", "black"]),
  children: PropTypes.node,
};

export default Typography;
