import React, { createContext, useState } from 'react';
import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useLocalStorage('language', 'en');
    const [translations, setTranslations] = useLocalStorage('tanslation', {}); // Çevirileri saklamak için
    const [loading, setLoading] = useState(true);

    const changeLanguage = (newLanguage) => {
        setTranslations(newLanguage);
    };

    const getData = async () => {

        try {
            const languageData = await import(`../data/${language}.json`);

            const response = await axios.post('http://regres.in/api/workintech', languageData);

            console.log('api response: ', response.data);
            changeLanguage(response.data);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    };

    return (
        <LanguageContext.Provider value={{ language, translations, changeLanguage, loading }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;