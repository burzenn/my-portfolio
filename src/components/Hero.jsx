import foto from '/foto.png';
import line from "/Line.png"
import gitlogo from "/gitlogo.png"
import { useContext } from "react";
import LanguageContext from '../hooks/LanguageContext';



export const Hero = () => {

    const { translations } = useContext(LanguageContext);


    return (

        <section className="hero-section grid grid-cols-4">

            <div className="hero-content flex-col justify-between items-start space-y-14 col-span-2 ">

                <div className="flex items-center gap-2">
                    <img src={line} className="h-1 w-20" />
                    <p className="text-purple dark:text-darkpurple text-[20px]">Burcu Zengin</p>
                </div>

                <div>
                    <h1 className="text-[72px] font-bold  dark:text-darktitlegray">{translations.herotitle1}</h1>
                    <h1 className="text-[72px] font-bold  dark:text-darktitlegray">{translations.herotitle2}r</h1>
                </div>

                <p className="text-gray  dark:text-darkgray text-[18px] "> {translations.heroinfo}</p>

                <div className="hero-links flex ">
                    <a href="https://your-contact-page-url" target="_blank" rel="noopener noreferrer" className="purple-button mr-3">{translations.header3}</a>
                    <a href="https://www.github.com/burzenn" target="_blank" rel="noopener noreferrer" className="purple-button mr-3 flex items-center gap-1"> <img src={gitlogo} className="w-8 h-8" />  Github</a>
                    <a href="https://www.linkedin.com/in/burcuzengin" target="_blank" rel="noopener noreferrer" className="purple-button mr-3 ">Linkedin</a>
                </div>
            </div>

            <div className="col-span-2 flex justify-end overflow-hidden">
                <div className="rounded-3xl mt-16 mb-16 ml-16 h max-h-[parent-height]">
                    <img src={foto} className="max-h-450 max-w-580" />
                </div>

            </div>

        </section>
    );
}

export default Hero;
