import { Button } from "../../components/button/Button";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

interface PropsModal {
    title: string;

}

export const Modal: React.FC<PropsModal> = (props) => {

    document.title = 'REClock - Sucesso!';

    return (
        <div className={styles.stmodal}>
            <section className={styles.modal}>
                <p>{props.title} com sucesso!</p>
                <p>Faça login para continuar</p>
                <Link className={styles.link} to={"/login"}><Button title="Fazer login" /></Link>
            </section>
        </div>
    )
}