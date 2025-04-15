import { useContext } from "react";
import { Card } from "../Card";
import { Context } from "../../store/Context";
import { headphones, HeadphoneItem, wirelessHeadphones } from "../../data/headphones";
import styles from "./CardList.module.scss";

export const CardList = () => {
    const { addToCart } = useContext(Context);
    const handleAddToCart = (item: HeadphoneItem) => {
        addToCart(item);
    };
    return (
        <>
            <h1 className={styles.heading}>Наушники</h1>
            <div className={styles.cardList}>
                {headphones.map((item) => {
                    return <Card card={item} key={item.id} handleAddToCart={handleAddToCart} />;
                })}
            </div>
            <h2>Беспроводные наушники</h2>
            <div className={styles.cardList}>
                {wirelessHeadphones.map((item) => {
                    return <Card card={item} key={item.id} handleAddToCart={handleAddToCart} />;
                })}
            </div>
        </>
    );
};
