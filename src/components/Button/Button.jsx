import PropTypes from "prop-types";

const Button = ({
  children,
  onClick,
  className,
  type = "button",
  disabled,
  style,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"]),
  disabled: PropTypes.bool,
  style: PropTypes.object,
};

Button.defaultProps = {
  type: "button",
  disabled: false,
  onClick: () => {},
  className: "",
  style: {},
};

export default Button;
