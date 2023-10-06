import { SideBar } from "@/components/SideBar";
import { ExternalLink } from "@/components/ExternalLink";
import { Experience } from "@/components/Experience";
import { ProjectImage } from "@/components/ProjectImage";
import { ProjectLink } from "@/components/ProjectLink";
import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <SideBar />
        <ProjectLink />
      </div>
    </>
  );
}
