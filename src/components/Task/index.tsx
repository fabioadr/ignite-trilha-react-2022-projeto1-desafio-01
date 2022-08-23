import { TbTrash } from "react-icons/tb";
import { BsCheckCircle } from "react-icons/bs";

import styles from "./index.module.css";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface Props {
  task: ITask;
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function Task({ task, onComplete, onDelete }: Props) {
  function handleDeleteComment() {}

  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <BsCheckCircle /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
