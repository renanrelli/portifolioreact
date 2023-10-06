import Link from "next/link";
import styles from "./index.module.css";

export function BackHomeButton(props: any) {
  return (
    <>
      <Link href={"./index.tsx"} className={styles.backHome}>
        {props.title}
      </Link>
    </>
  );
}
