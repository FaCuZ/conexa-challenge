import Image from "next/image";
import Link from "next/link";

import styles from "@styles/Resource.module.css";
import { Element, Resource } from "@utils/interfaces";
import fetchData from "@utils/fetch";
import Paginator from "./Paginator";

export default async function Resource(params: Resource) {
	const details_path = "/categorias/" + params.category + "/";

	const base_path = process.env.BACKEND_URL + params.category;
	const endpoint = base_path + "?page=" + params.page;

	const resource = await fetchData(endpoint);

	/*
	try {
		const base_path = process.env.BACKEND_URL + params.category;
		const endpoint = base_path + "?page=" + params.page;
		resource = await fetch(endpoint).then((res) => res.json());
	} catch (error) {
		console.log(error);
	}
*/

	const results = resource.results.map(function (result: any) {
		var id = result.url.match(/\/(\d+)\/?$/)[1];
		return { ...result, id: id };
	});

	return (
		<>
			<div className={styles.card_wrapper}>
				<ul className={styles.card_section}>
					{results.map(({ title, name, url, id }: Element) => {
						return (
							<li key={url}>
								<Link
									className={styles.card}
									href={details_path + id}
								>
									<Image
										src={`/images/${params.icon}.svg`}
										alt={name ? name : title}
										width={70}
										height={70}
										className={styles.icon}
									/>
									{name ? name : title}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<Paginator
				prev={resource.previous}
				next={resource.next}
				category={params.category}
				page={params.page}
			/>
		</>
	);
}
