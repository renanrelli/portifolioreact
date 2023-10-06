import data from "../../data.json";
import Link from "next/link";


export function ProjectLink() {
  return (
    {data.map((project) => {
    return (
    <Link key={project.id} href={`project/${project.id}`}>
      <ProjectImage img={project.imagem} alt={project.titulo} />
    </Link>
    );
    })}
  );
}