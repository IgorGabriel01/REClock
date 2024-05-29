import ErrorImg from "../../../assets/img/img-error.png";
import Img404 from "../../../assets/img/404.png";
import styles from "./styles.module.scss";

export const Errorpage: React.FC = () => {
    return (
        <div className={styles.errorpage}>
            <img src={ErrorImg} alt="Imagem de erro" />
            <div>
                <img src={Img404} alt="imagem erro 404" />
                <p>Opa!</p>
                <p>Parece que o REClock está com problemas.</p>
                <p>Dê uma pausa para relaxar e recarregar as energias, tente novamente mais tarde!</p>
            </div>
        </div>
    )
}