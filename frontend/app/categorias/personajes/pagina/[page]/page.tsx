import styles from "@styles/Resource.module.css";
import Resource from "@components/Resource";
import Loading from "@components/Loading";

import { Suspense } from "react";

export default function PersonajesPage({ params }: { params: { page: number } }) {
	return (
		<section className={styles.resource}>
			<Suspense fallback={<Loading />}>
				<h1>Listado de Personajes</h1>
				<Resource category="personajes" icon="person" page={params.page} />
			</Suspense>
		</section>
	);
}
