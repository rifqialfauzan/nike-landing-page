import {star} from "../assets/icons/index.js";

const ReviewCard = ({imgURL, customerName, feedback, rating}) => {
    return (
        <div className={`flex flex-col justify-center items-center`}>
            <img src={imgURL} alt={customerName} width={120} height={120} className={`rounded-full object-cover`}/>
            <p className={`mt-6 max-w-sm text-center info-text`}>{feedback}</p>
            <div className={` flex mt-3 justify-center items-center gap-3`}>
                <img src={star} alt="rating" className={`w-[24px] h-[24px] object-contain m-0`}/>
                <p className={`text-xl font-montserrat text-slate-gray`}>({rating})</p>
            </div>
            <h3 className={`mt-2 font-palanquin font-bold text-center text-xl`}>{customerName}</h3>
        </div>
    );
};

export default ReviewCard;