import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.scss";

export const Logo = () => {
    const navigate = useNavigate();
    return (
        <div
            className={styles.logo}
            onClick={() => {
                navigate("/");
            }}
        >
            QPICK
        </div>
    );
};
