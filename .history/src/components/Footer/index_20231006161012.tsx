import styles from "./index.module.css";
import { InternalLink } from "../InternalLink";

export function Footer() {
  return (
    <>
      <nav className={styles.content}>
        <div className={styles.home}>
          <InternalLink>
            <span className={styles.homeTitle}>Renan Relli</span>
          </InternalLink>
        </div>
      </nav>
    </>
  );
}
