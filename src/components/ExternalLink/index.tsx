import styles from "./index.module.css";

export function ExternalLink(props: any) {
  return (
    <div className={styles.externalLink}>
      <a href={props.link} target="_blank">
        {props.title}
        {props.icon}
      </a>
    </div>
  );
}
