
import ForwardSharpIcon from '@mui/icons-material/ForwardSharp';
import styles from './styles.module.scss';
import { FormEvent, useState } from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

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
    const [todoList, setTodoList]= useState<Todo[]>([]);

    console.log(todoList);

    function handlerAddTodoList(event: FormEvent) {
        event.preventDefault(); //aqui é pra página n ser carregada

          if(task === '') return; //aqui ele previne que uma tarefa em branco seja adicionada

        setTodoList((oldTodoList) => [...oldTodoList, { text: task, completed: false }]); //aqui é pra atualziar o estado da lista de tarefas, adicionando a nova tarefa ao final.

        setTask(''); //para limpar o campo de tasks
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
               
                    <input type="text" 
                    placeholder="Adicione uma nova tarefa"
                    value={task}    
                    onChange={(event) => setTask(event.target.value)
                     }/>
                    <button type="submit">Criar</button>
              
                <div className={styles.tasks}>
                {todoList.map((todo, index) => (
                        <div 
                            key={index} 
                            className={`${styles.taskDetail} ${todo.completed ? styles.completed : ''}`}
                        >
                            <span onClick={() => toggleTodoCompleted(index)}>
                                {todo.text}
                            </span>
                            <DeleteOutlineOutlinedIcon 
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