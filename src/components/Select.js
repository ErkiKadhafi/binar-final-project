const Select = ({ className, children, ...props }) => {
    return (
        <select
            name="cars"
            id="cars"
            className={`rounded-2xl border-transparent flex-1 border border-neutral-neutral02 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary-darkblue03 focus:border-transparent ${className}`}
            {...props}
        >
            {children}
        </select>
    );
};

export default Select;
