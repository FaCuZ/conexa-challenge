import Navigation from "./components/Navigation";

import styles from "./styles.module.css";

export default function Home() {
	return (
		<main>
			<div className={styles.content}>
				<div className={styles.home_title}>
					<h1>Conexa Challenge</h1>
					<h2>Star Wars API Explorer</h2>
				</div>
				<Navigation vertical={false} />
			</div>
		</main>
	);
}
