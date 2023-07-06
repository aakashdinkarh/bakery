import { useContext } from "react";
import { Context } from "../../../Context";
import styles from './styles.module.css';

export default function AddToCartButton({ id = '', className = '' }){
    const { bucket, setBucket } = useContext(Context);

    const isItemInCart = id in bucket;

    const handleAddToBucket = () => setBucket((prevBucket) => ({
        ...prevBucket,
        [id]: 1,
    }));

    const increaseCount = () => setBucket((prevBucket) => ({
        ...prevBucket,
        [id]: prevBucket[id] + 1,
    }));

    const decreaseCount = () => setBucket((prevBucket) => {
        if(prevBucket[id] <= 1){
            const { [id]: currentItem, ...restCart } = prevBucket;

            return restCart;
        }

        return {
            ...prevBucket,
            [id]: prevBucket[id] - 1,
        }
    });

    return (
        <div className={`${styles.cart_buttons} ${className}`}>
                {isItemInCart ? (
                    <>
                        <button
                            type='button'
                            onClick={decreaseCount}
                            className={styles.cart_button}
                        >
                            -
                        </button>

                        <span className={styles.cart_count} >{bucket[id]}</span>

                        <button
                            type='button'
                            onClick={increaseCount}
                            className={styles.cart_button}
                        >
                            +
                        </button>
                    </>
                ) : (
                    <button
                        type='button'
                        onClick={handleAddToBucket}
                        className={styles.cart_button}
                    >
                        Add to Cart
                    </button>
                )}
            </div>
    )
}