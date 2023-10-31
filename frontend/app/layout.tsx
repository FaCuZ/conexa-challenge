import { Roboto_Mono } from "next/font/google";
import type { Metadata } from "next";

import Background from "./components/Background";
import "@styles/globals.css";

const font = Roboto_Mono({
	weight: ["400", "700"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Star Wars API Explorer",
	description: "Conexa challenge",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
				<link rel="icon" type="image/png" href="/images/favicon.png" />
			</head>
			<body className={font.className}>
				<Background />
				<div>{children}</div>
			</body>
		</html>
	);
}
