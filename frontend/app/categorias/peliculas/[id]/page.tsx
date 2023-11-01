import styles from "@styles/Resource.module.css";
import Loading from "@components/Loading";
import Details from "@components/Details";

import { Suspense } from "react";

export default function PeliculasIdPage({ params }: { params: { id: number } }) {
	return (
		<section className={styles.resource}>
			<Suspense fallback={<Loading />}>
				<h1>Detalle de Pelicula #{params.id}</h1>
				<Details icon="films" category="peliculas" id={params.id} />
			</Suspense>
		</section>
	);
}
