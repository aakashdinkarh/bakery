import { ReactComponent as CartIcon } from '../../../images/cart-icon.svg';
import { getItem } from '../../../hooks/useGetItem';

import { useContext, useState } from 'react';
import { Context } from '../../../Context';
import styles from './styles.module.css'
import CartList from './CartList';

export default function Cart(){
    const [isCartOpen, setIsCartOpen] = useState(false);

    const { bucket } = useContext(Context)

    const cartList = Object.keys(bucket).map((id) => getItem(id));

    const totalPrice = cartList.reduce((cum, item) => cum + (bucket[item.id] * item.price), 0);

    const handleCheckout = () => {
        const payload = {
            data: cartList.map(({ id, price }) => ({
                id,
                quantity: bucket[id],
                price: price,
                currency: 'INR',
            }))
        }
        console.log(payload);
    }

    return (
        <>
            <div className={styles.container} role='button' tabIndex={0} onClick={() => setIsCartOpen(true)} >
                <CartIcon />
                <div className={styles.text}>Cart</div>
            </div>

            {isCartOpen && (
                <div className={styles.modal}>
                    <div className={styles.modal_content}>
                        <h2>Cart</h2>

                        <p>The following items has been added to your cart</p>

                        {cartList.length > 0 ? (
                            <>
                                <div className={styles.list_container} >
                                    <CartList list={cartList} />

                                    <div className={styles.total_container} >
                                        <p>Total: </p>
                                        <p>₹{totalPrice}</p>
                                    </div>
                                </div>
                                <button className={styles.checkout_button} onClick={handleCheckout}>Checkout</button>
                            </>
                        ) : (
                            <div>
                                <h2>Your Cart is Empty </h2>
                                <p>Please add some item to cart and come back then !!</p>
                            </div>
                        )}


                        <button className={styles.close_btn} onClick={() => setIsCartOpen(false)}>X</button>
                    </div>
              </div>
            )}

        </>
    )
}