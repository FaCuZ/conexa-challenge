"use client";

import styles from "@styles/Background.module.css";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Navigation() {
	const bg = useRef<any>(null);

	const handleMouseMove = (e: any) => {
		const mouseX = e.clientX / (window.innerWidth / 3);
		const mouseY = e.clientY / (window.innerHeight / 3);

		if (bg && bg.current) {
			bg.current.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
		}
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<>
			<div className={styles.bgwrap} ref={bg}>
				<Image
					src="/images/background.jpg"
					alt="Background"
					fill={true}
					quality={100}
				/>
			</div>
			<div className={styles.bgborder}>
				<Image
					src="/images/border.svg"
					alt="Borde"
					width={250}
					height={250}
					priority={false}
				/>
			</div>
			<div className={styles.bgborder_rotate}>
				<Image
					src="/images/border.svg"
					alt="Borde"
					width={250}
					height={250}
					priority={false}
				/>
			</div>
		</>
	);
}
