import {headerLogo} from "../assets/images/index.js";
import {navLinks} from "../constants/index.js";
import {hamburger} from "../assets/icons/index.js";

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full ">
            <nav className={"flex justify-between items-center max-container"}>
                <a href="">
                    <img src={headerLogo} alt="logo" width={130} height={29}/>
                </a>
                <ul className={"flex flex-1 justify-center items-center gap-16 max-lg:hidden"}>
                    {navLinks.map( (item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className={"font-montserrat leading-normal text-lg text-slate-gray"}

                            >{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className={"hidden max-lg:block"}>
                    <img src={hamburger} alt="Hamburger" width={25} height={25}/>
                </div>
            </nav>
        </header>
    );
};

export default Nav;