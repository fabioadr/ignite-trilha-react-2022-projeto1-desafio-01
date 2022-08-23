import clipboard from "../../assets/clipboard.svg";

import styles from "./index.module.css";

export function EmptyTaskList() {
  return (
    <div className={styles.emptyTaskList}>
      <img src={clipboard} alt="Empty Task Board" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
