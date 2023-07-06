import styles from './styles.module.css';

export default function Card({ item = {} }) {
    const { url, title, description } = item || {};

    return (
        <div className={styles.card_container}>
            <div className={styles.img_container}>
                <img src={url} alt={title} />
            </div>

            <div className={styles.details}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    );
}
