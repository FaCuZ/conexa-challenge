import styles from "@styles/Loading.module.css";

export default function Loading() {
	return (
		<div className={styles.loader_wrapper}>
			<span className={styles.loader}></span>
			<span>Estableciendo conexión...</span>
		</div>
	);
}
