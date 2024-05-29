import styles from "./styles.module.scss";

interface propsButton {
    title: string;
}

export const Button: React.FC<propsButton> = (props) => {
    return (
        <button className={styles.button}>{props.title}</button>
    )
}