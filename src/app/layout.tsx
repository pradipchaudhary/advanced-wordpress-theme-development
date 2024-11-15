import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Pradip Chaudhary - Full Stack React Developer",
    description:
        "Crafting seamless and dynamic web applications with React.js, TypeScript, and modern web technologies.",
    keywords: [
        "React Developer",
        "Full Stack Developer",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "UI/UX Design",
        "Tailwind CSS",
    ],
    authors: [{ name: "Pradip Chaudhary", url: "https://your-website.com" }],
    viewport: "width=device-width, initial-scale=1.0",
    openGraph: {
        title: "Pradip Chaudhary - Full Stack React Developer",
        description:
            "High-performance solutions using React.js, TypeScript, and modern web technologies.",
        url: "https://your-website.com",
        images: "/path-to-your-image.jpg",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pradip Chaudhary - Full Stack React Developer",
        description:
            "Crafting intuitive web experiences with React.js and modern web technologies.",
        images: "/path-to-your-image.jpg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 leading-relaxed text-slate-400`}
            >
                {children}
            </body>
        </html>
    );
}
