import Link from "next/link";

export default function NotFound() {
	return (
		<div>
			<h2>
				<strong>404</strong> Página no encontrada
			</h2>
			<p>No se pudo encontrar la página solicitada</p>
			<Link href="/">Volver al inicio</Link>
		</div>
	);
}
