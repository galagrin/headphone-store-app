import { CartItemsList } from "../../components/CartItemsList";
import { CheckoutSummary } from "../../components/CheckoutSummary";

import styles from "./CartPage.module.scss";

export const CartPage = () => {
    return (
        <>
            <h1>Корзина</h1>
            <div className={styles.cartWrapper}>
                <CartItemsList />
                <CheckoutSummary
                />
            </div>
        </>
    );
};
