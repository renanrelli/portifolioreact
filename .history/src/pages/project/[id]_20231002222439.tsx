import { useRouter } from 'next/router'
import { ExternalLink } from '@/components/ExternalLink';
import data from "../../data.json";
import styles from "./index.module.css"


export default function Project() {
  const { query } = useRouter()

  const project = data.find(d => d.id === Number(query.id))

  return (
    <div className={styles.content}>
      {/**Criar componente novo com o link do next */}
      <ExternalLink link='https://www.linkedin.com/in/renan-sbruzzi-relli-1162391b7/' title=' <-- Voltar para início' /> 
    </div>
  );
}