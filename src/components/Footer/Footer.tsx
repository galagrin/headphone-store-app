import { Link } from "react-router-dom";
import { useState } from "react";
import { Logo } from "../../shared/Logo/Logo";
import Telegram from "../../assets/Telegram.svg";
import VK from "../../assets/VK.svg";
import Whatsapp from "../../assets/Whatsapp.svg";
import { LanguageSelector } from "../LanguageSelector";

import styles from "./Footer.module.scss";

export const Footer = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("Рус");

    const handleLanguageChange = (language: string) => {
        if (language !== selectedLanguage) {
            setSelectedLanguage(language);
        }
    };

    return (
        <footer className={styles.footer}>
            <Logo />
            <nav>
                <ul className={styles.links}>
                    <li>Избранное </li>
                    <li>Корзина</li>
                    <li>Контакты</li>
                </ul>
            </nav>
            <div className={styles.additionalLinks}>
                <ul>
                    <li>Условия сервиса</li>
                </ul>
                <ul className={styles.languages}>
                    <LanguageSelector selectedLanguage={selectedLanguage} onLanguageChange={handleLanguageChange} />
                </ul>
            </div>
            <div className={styles.social}>
                <Link to="https://vk.com/" target="_blank">
                    <img src={VK} alt="VK" />
                </Link>
                <Link to="https://web.telegram.org" target="_blank">
                    <img src={Telegram} alt="Telegram" />
                </Link>
                <Link to="https://www.whatsapp.com" target="_blank">
                    <img src={Whatsapp} alt="Whatsapp" />
                </Link>
            </div>
        </footer>
    );
};
