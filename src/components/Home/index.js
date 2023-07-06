import Header from './Header';
import Products from './Products';
import FancyDivider from './FancyDivider';
import Breadcrumb from '../commons/Breadcrumb';

import styles from './styles.module.css'

export default function Home(){
    const breadcurmbItems = {
        Home: '/',
    };

    return (
        <main>
            <Breadcrumb items={breadcurmbItems} />

            <Header />

            <h2 className={styles.products_heading}>Our Products</h2>

            <FancyDivider />

            <Products />
        </main>
    );
}