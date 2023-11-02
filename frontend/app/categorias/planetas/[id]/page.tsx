import styles from "@styles/Resource.module.css";
import Details from "@/app/components/Details";
import Loading from "@/app/components/Loading";

import { Suspense } from "react";

export default function PlanetasIdPage({ params }: { params: { id: number } }) {
	return (
		<section className={styles.resource}>
			<Suspense fallback={<Loading />}>
				<h1>Detalle de Planeta #{params.id}</h1>
				<Details icon="planets" category="planetas" id={params.id} />
			</Suspense>
		</section>
	);
}
