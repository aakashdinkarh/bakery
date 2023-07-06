import AddToCartButton from '../../commons/AddToCartButton'
import styles from './styles.module.css';

export default function DetailItem({ data = {} }) {
	const { id, url, title, short_description, long_description } = data || {};

	return (
		<div className={styles.details}>
			<div className={styles.img_container} >
				<img src={url} alt={title} />
			</div>

			<div className={styles.descriptions} >
				<h2>{title}</h2>

				<p>{short_description}</p>

				<p>{long_description}</p>

				<AddToCartButton id={id} className={styles.customize_cart_button} />
			</div>
		</div>
	)
}