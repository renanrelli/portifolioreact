import styles from "./index.module.css";
import { InternalLink } from "../InternalLink";
import { ExternalLink } from "../ExternalLink";

export function Footer() {
  return (
    <>
      <nav className={styles.content}>
        <div className={styles.home}>
          {/* <InternalLink> */}
          <span className={styles.homeTitle}>Renan Relli</span>
          {/* </InternalLink> */}
        </div>
        <div className={styles.socials}>
          <ExternalLink
            link="https://www.linkedin.com/in/renan-sbruzzi-relli-1162391b7/"
            title="Linkedin"
          />
          <ExternalLink link="https://github.com/renanrelli/" title="Github" />
        </div>
        <div className={styles.backToTop}>
          <InternalLink title={"Voltar para o topo"} />
        </div>
      </nav>
    </>
  );
}
