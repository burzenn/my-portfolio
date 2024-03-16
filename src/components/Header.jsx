
import logo from "/image.png"
import useLocalStorage from '../hooks/useLocalStorage';
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import LanguageContext from '../hooks/LanguageContext';


export const Header = () => {

    const [darkMode, setDarkMode] = useLocalStorage("theme", false);
    const element = document.documentElement

    const { translations, changeLanguage, language } = useContext(LanguageContext);

    const handleLanguageChange = () => {
        const newLanguage = language === 'en' ? 'tr' : 'en';
        changeLanguage(newLanguage);
    };




    useEffect(() => {
        switch (darkMode) {
            case false:
                element.classList.add("dark");
                localStorage.setItem("theme", true)
                break;
            case true:
                element.classList.remove("dark");
                localStorage.setItem("theme", false)
                break;
            default:
                localStorage.setItem("theme")
                break;
        }
    }, [darkMode]);

    const handleChange = () => {
        setDarkMode(!darkMode);
    };

    return (
        <header>
            <div className="flex justify-end gap-4 mt-8">
                <div className="switch">
                    <input
                        type="checkbox"
                        id="switch"
                        className="sr-only"
                        checked={darkMode}
                        onChange={handleChange}
                    />
                    <label htmlFor="switch" className="switch-label">
                        <span className="switch-inner"></span>
                        <span className="switch-button"></span>
                    </label>
                    <span className="ml-2 text-sm font-medium"></span>
                </div>
                <p className="text-gray dark:text-darkgray text-[15px] font-bold"> {translations.top1}</p>
                <p className="text-gray  dark:text-darkgray text-[15px] font-bold">|</p>
                <button onClick={handleLanguageChange} className="text-gray dark:text-darkgray text-[15px] font-bold "> {translations.top2}</button>

            </div>

            <div className="navbar flex justify-between items-center">
                <div>
                    <img src={logo} className="w-20 h-20" />
                </div>

                <div>
                    <nav className="grid grid-cols-3 gap-5 text-xl">
                        <Link to="/skills" className="text-gray  dark:text-darkgray text-[18px] font-medium">
                            {translations.header1}
                        </Link>
                        <Link to="/projects" className="text-gray  dark:text-darkgray text-[18px] font-medium">
                            {translations.header2}
                        </Link>
                        <Link to="/" className="text-gray  dark:text-darkgray text-[18px] font-medium">
                            {translations.header3}
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;