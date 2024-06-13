import styles from "./styles.module.scss";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

interface PropsIntegrante {
    img: string,
    nome: string,
    descricao: string
    links: {
        linkedin?: string,
        github?: string,
    }
}

export const Integrante:React.FC<PropsIntegrante> = (props) => {
    return (
        <div className={styles.integrante}>
            <img src={props.img} alt="Foto perfil" />

            <div className={styles.dinfos}>
                <h2>{props.nome}</h2>

                <p className={styles.descricao}>{props.descricao}</p>

                <div>
                    <a target="blank" href={props.links.linkedin}><LinkedInIcon /></a>
                    <a target="blank" href={props.links.github}><GitHubIcon /></a>
                </div>
            </div>
        </div>
    )
}