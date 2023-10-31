import styles from "@styles/Resource.module.css";
import Image from "next/image";
import Link from "next/link";

interface Element {
	url: string;
	name: string;
	title: string;
	gender: string;
}

interface Resource {
	type: string;
	icon: string;
}

const fetchResource = (type: string) => {
	try {
		return fetch("http://127.0.0.1:8080/api/" + type).then((res) => res.json());
	} catch (error) {
		console.log(error);
	}
};

export default async function Resource({ type, icon }: Resource) {
	const resource = await fetchResource(type);

	const elements = resource.results;

	return (
		<ul className={styles.card_section}>
			{elements.map(({ title, name, url }: Element) => (
				<li key={url}>
					<Link className={styles.card} href={"/"}>
						<Image
							src={`/images/${icon}.svg`}
							alt={name ? name : title}
							width={70}
							height={70}
							className={styles.icon}
						/>
						{name ? name : title}
					</Link>
				</li>
			))}
			{resource.previous !== null ? (
				<li>
					<Link className={styles.card} href={"/"}>
						<Image
							src={`/images/next.svg`}
							alt={"Siguiente"}
							width={30}
							height={70}
							className={styles.icon_prev}
						/>
						Anterior
					</Link>
				</li>
			) : null}
			{resource.next !== null ? (
				<li>
					<Link className={styles.card} href={"/"}>
						<Image
							src={`/images/next.svg`}
							alt={"Siguiente"}
							width={30}
							height={70}
							className={styles.icon}
						/>
						Siguiente
					</Link>
				</li>
			) : null}
		</ul>
	);
}
