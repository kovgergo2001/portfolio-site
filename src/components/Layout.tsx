import AppNavbar from './Navbar'
import styles from "@/styles/Home.module.css";

export default function Layout({ children }: any) {
  return (
    <>
    <AppNavbar />
    <main className={styles.main}>{children}</main>
    </>
  )
}