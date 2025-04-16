import { useContext, useState } from "react";
import { Context } from "../../store/Context";
import { formatNumber } from "../../utils/formatNumber";
import { PaymentModal, PaymentFormData } from "../PaymentModal/PaymentModal";
import styles from "./CheckoutSummary.module.scss";

export const CheckoutSummary = () => {
    const { totalPrice } = useContext(Context);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handlePaymentSubmit = (formData: PaymentFormData) => {
        // Здесь будет логика обработки платежа
        console.log("Платежные данные:", formData);
        setIsModalOpen(false);
    };
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>ИТОГО</div>
                <div className={styles.amount}>₽ {formatNumber(totalPrice)}</div>
            </div>

            <button className={styles.button} onClick={handleOpenModal}>
                Перейти к оформлению
            </button>
            <PaymentModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handlePaymentSubmit}
                totalPrice={totalPrice}
            />
        </div>
    );
};
