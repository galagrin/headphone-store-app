import { useState } from "react";
import styles from "./PaymentModal.module.scss";
import { formatNumber } from "../../utils/formatNumber";

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (formData: PaymentFormData) => void;
    totalPrice: number;
}

export interface PaymentFormData {
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
    cvv: string;
    email: string;
    phone: string;
}

export const PaymentModal = ({ isOpen, onClose, onSubmit, totalPrice }: PaymentModalProps) => {
    const [formData, setFormData] = useState<PaymentFormData>({
        cardNumber: "",
        cardHolder: "",
        expiryDate: "",
        cvv: "",
        email: "",
        phone: "",
    });

    const [errors, setErrors] = useState<Partial<PaymentFormData>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Форматирование номера карты (добавление пробелов после каждых 4 цифр)
        if (name === "cardNumber") {
            const formattedValue = value
                .replace(/\s/g, "")
                .replace(/(\d{4})/g, "$1 ")
                .trim()
                .slice(0, 19);
            setFormData({ ...formData, [name]: formattedValue });
            return;
        }

        // Форматирование даты истечения срока (MM/YY)
        if (name === "expiryDate") {
            const formattedValue = value
                .replace(/\D/g, "")
                .replace(/(\d{2})(\d)/, "$1/$2")
                .slice(0, 5);
            setFormData({ ...formData, [name]: formattedValue });
            return;
        }

        setFormData({ ...formData, [name]: value });
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<PaymentFormData> = {};

        if (!/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(formData.cardNumber)) {
            newErrors.cardNumber = "Введите корректный номер карты";
        }

        if (!formData.cardHolder.trim()) {
            newErrors.cardHolder = "Введите имя держателя карты";
        }

        if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
            newErrors.expiryDate = "Введите дату в формате MM/YY";
        }

        if (!/^\d{3}$/.test(formData.cvv)) {
            newErrors.cvv = "CVV должен содержать 3 цифры";
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            newErrors.email = "Введите корректный email";
        }

        if (!/^\+?\d{10,12}$/.test(formData.phone)) {
            newErrors.phone = "Введите корректный номер телефона";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            onSubmit(formData);
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>Оплата заказа</h2>
                    <button className={styles.closeButton} onClick={onClose}>
                        &times;
                    </button>
                </div>

                <div className={styles.body}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="cardNumber">Номер карты</label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                placeholder="0000 0000 0000 0000"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                maxLength={19}
                            />
                            {errors.cardNumber && <span className={styles.error}>{errors.cardNumber}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="cardHolder">Держатель карты</label>
                            <input
                                type="text"
                                id="cardHolder"
                                name="cardHolder"
                                placeholder="IVAN IVANOV"
                                value={formData.cardHolder}
                                onChange={handleChange}
                            />
                            {errors.cardHolder && <span className={styles.error}>{errors.cardHolder}</span>}
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="expiryDate">Срок действия</label>
                                <input
                                    type="text"
                                    id="expiryDate"
                                    name="expiryDate"
                                    placeholder="MM/YY"
                                    value={formData.expiryDate}
                                    onChange={handleChange}
                                    maxLength={5}
                                />
                                {errors.expiryDate && <span className={styles.error}>{errors.expiryDate}</span>}
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="cvv">CVV</label>
                                <input
                                    type="password"
                                    id="cvv"
                                    name="cvv"
                                    placeholder="***"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    maxLength={3}
                                />
                                {errors.cvv && <span className={styles.error}>{errors.cvv}</span>}
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@mail.ru"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className={styles.error}>{errors.email}</span>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Телефон</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+7 (999) 123-45-67"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                        </div>

                        <div className={styles.totalAmount}>
                            <span>Сумма к оплате:</span>
                            <strong>₽ {formatNumber(totalPrice)}</strong>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Оплатить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
