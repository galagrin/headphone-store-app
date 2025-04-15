import { useContext } from "react";
import { Context } from "../../store/Context";
import TrashCanIcon from "../../assets/trashcan.svg";
import { Counter } from "../Counter";
import { HeadphoneItem } from "../../data/headphones";
import { formatNumber } from "../../utils/formatNumber";
import styles from "./CartItem.module.scss";

interface CartItemProps {
    item: HeadphoneItem;
    deleteFromCart: (id: number) => void;
}
export const CartItem = ({ item, deleteFromCart }: CartItemProps) => {
    const { id, img, title, price, quantity } = item;
    const { increaseQuantity, decreaseQuantity } = useContext(Context);

    console.log("Price:", price, "Quantity:", quantity);

    return (
        <div className={styles.cartItemWrapper}>
            <img src={TrashCanIcon} alt="корзина" className={styles.trashIcon} onClick={() => deleteFromCart(id)} />
            <div className={styles.productInfo}>
                <img src={img} alt="фото товара" className={styles.productImage} />
                <div className={styles.productDetails}>
                    <div className={styles.productTitle}>{title}</div>
                    <div className={styles.productPrice}>{formatNumber(price)}₽</div>
                </div>
            </div>
            <div className={styles.counterWrapper}>
                <Counter
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    id={id}
                    quantity={quantity}
                />
                <div className={styles.totalPrice}>{formatNumber(price * quantity)}₽</div>
            </div>
        </div>
    );
};
