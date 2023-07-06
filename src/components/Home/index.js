import Header from './Header';
import Products from './Products';
import FancyDivider from './FancyDivider';
import Breadcrumb from '../commons/Breadcrumb';

import styles from './styles.module.css'
import Cart from '../commons/Cart';

export default function Home(){
    const breadcurmbItems = {
        Home: '/',
    };

    return (
        <main>
            <Cart />

            <Breadcrumb items={breadcurmbItems} />

            <Header />

            <h2 className={styles.products_heading}>Our Products</h2>

            <FancyDivider />

            <Products />
        </main>
    );
}