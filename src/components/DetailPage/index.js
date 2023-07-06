import { useParams } from 'react-router-dom';
import Breadcrumb from "../commons/Breadcrumb";
import useGetItem from '../../hooks/useGetItem';
import DetailItem from './DetailItem';
import Loader from '../commons/Loader';

import styles from './styles.module.css'
import Cart from '../commons/Cart';
import PageNotFound from '../commons/PageNotFound';

export default function DetailPage(){
    const { id = '' } = useParams();

    const { loading, data } = useGetItem({ id });

    const breadcurmbItems = {
        Home: '/',
        [`Product ${id}`]: `product/${id}`,
    };

    return (
        <main>
            <Cart />

            <div className={styles.top_placeholder}>
                <Breadcrumb items={breadcurmbItems} />
            </div>

            <div>
                {loading ? (
                    <div className={styles.loader_container}>
                        <Loader />
                    </div>
                ) : (
                    <>
                        {data ? (
                            <DetailItem data={data} />
                        ) : (
                            <PageNotFound
                                heading={`Product Doesn't Exist`}
                                description={`The link to the product you have navigated to doesn't exist...`}
                            />
                        )}
                    </>
                )}
            </div>
        </main>
    )
}
