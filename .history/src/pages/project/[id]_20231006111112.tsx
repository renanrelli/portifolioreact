/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { InternalLink } from "../../components/InternalLink";
import data from "../../data.json";
import styles from "./index.module.css";
import Link from "next/link";

export default function Project() {
  const { query } = useRouter();

  const project = data.find((d) => d.id === Number(query.id));

  return (
    <div className={styles.content}>
      <InternalLink title={"<- Voltar para o início"} href={"../home"} />
      <h1 className={styles.title}>{project?.titulo}</h1>
      <h2 className={styles.language}>{project?.linguagem}</h2>
      <a href={project?.linkGithub} target="_blank">
        <img className={styles.img} src={project?.imagem} alt={project?.alt} />
      </a>
      <h3 className={styles.description}>{project?.descricao}</h3>
    </div>
  );
}
