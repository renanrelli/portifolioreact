import styles from "./index.module.css"

export function Profile(){
    return(
        <div className={styles.profile}>
            <img className={styles.avatar} src="https://github.com/renanrelli.png" alt="Foto de Renan Relli" />
            <h1 className={styles.name}>Renan Relli</h1>
        </div>
        ) 
}