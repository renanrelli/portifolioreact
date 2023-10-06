import SideBar from "@/components/SideBar";
import { ExternalLink } from "@/components/ExternalLink";
import { Experience } from "@/components/Experience";
import { ProjectImage } from "@/components/ProjectImage";
import { ProjectLink } from "@/components/ProjectLink";
import styles from "./index.module.css";
import data from "../../data.json";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <SideBar />

        <div>
          {/**Criar componente novo */}
          {data.map((project) => {
            return (
              <Link key={project.id} href={`project/${project.id}`}>
                <ProjectImage img={project.imagem} alt={project.titulo} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
