import { Input } from "../../sub-components/sb-input/Input";
import { Button } from "../../sub-components/sb-button/Button";
import styles from "./styles.module.scss";
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Login: React.FC = () => {

    document.title = 'REClock - Login'

    return (
        <section className={styles.login}>

            <div className={styles.firstdiv}>
                <h1>Entre na sua conta</h1>

                <p className={styles.firstp}>Insira seus dados</p>
            </div>

            <form action="">
                <Input label="Matrícula" tipoInput="number" placeholder="Digite sua matrícula" />
                <Input label="Senha" tipoInput="password" placeholder="Digite sua senha" />

                <div className={styles.divinfosform}>
                    <div>
                        <input type="checkbox" />
                        <p>Lembre-se</p>
                    </div>

                    <p>Esqueceu a senha?</p>
                </div>

                <Button title="Entrar" />
            </form>

            <div className={styles.conecte}>

                <div></div>
                <p>Ou conecte com</p>
                <div></div>

            </div>

            <div className={styles.divIcons}>
                <GoogleIcon fontSize="large" />
                <LinkedInIcon fontSize="large" />
            </div>

            <p className={styles.ftext}>Não tem conta? <span>Cadastre-se</span></p>
        </section>
    )
}