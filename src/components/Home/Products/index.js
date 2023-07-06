import Card from './Card';
import styles from './styles.module.css';

import dummyData from '../../../hooks/dummyData';

export default function Products(){
    return (
        <div className={styles.list_container}>
            {dummyData.map((item, i) => <Card key={i} item={item} />)}
        </div>
    )
}