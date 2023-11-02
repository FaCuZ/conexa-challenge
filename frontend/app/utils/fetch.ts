export default async function fetchData(url: string): Promise<any> {
	try {
		return await fetch(url).then((res) => res.json());
	} catch (error) {
		console.log(error);
	}
}
