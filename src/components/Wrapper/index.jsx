import styles from "./styles.module.css"

export default function Wrapper({ children }) {

  return (
    <main className={styles.wrapper}>{children}</main>
  )
}