import { createContext, useState, useEffect, ReactNode, FC } from "react";

interface Product {
    id: number;
    img: string;
    title: string;
    price: number;
    rate: string;
    quantity: number;
}
const saveCartToStorage = (items: Product[]) => {
    sessionStorage.setItem("cart", JSON.stringify(items));
};

const getCartFromStorage = () => {
    const cart = sessionStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
};

interface CartContextType {
    cart: Product[];
    addToCart: (item: Product) => void;
    deleteFromCart: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    cartCount: number;
    totalPrice: number;
}
export const Context = createContext<CartContextType>({} as CartContextType);

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);
    const [cartCount, setCartCount] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        setCart(getCartFromStorage());
    }, []);

    useEffect(() => {
        saveCartToStorage(cart);
        setTotalPrice(getTotalPrice());
    }, [cart]);

    const addToCart = (item: Product) => {
        const existedItem = cart.find((cartItem) => cartItem.id === item.id);
        if (!existedItem) {
            const updatedCart = [...cart, item];
            setCart(updatedCart);
            saveCartToStorage(updatedCart);
            setCartCount((prev) => prev + 1);

            console.log(updatedCart);
        } else {
            console.log("Товар уже в корзине");
        }
    };
    const deleteFromCart = (id: number) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        setCartCount((prev) => prev - 1);
    };

    const increaseQuantity = (id: number) => {
        let updatedCart = cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
        setCart(updatedCart);
        console.log(updatedCart);
    };

    const decreaseQuantity = (id: number) => {
        let itemToDecrease = cart.find((item) => item.id === id);

        if (itemToDecrease) {
            if (itemToDecrease.quantity > 1) {
                // Если количество > 1, просто уменьшаем на 1
                let updatedCart = cart.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                );
                setCart(updatedCart);
            } else {
                // Если количество = 1 (станет 0), удаляем товар из корзины
                deleteFromCart(id); // Используем существующую функцию удаления
            }
        }
    };

    const getTotalPrice = () => {
        const totalPrice = cart.reduce((accum, current) => accum + current.price * current.quantity, 0);
        return totalPrice;
    };

    return (
        <Context.Provider
            value={{ cart, addToCart, cartCount, deleteFromCart, increaseQuantity, decreaseQuantity, totalPrice }}
        >
            {children}
        </Context.Provider>
    );
};
