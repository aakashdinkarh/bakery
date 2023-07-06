import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export default function Breadcrumb({ items = {} }) {

	return (
		<div className={styles.container} >
			{Object.entries(items).map(([key, value], ind) =>
				ind !== Object.keys(items).length - 1 ? (
					<span key={ind}>
						<Link to={value} className={styles.link} >
							<span>{key}</span>
						</Link>
						{' '}
						<span>/</span>
					</span>
				) : (
					<span className={styles.inactive} key={ind}>
						{' '}
						{key}
					</span>
				)
			)}
		</div>
	)
}