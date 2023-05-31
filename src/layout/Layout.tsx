import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

interface LayoutProps { }

const Layout: React.FC<LayoutProps> = () => {
    return (
        <div>
            <Header />
            <main >
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
