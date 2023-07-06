import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import AddToCartButton from '../../../commons/AddToCartButton';

export default function Card({ item = {} }){
    const { id, url, title, price, short_description } = item || {};

    return (
        <div className={styles.card_container}>
            <Link to={`product/${id}`} className={styles.link}>
                <div className={styles.image_container}>
                    <img src={url} alt={title} />
                </div>
                
                <p className={styles.title} >{title}</p>
            </Link>

            <div className={styles.price}>₹{price}</div>

            <i className={styles.description}>{short_description}</i>

            <AddToCartButton id={id} />
        </div>
    )
}