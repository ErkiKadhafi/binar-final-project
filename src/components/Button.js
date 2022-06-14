const Button = ({
    className,
    variant = "primary",
    size = "normal",
    children,
    ...props
}) => {
    const sizeClass = size === "normal" ? "py-3.5 px-6" : "py-2 px-6";
    const colorClass =
        variant === "primary"
            ? "bg-primary-darkblue04 hover:bg-primary-darkblue05  text-white focus:ring-primary-darkblue04 focus:ring-offset-primary-darkblue03 focus:ring-2 focus:ring-offset-2"
            : "bg-white hover:bg-gray-300 border border-primary-darkblue04 focus:bg-gray-300";
    const customClass =
        " transition ease-in duration-200 text-center text-sm shadow-md focus:outline-none font-medium rounded-xl";
    return (
        <button
            className={`${sizeClass} ${colorClass} ${customClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;