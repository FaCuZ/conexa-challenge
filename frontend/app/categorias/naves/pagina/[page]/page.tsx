import styles from "@styles/Resource.module.css";
import Resource from "@components/Resource";
import Loading from "@components/Loading";

import { Suspense } from "react";

export default function NavesPage({ params }: { params: { page: number } }) {
	return (
		<section className={styles.resource}>
			<Suspense fallback={<Loading />}>
				<h1>Listado de Naves</h1>
				<Resource icon="starship" category="naves" page={params.page} />
			</Suspense>
		</section>
	);
}
