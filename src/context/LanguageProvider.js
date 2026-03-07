import { useState } from "react"
import LanguageContext from "./LanguageContext";

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState("english");

    const selectLanguage = (lang) => {
        setLanguage(lang);
        console.log("Selected language:", lang);
    }

    return (
        <LanguageContext.Provider value={{ language, selectLanguage }}>
            {children}  
        </LanguageContext.Provider>
    );
}

export default LanguageProvider;