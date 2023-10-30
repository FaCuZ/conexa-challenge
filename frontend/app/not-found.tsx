import Link from "next/link";

export default function NotFound() {
	return (
		<div>
			<h2>404: Pagina no encontrada</h2>
			<p>No se pudo encontrar la pagina solicitada</p>
			<Link href="/">Volver al inicio</Link>
		</div>
	);
}
