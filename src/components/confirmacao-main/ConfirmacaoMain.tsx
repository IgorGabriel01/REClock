import styles from "./styles.module.scss";

interface PropsConfirmacao {
    title?: string,
    hora?: string,
    data?: string,
}

export const ConfirmacaoMain:React.FC<PropsConfirmacao> = (props) => {
    return (
        <div className={styles.confirmacao} id='confirmacao-main'>
            <p><span>{props.title}</span> com sucesso às <span>{props.hora}</span> do dia <span>{props.data}</span>.</p>
        </div>
    )
}