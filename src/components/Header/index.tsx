import styles from "./index.module.css";

import appLogo from "../../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={appLogo} alt="Logotipo do ToDo List" />
    </header>
  );
}
