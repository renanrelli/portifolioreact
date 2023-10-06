import Link from "next/link";
import styles from "./index.module.css";

export function BackHomeButton(props: any) {
  return (
    <>
      <Link href={props.href} className={styles.backHome}>
        Voltar para o início
      </Link>
    </>
  );
}
