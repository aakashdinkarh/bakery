import { useContext } from 'react';
import { Context } from '../../../../Context';
import AddToCartButton from '../../AddToCartButton';
import styles from './styles.module.css';

export default function CartList({ list = {} }){
    const { setBucket } = useContext(Context);

    const handleRemoveFromCart = (id) => {
        setBucket((bucket) => {
            const { [id]: currentItem, ...rest } = bucket;
            return rest;
        })
    }

    return <table className={styles.table}>
        <thead>
            <tr>
                <th>Serial No.</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {list.map((item, index) => (
                <tr key={item.id}>
                    <td>{index + 1}.</td>    
                    <td>{item.title}</td>    
                    <td>₹{item.price}</td>    
                    <td><AddToCartButton id={item.id} className={styles.add_to_cart_button} /></td>
                    <td>
                        <button
                            title='Remove Item'
                            className={styles.remove_btn}
                            onClick={() => handleRemoveFromCart(item.id)}
                        >
                            -
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
}