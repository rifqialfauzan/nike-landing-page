import {services} from "../constants/index.js";
import ServiceCard from "../components/ServiceCard.jsx";

const Services = () => {
    return (
        <section className={`flex justify-center flex-wrap gap-9 max-container`}>
            {services.map((service) => (
                <ServiceCard key={service.label} {...service}/>
            ))}
        </section>
    );
};

export default Services;