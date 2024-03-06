import Button from "../components/Button.jsx";

const Subscribe = () => {
    return (
        <section id="contact-us" className={`flex justify-between items-center max-lg:flex-col gap-10 max-container`}>
            <h3 className={`text-4xl font-palanquin font-bold leading-[68px] lg:max-w-md `}>Sign Up for <span className={`text-coral-red`}>Updates</span> & Newsletter</h3>
            <div className={`w-full lg:max-w[40%] flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full`}>
                <input type="text" placeholder="subscribe@nike.com" className={`input`}/>
                <div className={`flex items-center max-sm:justify-end max-sm:w-full`}>
                    <Button label="Sign Up" fullwidth />
                </div>
            </div>
        </section>
    );
};

export default Subscribe;