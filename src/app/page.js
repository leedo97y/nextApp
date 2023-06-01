import styles from "./page.module.css";

export default function Home() {
  let name = "doylee";
  return (
    <div className={styles.main}>
      <p className={styles.title}>Fresh App</p>
      <p className={styles.subTitle}>{name}</p>
    </div>
  );
}
