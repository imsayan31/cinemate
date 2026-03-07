import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

export default function useFormatLanguage(text) {
    const {language} = useContext(LanguageContext);
    
    switch(language) {
        case "english":
            return text === 'Home' ? 'Home' : text === 'Movies' ? 'Movies' : 'Contact';
        case "french":
            return text === 'Home' ? 'Accueil' : text === 'Movies' ? 'Films' : 'Contact';
        case "spanish":
            return text === 'Home' ? 'Inicio' : text === 'Movies' ? 'Películas' : 'Contacto';
        default:
            return text;
    }
}