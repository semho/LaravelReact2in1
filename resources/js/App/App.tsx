import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Layout } from "../components/Layout/Layout";
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";
import { useRoutes } from "../routes";

const App = () => {
    const { token, login, logout, userId } = useAuth();
    const isAuth = !!token;
    const routes = useRoutes(isAuth);
    return (
        <AuthContext.Provider
            value={{
                token,
                login,
                logout,
                userId,
                isAuth,
            }}
        >
            <BrowserRouter>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <Layout>{routes}</Layout>;
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default App;
