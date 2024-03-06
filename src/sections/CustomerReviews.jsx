import {reviews} from "../constants/index.js";
import ReviewCard from "../components/ReviewCard.jsx";

const CustomerReviews = () => {
    return (
        <section className={`max-container`}>
            <h3 className={`font-palanquin text-center text-4xl font-bold`}>What Our <span className={`text-coral-red`}>Customers</span> Say?</h3>
            <p className={`info-text m-auto mt-4 max-w-lg text-center`}>Hear genuine stories from our satisfied customers about their exceptional experience with us</p>
            <div className={`flex flex-wrap justify-evenly mt-24 max-lg:flex-col gap-14`}>
                {reviews.map((review) => (
                    <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} feedback={review.feedback} rating={review.rating} />
                ))}
            </div>
        </section>
    );
};

export default CustomerReviews;