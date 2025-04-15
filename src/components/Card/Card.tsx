import StarIcon from "../../assets/star.svg";
import { HeadphoneItem } from "../../data/headphones";
import styles from "./Card.module.scss";

type CardProps = {
    card: HeadphoneItem;
    handleAddToCart: (item: HeadphoneItem) => void;
};

export const Card = ({ card, handleAddToCart }: CardProps) => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.imageContainer}>
                <img src={card.img} alt="фото товара" />
            </div>
            <div className={styles.cardContent}>
                <div className={styles.discription}>
                    <div className={styles.title}>{card.title}</div>
                    <div className={styles.priceWrapper}>
                        <div className={styles.price}>{card.price} ₽</div>
                        {card.originalPrice ? (
                            <div className={styles.originalPrice}>{card.originalPrice} ₽</div>
                        ) : (
                            <div style={{ visibility: "hidden", height: "20px" }}></div>
                        )}
                    </div>
                </div>
                <div className={styles.actions}>
                    <span className={styles.rating}>
                        <img src={StarIcon} alt="star" className={styles.starIcon} />
                        {card.rate}
                    </span>
                    <button onClick={() => handleAddToCart(card)}>Купить</button>
                </div>
            </div>
        </div>
    );
};
