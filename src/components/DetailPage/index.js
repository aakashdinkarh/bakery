import { useParams } from 'react-router-dom';
import Breadcrumb from "../commons/Breadcrumb";
import useGetItem from '../../hooks/useGetItem';
import DetailItem from './DetailItem';
import Loader from '../commons/Loader';

import styles from './styles.module.css'

export default function DetailPage(){
    const { id = '' } = useParams();

    const { loading, data } = useGetItem({ id });

    const breadcurmbItems = {
        Home: '/',
        [`Product ${id}`]: `product/${id}`,
    };

    return (
        <main>
            <div className={styles.top_placeholder}>
                <Breadcrumb items={breadcurmbItems} />
            </div>

            <div>
                {loading ? (
                    <div className={styles.loader_container}>
                        <Loader />
                    </div>
                ) : (
                    <DetailItem data={data} />
                )}
            </div>
        </main>
    )
}
