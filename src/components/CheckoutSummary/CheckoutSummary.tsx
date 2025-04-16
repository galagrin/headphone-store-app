import { useContext } from "react";
import { Context } from "../../store/Context";
import { formatNumber } from "../../utils/formatNumber";
import styles from "./CheckoutSummary.module.scss";

export const CheckoutSummary = () => {
    const { totalPrice } = useContext(Context);
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>ИТОГО</div>
                <div className={styles.amount}>₽ {formatNumber(totalPrice)}</div>
            </div>

            <button className={styles.button}>Перейти к оформлению</button>
        </div>
    );
};
