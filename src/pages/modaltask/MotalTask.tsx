
import ForwardSharpIcon from '@mui/icons-material/ForwardSharp';
import styles from './styles.module.scss';

interface IModal {
    isOpen: boolean;
    onClose: () => void;
}

export function ModalTask({ isOpen, onClose }: IModal) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalTask}>
                <div className={styles.headerTask}>
                    <h1>Minhas tarefas</h1>
                    <ForwardSharpIcon className={styles.arrowicon} onClick={onClose} />
                </div>
               
                    <input type="text" placeholder="Adicione uma nova tarefa" />
                    <button type="submit">Criar</button>
              
                <div className={styles.tasks}>
                    <div className={styles.taskDetail}>
                        <p>Testar e depurar código do projeto</p>
                    </div>
                    <div  className={styles.taskDetail}>
                    <p> Reunião com um stakeholder para discutir os requisitos de um novo projeto</p>
                    </div>
                    <div  className={styles.taskDetail}>
                        <p>Documentação do código escrito, utilizando comentários, diagramas e outros recursos para facilitar a compreensão por outros desenvolvedores.</p>
                    </div>
                    <div  className={styles.taskDetail}>
                        <p>Verificação de e-mails importantes</p>
                    </div>
                    <div  className={styles.taskDetail}>
                        <p>Reunião rápida com a equipe para alinhamento das tarefas do dia e resolução de impedimentos.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}