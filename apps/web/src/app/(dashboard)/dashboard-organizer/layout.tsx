"use client";
import AuthGuard from "@/hoc/AuthGuard";
import Sidebar from "./components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    const ProtectedChildren = AuthGuard(() => (
        <>
            <section className="relative">
                <div className="grid grid-cols-8">
                    <div className="hidden col-span-2 min-w-full h-screen bg-mythemes-yellow/30 sticky top-0 md:flex flex-col gap-4 pt-5 px-5">
                        <Sidebar />
                    </div>
                    <div className="md:col-span-6 col-span-7 min-h-screen p-8 bg-mythemes-whitesmoke">
                        {children}
                    </div>
                </div>
            </section>
        </>
    ));

    return (
        <>
            <ProtectedChildren />
            {/* <section className="relative">
                <div className="grid grid-cols-8">
                    <div className="hidden col-span-2 min-w-full h-screen bg-mythemes-yellow/30 sticky top-0 md:flex flex-col gap-4 pt-5 px-5">
                        <Sidebar />
                    </div>
                    <div className="md:col-span-6 col-span-7 min-h-screen p-8 bg-mythemes-whitesmoke">
                        {children}
                    </div>
                </div>
            </section> */}
        </>
    );
}