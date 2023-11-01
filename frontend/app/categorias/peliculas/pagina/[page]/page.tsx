import styles from "@styles/Resource.module.css";
import Resource from "@components/Resource";
import Loading from "@components/Loading";

import { Suspense } from "react";

export default function PeliculasPage({ params }: { params: { page: number } }) {
	return (
		<section className={styles.resource}>
			<Suspense fallback={<Loading />}>
				<h1>Listado de Peliculas</h1>
				<Resource category="peliculas" icon="films" page={params.page} />
			</Suspense>
		</section>
	);
}
