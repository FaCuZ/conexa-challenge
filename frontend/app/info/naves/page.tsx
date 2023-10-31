import Resource from "@/app/components/Resource";

import styles from "@styles/Resource.module.css";

export default function NavesPage() {
	return (
		<section className={styles.resource}>
			<h1>Listado de Naves</h1>
			<Resource type="starships" icon="starship" />
		</section>
	);
}
