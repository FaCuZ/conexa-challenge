import Menuitem from "../components/Menuitem";

import styles from "@styles/categorias.module.css";

export default function SubLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className={styles.wrapper}>
			<menu>
				<div className={styles.menu_content}>
					<div className={styles.menu_title}>
						<h1>Conexa Challenge</h1>
						<h2>Star Wars API Explorer</h2>
					</div>
					<Menuitem />
				</div>
			</menu>
			<main>{children}</main>
		</div>
	);
}
