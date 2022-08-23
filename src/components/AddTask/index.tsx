import { ChangeEvent, FormEvent, useState } from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./index.module.css";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function AddTask({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.addTask}>
      <input
        type="text"
        value={title}
        onChange={onChangeTitle}
        placeholder="Adicione uma nova tarefa"
      />
      <button>
        Criar
        <AiOutlinePlusCircle size={20} />
      </button>
    </form>
  );
}
