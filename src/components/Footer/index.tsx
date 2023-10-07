import styles from "./index.module.css";
import { ButtonScrollTop } from "../ButtonScrollTop";
import { ExternalLink } from "../ExternalLink";
import { AiOutlineArrowUp } from "react-icons/ai";
import Link from "next/link";

export function Footer() {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.home}>
          <Link className={styles.link} href={"/"}>
            <span className={styles.homeTitle}>Renan Relli</span>
          </Link>
        </div>
        <div className={styles.socials}>
          <ExternalLink
            link="https://www.linkedin.com/in/renan-sbruzzi-relli-1162391b7/"
            title="Linkedin"
          />
          <ExternalLink link="https://github.com/renanrelli/" title="Github" />
        </div>
        <div className={styles.backToTop}>
          <ButtonScrollTop
            icon={<AiOutlineArrowUp width={8} height={12} />}
            title={"Voltar para o topo"}
          />
        </div>
      </div>
    </div>
  );
}
