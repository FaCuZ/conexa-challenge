import Image from "next/image";
import Link from "next/link";

import styles from "@styles/Navigation.module.css";
import links from "@utils/routes";

export default function Navigation() {
	return (
		<nav>
			<ul className={styles.navigation}>
				{links.map(({ label, path, icon }) => (
					<li key={path}>
						<Link className={styles.card} href={path}>
							<Image
								src={`/images/${icon}.svg`}
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
