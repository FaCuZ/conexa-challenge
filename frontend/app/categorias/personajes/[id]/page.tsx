import styles from "@styles/Resource.module.css";
import Details from "@components/Details";
import Loading from "@components/Loading";

import { Suspense } from "react";

export default function PersojanesIdPage({ params }: { params: { id: number } }) {
	return (
		<section className={styles.resource}>
			<Suspense fallback={<Loading />}>
				<h1>Detalle de Personaje #{params.id}</h1>
				<Details icon="people" category="personajes" id={params.id} />
			</Suspense>
		</section>
	);
}
