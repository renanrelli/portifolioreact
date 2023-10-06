import Link from "next/link";
import styles from "./index.module.css";

export function ExternalLink(props: any) {
  return (
    <div className={styles.externalLink}>
      <Link href="/">
        <a className={styles.externalLink}>{props.title}</a>
      </Link>
    </div>
  );
}
