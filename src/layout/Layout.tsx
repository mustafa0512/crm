import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

interface LayoutProps { }

const Layout: React.FC<LayoutProps> = () => {
    return (
        <div>
            <Header />
            <main className="w-full m-auto mt-[30px] mb-[10px]">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
