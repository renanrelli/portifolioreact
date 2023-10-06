import Link from "next/link";
import styles from "./index.module.css";

export function ExternalLink(props: any) {
  return (
    <div className={styles.externalLink}>
      <Link href="/">
        {" "}
        {/* Define o destino do link como a página inicial */}
        <a className={styles.externalLink}>{props.title}</a>
      </Link>
    </div>
  );
}
