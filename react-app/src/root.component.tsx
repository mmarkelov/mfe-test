import styles from "./react-app.module.css";

export default function Root(props) {
  return <section className={styles.section}>{props.name} is running!</section>;
}
