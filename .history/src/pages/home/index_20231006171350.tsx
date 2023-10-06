import { SideBar } from "@/components/SideBar";
import { ProjectLink } from "@/components/ProjectLink";
import styles from "./index.module.css";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.main}>
      <SideBar />
      <ProjectLink />
      <Footer />
    </div>
  );
}
