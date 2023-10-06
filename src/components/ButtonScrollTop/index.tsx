import styles from "./index.module.css";
import { InternalLink } from "../InternalLink";
import { ExternalLink } from "../ExternalLink";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useEffect } from "react";

export function ButtonScrollTop(props: any) {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={styles.body}>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        className={styles.button}
      >
        <span className={styles.span}>{props.icon}</span>
        <span className={styles.title}>{props.title}</span>
      </button>
    </div>
  );
}
