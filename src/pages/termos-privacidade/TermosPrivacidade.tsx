import styles from "./styles.module.scss";
import logo from "../../assets/img/logos/logo-reclock.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const TermosPrivacidade:React.FC = () => {

    document.title = 'REClock - Termos de Serviço e Política de Privacidade';

    return (
        <main className={styles.tspvmodal}>
            <ArrowBackIcon className={styles.arrow} onClick={()=> {
                window.history.back();
            }}/>

            <div className={styles.plogo}>
                <img className={styles.logoreclock} src={logo} alt="Logo REClock" />
                <p className={styles.reclock}>REClock</p>
            </div>

            <h2>Termos de Serviço e Política de Privacidade</h2>

            <div className={styles.paitp}>
                <section id="termos-de-servico">
                    <h3>Termos de Serviço</h3>
                    <p>Estes termos de serviço regem o uso do aplicativo REClock.</p>
                    <p>Ao utilizar o REClock, você concorda com estes termos de serviço.</p>
                    <ol>
                        <li>Você concorda em usar o REClock apenas para fins legais e éticos.</li>
                        <li>Você é responsável por manter a segurança de sua conta e senha.</li>
                        <li>Você concorda em não realizar engenharia reversa, modificar, copiar ou distribuir o REClock sem permissão.</li>
                        <li>Reservamos o direito de suspender ou encerrar sua conta se violar estes termos.</li>
                    </ol>
                </section>

                <section id="politica-de-privacidade">
                    <h3>Política de Privacidade</h3>
                    <p>Esta política de privacidade descreve como as informações são coletadas, usadas e compartilhadas quando você utiliza o aplicativo REClock.</p>
                    <p>Garantimos a segurança e privacidade dos seus dados. Não compartilhamos informações pessoais com terceiros sem o seu consentimento, exceto nas seguintes situações:</p>
                    <ol>
                        <li>Para cumprir com obrigações legais;</li>
                        <li>Para proteger e defender nossos direitos e propriedade;</li>
                        <li>Com seu consentimento expresso.</li>
                    </ol>
                    <p>Reservamos o direito de fazer alterações nesta política de privacidade, as quais serão comunicadas a você por meio de atualizações no aplicativo.</p>
                </section>
            </div>

            <footer>
                <p>&copy; 2024 REClock. Todos os direitos reservados.</p>
            </footer>
        </main>
)}
