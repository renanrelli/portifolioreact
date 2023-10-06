import Link from "next/link";
import styles from "./index.module.css";

export function InternalLink(props: any) {
  return (
    <>
      <Link href={props.href} className={styles.link}>
        <span className={styles.span}>{props.icon}</span>
        {props.title}
      </Link>
    </>
  );
}
