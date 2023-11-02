import styles from "@styles/Resource.module.css";
import Resource from "@/app/components/Resource";
import Loading from "@/app/components/Loading";

import { Suspense } from "react";

export default function PlanetasPage({ params }: { params: { page: number } }) {
	return (
		<section className={styles.resource}>
			<Suspense fallback={<Loading />}>
				<h1>Listado de Planetas</h1>
				<Resource category="planetas" icon="planets" page={params.page} />
			</Suspense>
		</section>
	);
}
