
const Button = ({label, iconUrl, textColor, backgroundColor, borderColor, fullwidth}) => {
    return (
        <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backgroundColor? `${backgroundColor} ${borderColor} ${textColor}` : 'bg-coral-red text-white border-coral-red'} rounded-full ${fullwidth && 'w-full'}`}>
            {label}

            {iconUrl && <img src={iconUrl} alt="arrow right icon" className="rounded-full w-5 h-5"/>}
        </button>
    );
};

export default Button;