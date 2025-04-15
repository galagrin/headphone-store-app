import styles from "./IconWithCounter.module.scss";

type Props = {
    icon: string;
    count: number;
    onClick?: () => void;
};
export const IconWithCounter = ({ icon, count, onClick }: Props) => {
    return (
        <div className={styles.iconContainer} onClick={onClick}>
            <img src={icon} alt="icon" className={styles.icon} />
            {count > 0 && <div className={styles.iconCounter}>{count}</div>}
        </div>
    );
};
