import { Link } from "react-router-dom";

import styles from './styles.module.css';

export default function PageNotFound({
    heading = 'Page Not Found',
    description = "The page you are looking for doesn't exist",
}){

    return <div className={styles.container} >
        <h1>{heading}</h1>
        <p>{description}</p>

        <Link to='/'>Go to Home</Link>
    </div>
}
