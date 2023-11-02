import styles from "@styles/Details.module.css";
import { Details } from "@utils/interfaces";
import fetchData from "@utils/fetch";

export default async function Details(params: Details) {
	const base_path = process.env.BACKEND_URL + params.category;
	const detail = await fetchData(base_path + "/" + params.id);

	delete detail.url;

	for (var prop in detail) {
		if (!detail[prop].length) detail[prop] = "-";

		if (Array.isArray(detail[prop])) {
			detail[prop] = detail[prop]
				.map(function (elem: string) {
					return elem.match(/\/(\d+)\/?$/)?.[1];
				})
				.join(", ");
		} else {
			if (detail[prop].startsWith("https://swapi.dev")) {
				detail[prop] = detail[prop].match(/\/(\d+)\/?$/)[1];
			}
		}
	}

	const entries = Object.entries(detail);

	return (
		<div className={styles.card_wrapper}>
			<ul>
				{entries.map((entry: any) => {
					let [prop, value] = entry;
					return (
						<li key={prop}>
							<strong className={styles.text_prop}>{prop}: </strong>
							<span className={styles.text_value}>{value}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
