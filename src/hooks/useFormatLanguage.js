import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

export default function useFormatLanguage(text) {
    const {language} = useContext(LanguageContext);

    switch(language) {
        case "english":
            return text === 'Home' ? 'Home' : text === 'Movies' ? 'Movies' : text === 'Watchlist' ? 'Watchlist' : 'Contact';
        case "french":
            return text === 'Home' ? 'Accueil' : text === 'Movies' ? 'Films' : text === 'Watchlist' ? 'Liste de suivi' : 'Contact';
        case "spanish":
            return text === 'Home' ? 'Inicio' : text === 'Movies' ? 'Películas' : text === 'Watchlist' ? 'Lista de seguimiento' : 'Contacto';
        default:
            return text;
    }
}