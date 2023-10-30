import { Roboto_Mono } from "next/font/google";
import type { Metadata } from "next";
import Image from "next/image";

import "./globals.css";

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
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="icon" type="image/png" href="/favicon.png" />
			</head>
			<body className={font.className}>
				<div className={`bgwrap`}>
					<Image
						src="/background.jpg"
						alt="Background"
						fill={true}
						quality={100}
					/>
				</div>
				<div className={`bgborder`}>
					<Image src="/border.svg" alt="Borde" width={250} height={250} />
				</div>
				<div className={`bgborder_rotate`}>
					<Image src="/border.svg" alt="Borde" width={250} height={250} />
				</div>
				<div>{children}</div>
			</body>
		</html>
	);
}
