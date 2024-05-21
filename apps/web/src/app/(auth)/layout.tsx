import Navbar from "@/components/Navbar";
import NavbarAuth from "@/components/NavbarAuth";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <div className="relative z-40">
            <NavbarAuth/>
        </div>
            {children}
        </ >
    );
}