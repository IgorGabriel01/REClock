import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import styles from './styles.module.scss';
import { FormEvent, useState, useEffect } from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

interface IModal {
    isOpen: boolean;
    onClose: () => void;
    onTaskAdded: (taskCount: number) => void;
}

interface Todo {
    text: string;
    completed: boolean;
}

export function ModalTask({ isOpen, onClose, onTaskAdded }: IModal) {
    const [task, setTask] = useState('');
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [completedCount, setCompletedCount] = useState(0)
    const [message, setMessage] = useState('Adicionar uma nova tarefa');

    useEffect(() => {
        if (todoList.length > 0) {
            setMessage(`Tarefas criadas: ${todoList.length}`);
        } else {
            setMessage('Suas tarefas aparecerão abaixo.');
        }

        const completedTasks = todoList.filter(todo => todo.completed).length;
        setCompletedCount(completedTasks);
        onTaskAdded(todoList.length);
    }, [todoList, onTaskAdded]);

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
                    <ArrowBackIcon className={styles.arrowicon} onClick={onClose} />
                </div>

                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                />
                <button type="submit">Criar<AddCircleOutlineOutlinedIcon className={styles.add}/> </button>
                <div className={styles.tasks}>
                    <p className={styles.messageTask}>{message}</p>
                    
                    {todoList.map((todo, index) => (
                        <div
                            key={index}
                            className={`${styles.taskDetail} ${todo.completed ? styles.completed : ''}`}
                        >
                            {todo.completed ? (
                                <CheckCircleOutlineIcon
                                    className={styles.checkIcon}
                                    fontSize="small"
                                    onClick={() => toggleTodoCompleted(index)}
                                />
                            ) : (
                                <RadioButtonUncheckedOutlinedIcon
                                    className={styles.checkIcon}
                                    fontSize="small"
                                    onClick={() => toggleTodoCompleted(index)}
                                />
                            )}
                            <span className={styles.taskText} onClick={() => toggleTodoCompleted(index)}>
                                {todo.text}
                            </span>
                            <DeleteIcon
                                className={styles.deleteIcon}
                                onClick={() => deleteTodo(index)}
                            />
                        </div>
                    ))}
                </div>
                <span className={styles.completedCountMessage}>Concluídas: {completedCount}</span>
                
            </form>
        </div>
    );
}