import Image from "next/image";
import Link from "next/link";

import styles from "@styles/Paginator.module.css";

export default function Paginator(url: any) {
	const path = "/categorias/" + url.category + "/pagina/";

	const next = url.next?.match(/page=(\d+)/)[1] || "";
	const prev = url.prev?.match(/page=(\d+)/)[1] || "";

	const path_next = next ? path + next : "";
	const path_prev = prev ? path + prev : "";

	return (
		<div className={styles.paginator}>
			<div className={prev ? "" : styles.icon_disable}>
				<Link href={path_prev} className={styles.container}>
					<Image
						src={`/images/arrow.svg`}
						alt={"Pagina anterior"}
						width={20}
						height={20}
						className={styles.icon_prev}
					/>
				</Link>
			</div>
			<span>{url.page}</span>
			<div className={next ? "" : styles.icon_disable}>
				<Link href={path_next} className={styles.container}>
					<Image
						src={`/images/arrow.svg`}
						alt={"Siguiente pagina"}
						width={20}
						height={20}
						className={styles.icon_next}
					/>
				</Link>
			</div>
		</div>
	);
}
