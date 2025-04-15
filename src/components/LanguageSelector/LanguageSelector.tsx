// LanguageSelector.tsx
import Language from "../../assets/language.svg";
import styles from "./LanguageSelector.module.scss";

interface LanguageSelectorProps {
    selectedLanguage: string;
    onLanguageChange: (language: string) => void;
}

export const LanguageSelector = ({ selectedLanguage, onLanguageChange }: LanguageSelectorProps) => {
    const languages = ["Каз", "Рус", "Eng"];

    return (
        <div className={styles.languages}>
            <img src={Language} alt="language change" />
            {languages.map((language) => (
                <li
                    key={language}
                    onClick={() => onLanguageChange(language)}
                    className={selectedLanguage === language ? styles.selected : ""}
                >
                    {language}
                </li>
            ))}
        </div>
    );
};
