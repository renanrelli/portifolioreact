import data from "../../data.json";
import Link from "next/link";
import { ProjectImage } from "@/components/ProjectImage";

export function ProjectLink() {
  return (
    <div>
      {data.map((project) => {
        return (
          <Link key={project.id} href={`project/${project.id}`}>
            <ProjectImage img={project.imagem} alt={project.titulo} />
          </Link>
        );
      })}
    </div>
  );
}
