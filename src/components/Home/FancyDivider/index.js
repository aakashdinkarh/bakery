import styles from './styles.module.css';

export default function FancyDivider(){
    return (
        <div className={styles.container}>
            <div className={styles.line}></div>
            <div className={styles.circle}></div>
            <div className={styles.line}></div>
        </div>
    )
}
