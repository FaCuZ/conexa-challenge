import Resource from "@/app/components/Resource";

import styles from "@styles/Resource.module.css";

export default function PeliculasPage() {
	return (
		<section className={styles.resource}>
			<h1>Listado de Peliculas</h1>
			<Resource type="films" icon="films" />
		</section>
	);
}
