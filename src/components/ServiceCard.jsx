
const ServiceCard = ({imgURL, label, subtext}) => {
    return (
            <div className={`flex-1 w-full shadow-3xl px-10 py-16 rounded-3xl sm:w-[350px] sm:min-w-[350px]`}>
                <div className={`flex justify-center items-center rounded-full bg-coral-red w-11 h-11`}>
                    <img src={imgURL} alt={label}/>
                </div>
                <h3 className={`mt-5 font-palanquin text-3xl leading-normal font-bold`}>{label}</h3>
                <p className={`mt-3 font-montserrat text-slate-gray text-lg leading-normal break-words`}>{subtext}</p>
            </div>
    );
};

export default ServiceCard;