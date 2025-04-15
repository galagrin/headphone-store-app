import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import styles from "./MainLayout.module.scss";

export const MainLayout = () => {
    return (
        <div className={styles.mainLayout}>
            <Header />

            <div className={styles.mainWrapper}>
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};
