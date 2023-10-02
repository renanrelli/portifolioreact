import styles from "./index.module.css"

export function Experience(props: any){
    return(

        <div className={styles.card}>
            <div className={styles.title}>
                <h3 className={styles.titleName}>{props.title}</h3>
                <h3 className={styles.year}>{props.year}</h3>
            </div>
            <div className={styles.description}>
                <h3 className={styles.descriptionContent}>{props.description}</h3>
            </div>
        </div>
        ) 
}
