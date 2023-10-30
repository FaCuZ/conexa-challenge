import Navigation from "../components/Navigation";

export default function SubLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className={"info_wrapper"}>
			<menu>
				<Navigation vertical={true} />
			</menu>
			<main>{children}</main>
		</div>
	);
}
