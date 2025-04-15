import { useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.contentWrapper}>
            <h2 className={styles.title}>Такой страницы не существует</h2>
            <button
                onClick={() => {
                    navigate("/");
                }}
            >
                Назад на главную
            </button>
        </div>
    );
};
