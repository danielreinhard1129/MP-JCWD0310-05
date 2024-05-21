import Navbar from "@/components/Navbar";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <div className="relative z-40">
            <Navbar/>
        </div>
            {children}
        </ >
    );
}