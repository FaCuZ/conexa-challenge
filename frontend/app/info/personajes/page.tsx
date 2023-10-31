import Resource from "@/app/components/Resource";

import styles from "@styles/Resource.module.css";

export default function PersonajesPage() {
	return (
		<section className={styles.resource}>
			<h1>Listado de Personajes</h1>
			<Resource type="people" icon="person" />
		</section>
	);
}
