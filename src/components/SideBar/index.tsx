import { Profile } from "@/components/Profile";
import { ExternalLink } from "@/components/ExternalLink";
import { Experience } from "@/components/Experience";
import styles from "./index.module.css"


export default function SideBar() {
    return (
    <>
        <main className={styles.content}>
            <div className={styles.profile}>
                <Profile />
                <div className={styles.profileTitles}>
                    <h2 className={styles.profileTitle}>Desenvolvedor</h2>
                    <h3 className={styles.profileSubTitle}>Desenvolvedor em formação...</h3>
                </div>
                <div className={styles.socials}>
                    <ExternalLink link='https://www.linkedin.com/in/renan-sbruzzi-relli-1162391b7/' title='Linkedin' />
                    <ExternalLink link='https://instagram.com/' title='Instagram' />
                </div>
            </div>
            <div className={styles.experience}>
                <h2 className={styles.experienceTitle}>Experiência</h2>
                <Experience title='Cargo' year='2021-2023' description='Breve descrição' />
                <Experience title='Cargo' year='2021-xxxx' description='Breve descrição' />
            </div>
                <div className={styles.download}>
                <ExternalLink link='#' title='Baixar currículo' />
            </div>
        </main>
    </>
    )
  }