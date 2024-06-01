import ForwardSharpIcon from '@mui/icons-material/ForwardSharp';
import DeleteIcon from '@mui/icons-material/Delete';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import styles from './styles.module.scss';
import { FormEvent, useState } from 'react';

interface IModal {
    isOpen: boolean;
    onClose: () => void;
}

interface Todo {
    text: string;
    completed: boolean;
}

export function ModalTask({ isOpen, onClose }: IModal) {
    const [task, setTask] = useState('');
    const [todoList, setTodoList] = useState<Todo[]>([]);

    function handlerAddTodoList(event: FormEvent) {
        event.preventDefault();
        if (task === '') return;

        setTodoList((oldTodoList) => [...oldTodoList, { text: task, completed: false }]);

        setTask('');
    }

    function toggleTodoCompleted(index: number) {
        setTodoList((oldTodoList) =>
            oldTodoList.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    function deleteTodo(index: number) {
        setTodoList((oldTodoList) => oldTodoList.filter((_, i) => i !== index));
    }

    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modalOverlay}>
            <form className={styles.modalTask} onSubmit={handlerAddTodoList}>
                <div className={styles.headerTask}>
                    <h1>Minhas tarefas</h1>
                    <ForwardSharpIcon className={styles.arrowicon} onClick={onClose} />
                </div>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                />
                <button type="submit">Criar</button>
                <div className={styles.tasks}>
                    {todoList.map((todo, index) => (
                        <div
                            key={index}
                            className={`${styles.taskDetail} ${todo.completed ? styles.completed : ''}`}
                        >
                            <RadioButtonUncheckedOutlinedIcon
                                className={styles.checkIcon}
                                onClick={() => toggleTodoCompleted(index)}
                            />
                            <span className={styles.taskText} 
                            onClick={() => toggleTodoCompleted(index)}>
                                {todo.text}
                            </span>
                            <DeleteIcon
                                className={styles.deleteIcon}
                                onClick={() => deleteTodo(index)}
                            />
                        </div>
                    ))}
                </div>
            </form>
        </div>
    );
}