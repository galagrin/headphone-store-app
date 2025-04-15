import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./pages/HomePage";
import { CartPage } from "./pages/CartPage";
import { ContextProvider } from "./store/Context";

function App() {
    return (
        <ContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/cart" element={<CartPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    );
}

export default App;
