
import { Link } from "react-router-dom";
import { useContext } from "react";
import LanguageContext from '../hooks/LanguageContext';


export const Footer = () => {

    const { translations } = useContext(LanguageContext);


    return (
        <footer className=" bg-whitish dark:bg-darkwhitish">
            <div className="flex-row container">
                <div>
                    <p className="text-[45px] text-titlegray dark:text-darktitlegray font-semibold">{translations.footer} </p>
                    <p className="text-[45px] text-titlegray dark:text-darktitlegray font-semibold mb-20">{translations.footer2}</p>
                </div>
                <div className="flex justify-between">
                    <Link href="mailto:burzenn@gmail.com" className="text-redish dark:text-darkredish text-[20px] underline">
                        burzenn@gmail.com
                    </Link>
                    <div className="flex gap-3">
                        <button className="text-black text-xl" href="#">{translations.blog}</button>
                        <a href="https://www.github.com/burzenn" target="_blank" className="text-[#00AB6B] text-[18px]">Github</a>
                        <a href="https://www.linkedin.com/in/burcuzengin" target="_blank" className="text-[#0077B5] text-[18px]">Linkedin</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;