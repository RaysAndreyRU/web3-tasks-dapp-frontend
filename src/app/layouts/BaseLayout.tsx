import { Outlet, ScrollRestoration } from 'react-router-dom'
import {Header} from "@src/widgets/Header";
import {Footer} from "@src/widgets/Footer";


export const BaseLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#0b001a] text-slate-200">
            <Header className="mb-6" />
            <main className="flex-1 flex flex-col items-center justify-center px-6">
                <Outlet />
            </main>
            <Footer />
            <ScrollRestoration />
        </div>
    )
}
