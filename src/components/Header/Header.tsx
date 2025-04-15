import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Like from "../../assets/Like.svg";
import Cart from "../../assets/Cart.svg";
import { IconWithCounter } from "../IconWithCounter";
import { Logo } from "../../shared/Logo/Logo";
import { Context } from "../../store/Context";

import styles from "./Header.module.scss";

export const Header = () => {
    const navigate = useNavigate();
    const [likes, setLikes] = useState(2);

    const { cartCount } = useContext(Context);
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <Logo />
                <div className={styles.iconsContainer}>
                    <IconWithCounter icon={Like} count={likes} />
                    <IconWithCounter icon={Cart} count={cartCount} onClick={() => navigate("/cart")} />
                </div>
            </div>
        </header>
    );
};
