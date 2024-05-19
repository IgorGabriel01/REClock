import { Link } from "react-router-dom";
import styles from "../popup/styles.module.scss";
interface IModal {
    isOpen: boolean;
    title: string;
    description: string
}
function Modal({isOpen, title, description}: IModal) {
    if(isOpen) {
          return (
            <div className={styles.modalOverlay}>
                <div className={styles.modal}>
                    <div>
                        <h1 className={styles.paragraph}>{title}</h1>
                        <p className={styles.paragraph}>{description}</p>
                        <button><Link to={"/"} className={styles.login}>Fazer login</Link></button>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return <></>;
    }
      
}

export default Modal