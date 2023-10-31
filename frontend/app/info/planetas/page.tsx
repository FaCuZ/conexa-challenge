import Resource from "@/app/components/Resource";

import styles from "@styles/Resource.module.css";

export default function PlanetasPage() {
	return (
		<section className={styles.resource}>
			<h1>Listado de Planetas</h1>
			<Resource type="planets" icon="planets" />
		</section>
	);
}
