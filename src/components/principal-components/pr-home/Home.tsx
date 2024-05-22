import Logo from "../../../assets/img/logos/logo-reclock-smp.png";
import ImgConheca from "../../../assets/img/conheca-ilustração-main.png";
import CellphoneIlustrationP from "../../../assets/img/p-illustration-cellphone.png";
import CellphoneIlustrationU from "../../../assets/img/u-illustration-cellphone.png";
import styles from "./styles.module.scss";
import EditNoteIcon from '@mui/icons-material/EditNote';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";

export const Home: React.FC = () => {

    document.title = 'REClock - Bata seu ponto!'

    return (
        <>
            <header className={styles.header}>
                <img src={Logo} alt="Logo REClock" />

                <nav>
                    <a href="">Conheça o sistema</a>
                    <a href="">Funcionalidades</a>
                </nav>

                <Link className={styles.loginbutton} to={"/login"}>Login</Link>
            </header>

            <main>
                <section className={styles.sectioninfos}>
                    <div>
                        <h1>Na jornada do trabalho, a marcação do ponto é mais que um registro.</h1>
                        <p>Bata seu ponto!</p>
                    </div>

                    <div>
                        <Link to={"create-account"}>Cadastrar</Link>
                        <Link to={"/login"}>Fazer login</Link>
                    </div>
                </section>

                <section className={styles.conhecaapp}>
                    <div>
                        <p>Conheça o APP</p>
                        <h2>A solução moderna para gestão de ponto e jornada de trabalho.</h2>
                        <p>A REClock, o controle de ponto é feito de forma simples, rápida e segura, direto do seu celular ou computador. Seus colaboradores podem bater ponto de onde estiverem, seja no escritório, em casa ou em campo, usando apenas a geolocalização do dispositivo.</p>
                    </div>

                    <img src={ImgConheca} alt="Ilustração REClock" />
                </section>

                <section className={styles.funcionalidades}>

                    <div className={styles.firstdiv}>
                        <div>
                            <h3>
                                O melhor aplicativo de bater ponto
                            </h3>
                            <p>
                                Com apenas um toque, você pode marcar suas entradas e saídas, onde quer que esteja. Simples, rápido e preciso!
                            </p>
                        </div>
                        <div className={styles.apartdiv}>
                            <div>
                                <EditNoteIcon fontSize="large" />
                                <h3>Correção de ponto</h3>
                                <p>Ajuste facilmente seus horários de entrada e saída com nosso sistema intuitivo. Nossa sistema verifica e corrige qualquer discrepância, garantindo que seu registro de ponto seja sempre preciso e atualizado.</p>
                            </div>
                            <img src={CellphoneIlustrationU} alt="Ilustração celular" />
                        </div>
                        <div>
                            <h3>
                                Listagem de Datas
                            </h3>
                            <p>
                                Visualize rapidamente todas as suas marcações de ponto, com um status claro indicando se você bateu ou não o ponto em cada dia. Nossa interface amigável facilita o acompanhamento do seu histórico de presença.
                            </p>
                        </div>
                    </div>

                    <div className={styles.seconddiv}>
                        <div className={styles.secondapartdiv}>
                            <img src={CellphoneIlustrationU} alt="Ilustração celular" />
                            <div>
                                <LocationOnIcon fontSize="large" />
                                <h3>Minha localização</h3>
                                <p>Nossa funcionalidade de geolocalização registra automaticamente onde você está ao bater o ponto, oferecendo mais precisão e segurança. Verifique sua localização a qualquer momento para confirmar que seus horários estão corretos.
                                </p>
                            </div>
                        </div>
                        <div className={styles.thirdpartdiv}>
                            <div>
                                <DescriptionIcon fontSize="large" />
                                <h3>Justificativa de abonos</h3>
                                <p>Nunca perca o controle de suas ausências com nosso sistema de justificativa de abonos. Anexe facilmente documentos ou imagens para justificar suas faltas e garanta que tudo seja processado de forma rápida e eficiente. Você também pode acompanhar o status de suas justificativas em tempo real para manter-se sempre informado.</p>
                            </div>

                            <img src={CellphoneIlustrationP} alt="" />
                        </div>
                    </div>

                </section>
            </main>

            <footer className={styles.footer}>

                <section>
                    <img src={Logo} alt="Logo REClock rodapé" />

                    <div>
                        <h4>PRODUTO</h4>
                        <ul>
                            <li>Funcionalidades</li>
                        </ul>
                    </div>

                    <div>
                        <h4>EMPRESA</h4>
                        <ul>
                            <li>Sobre nós</li>
                        </ul>
                    </div>

                    <div>
                        <h4>LEGAL</h4>
                        <ul>
                            <li>Termos de uso</li>
                            <li>Política de privacidade</li>
                        </ul>
                    </div>
                </section>

                <p>©2024 REClock</p>

            </footer>
        </>
    )
}