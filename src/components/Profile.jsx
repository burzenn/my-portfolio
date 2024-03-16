import { useContext } from "react";
import LanguageContext from '../hooks/LanguageContext';


export const Profile = () => {

    const { translations } = useContext(LanguageContext);

    return (

        <section className="profil-section grid grid-cols-3 space-y-5 pb-20 border-b border-neutral-900/25 ">
            <div className="col-span-3 text-[48px] text-titlegray  dark:text-darktitlegray font-semibold">
                <h1>{translations.profile}</h1>
            </div>
            <div className="col-span-3 grid grid-cols-3">
                <div className="col-span-1 flex-col space-y-6">
                    <p className="text-purple  dark:text-darkpurple ttext-[30px]">{translations.profile}</p>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="col-span-1 space-y-4 text-[18px] text-titlegray dark:text-darktitlegray font-semibold">
                            <p>{translations.birth}</p>
                            <p>{translations.location}</p>
                            <p>{translations.edu}</p>
                            <p>{translations.role}</p>
                        </div>
                        <div className="col-span-2 space-y-4 text-[18px] text-titlegray dark:text-darktitlegray">
                            <p>28.11.1993</p>
                            <p>İstanbul</p>
                            <p>{translations.eduAns}</p>
                            <p>{translations.roleuAns}</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 flex-row space-y-6">
                    <p className="text-purple  dark:text-darkpurple text-[30px]">{translations.aboutme}</p>
                    <p className="text-gray dark:text-darkgray text-[18px]">{translations.aboutmeinfo} </p>
                    <p className="text-gray dark:text-darkgray text-[18px]">{translations.aboutmeinfo2} </p>
                </div>
            </div>
        </section>
    )
}

export default Profile;