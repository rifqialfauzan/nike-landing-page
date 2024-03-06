import {footerLogo} from "../assets/images/index.js";
import {footerLinks, socialMedia} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className={`max-container`}>
            <div className={`flex justify-between items-start gap-2 flex-wrap max-lg:flex-col`}>
                <div className={`flex flex-col items-start`}>
                    <a href="/">
                        <img src={footerLogo} alt="" width={150} height={46}/>
                    </a>
                    <p className={`text-white-400 mt-6 text-base font-montserrat leading-7 sm:max-w-sm`}>Get shoes ready
                        for the new term at your nearest Nike store. FInd your perfect Size in Store. Get Rewards</p>
                    <div className={`flex items-center gap-5 mt-8 `}>
                        {socialMedia.map((icon) => (
                            <div key={icon.alt}
                                 className={`flex justify-center items-center rounded-full bg-white w-12 h-12`}>
                                <img src={icon.src} alt={icon.alt}/>
                            </div>
                        ))}
                    </div>
                </div>


                <div className={`flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap`}>
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className={`text-white font-montserrat text-2x leading-normal font-medium mb-6`}>{section.title}</h4>
                            <ul>
                                {section.links.map((link) => (
                                <li key={link.name} className={`mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer`}>
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            </div>

            <div className={`flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:text-center`}>
                <p>&#169; Copyright, All rights reserved.</p>
                <p className={`font-montserrat cursor-pointer`}>Terms & Conditions</p>
            </div>

        </footer>
    );
};

export default Footer;