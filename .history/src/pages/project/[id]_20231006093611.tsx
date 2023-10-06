import { useRouter } from "next/router";
import { BackHomeButton } from "@/components/BackHomeButton";
import data from "../../data.json";
import styles from "./index.module.css";
import Link from "next/link";

export default function Project() {
  const { query } = useRouter();

  const project = data.find((d) => d.id === Number(query.id));

  return (
    <div className={styles.content}>
      <BackHomeButton title={"< Voltar para o início"} href={"../home"} />
    </div>
  );
}
