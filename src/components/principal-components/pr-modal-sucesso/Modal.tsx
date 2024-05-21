import { Button } from "../../sub-components/sb-button/Button";
import styles from "./styles.module.scss";

interface PropsModal {
    title: string;
}

export const Modal: React.FC<PropsModal> = (props) => {

    document.title = 'REClock - Sucesso!';

    return (
        <>
            <div className={styles.stmodal}>
                <section className={styles.modal}>
                    <p>{props.title} com sucesso!</p>
                    <p>Faça login para continuar</p>

                    <Button title="Fazer login" />
                </section>
            </div>
        </>
    )
}