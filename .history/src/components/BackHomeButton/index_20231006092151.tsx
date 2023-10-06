import Link from "next/link";
import styles from "./index.module.css";

export function ExternalLink(props: any) {
  return (
    <>
      <Link href="/">
        <a className={styles.backHome}>{props.title}</a>
      </Link>
    </>
  );
}
