// src/layouts/MainLayout.tsx
import Header from "../components/layout/Header";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
}
