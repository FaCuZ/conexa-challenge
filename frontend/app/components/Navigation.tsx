import Link from "next/link";
import Image from "next/image";

import styles from "./Navigation.module.css";

const links = [
	//{ label: "Inicio", path: "/", icon: "films" },
	{ label: "Personajes", path: "/info/personajes", icon: "people" },
	{ label: "Peliculas", path: "/info/peliculas", icon: "films" },
	{ label: "Naves", path: "/info/naves", icon: "starships" },
	{ label: "Planetas", path: "/info/planetas", icon: "planets" },
];

export default function Navigation({ vertical }: { vertical: boolean }) {
	const nav_style = vertical ? styles.navigation_column : styles.navigation;
	return (
		<nav>
			<ul className={nav_style}>
				{links.map(({ label, path, icon }) => (
					<li key={path}>
						<Link className={styles.card} href={path}>
							<Image
								src={`/${icon}.svg`}
								alt={label}
								width={70}
								height={70}
								className={styles.icon}
							/>
							{label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
