import { useContext } from "react";
import LanguageContext from '../hooks/LanguageContext';

export const Skills = () => {

    const { translations } = useContext(LanguageContext);


    return (
        <section className='skills-section grid grid-cols-3 space-y-6 pb-20 border-b border-neutral-900/25'>
            <div className='col-span-3 text-[48px] text-titlegray dark:text-darktitlegray font-semibold '>
                <h1>{translations.skills}</h1>
            </div>
            <div className='col-span-3 grid grid-cols-3 gap-7'>
                <div class='flex flex-col col-span-1 space-y-6'>
                    <div className="text-purple dark:text-darkpurple text-[30px]">Java Script</div>
                    <div className="text-gray dark:text-darkgray text-[12px]">{translations.js}</div>
                </div>
                <div class='flex flex-col col-span-1 space-y-6'>
                    <div className="text-purple  dark:text-darkpurple text-[30px]">React.Js</div>
                    <div className="text-gray  dark:text-darkgray text-[12px]">{translations.react}</div>
                </div>
                <div class='flex flex-col col-span-1 space-y-6'>
                    <div className="text-purple dark:text-darkpurple text-[30px]">Node.Js</div>
                    <div className="text-gray  dark:text-darkgray  text-[12px]">{translations.node} </div>
                </div>
            </div>

        </section>
    );
}

export default Skills;