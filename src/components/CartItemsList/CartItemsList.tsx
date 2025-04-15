import { useContext } from "react";
import { Context } from "../../store/Context";
import { CartItem } from "../CartItem";
import styles from "./CartItemsList.module.scss";

export const CartItemsList = () => {
    const { cart, deleteFromCart } = useContext(Context);

    return (
        <div className={styles.cartListWrapper}>
            {cart.map((item) => {
                return <CartItem key={item.id} item={item} deleteFromCart={deleteFromCart} />;
            })}
        </div>
    );
};
