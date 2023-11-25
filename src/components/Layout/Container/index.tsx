import styles from "./Container.module.css";

interface Props {
  children: any;
}

function Container({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
