import Image from "next/image";
import Link from "next/link";

import styles from "@styles/Menuitem.module.css";
import links from "@utils/routes";

export default function Menuitem() {
	return (
		<nav className={styles.menuitems}>
			<ul>
				{links.map(({ label, path, icon }) => (
					<li key={path}>
						<Link href={path} className={styles.container}>
							<Image
								src={`/images/${icon}.svg`}
								alt={label}
								width={35}
								height={35}
								className={styles.icon}
							/>
							<div className={styles.text}>{label}</div>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
