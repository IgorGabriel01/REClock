import { Input } from '../../sub-components/sb-input/Input';
import { Button } from '../../sub-components/sb-button/Button'
import styles from "./styles.module.scss";

export const CreateAccount: React.FC = () => {

    document.title = 'REClock - Criar Conta'

    return (
        <section className={styles.cadastrar}>
            <div className={styles.firstdiv}>

                <h1>Crie sua conta</h1>
                <p className={styles.firstp}>Cadastre seus dados</p>

            </div>
            <form className={styles.form}>

                <form className={styles.form}>

                    <Input tipoInput="text" label="Nome completo" placeholder='Digite seu nome' />
                    <Input tipoInput="number" label="Matrícula" placeholder='Digite sua matrícula' />
                    <Input tipoInput="email" label="Email" placeholder='Digite seu email' />
                    <Input tipoInput="password" label="Senha" placeholder='Digite sua senha' />
                    <Input tipoInput="password" label="Confirme sua senha" placeholder='Confirme sua senha' />

                    <Button title="Cadastre-se" />

                </form>

                <p className={styles.ftext}>Ao clicar em cadastra-se, você concorda com nossos <span>termos de serviço e política de privacidade</span></p>
            </form>
        </section>
    );
}