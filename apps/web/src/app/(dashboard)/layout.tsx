import NavbarDashboard from "@/components/NavbarDashboard";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <div className="fixed z-40 w-full top-0 left-0">
            <NavbarDashboard/>
        </div>
            {children}
        </ >
    );
}