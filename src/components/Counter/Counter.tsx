import styles from "./Counter.module.scss";

interface CounterProps {
    id: number;
    quantity: number;
    decreaseQuantity: (id: number) => void;
    increaseQuantity: (id: number) => void;
}
export const Counter = ({ id, quantity, decreaseQuantity, increaseQuantity }: CounterProps) => {
    return (
        <div className={styles.counter}>
            <button
                className={styles.counterButton}
                aria-label="Уменьшить количество"
                onClick={() => decreaseQuantity(id)}
            >
                <span className={styles.counterIcon}>−</span>
            </button>
            <div className={styles.counterValue}>{quantity} </div>
            <button
                className={styles.counterButton}
                aria-label="Увеличить количество"
                onClick={() => increaseQuantity(id)}
            >
                <span className={styles.counterIcon}>+</span>
            </button>
        </div>
    );
};
