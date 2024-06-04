import {  Navigation } from "../../components/navigation-menu/Navigation";
import firstIcon from "../../assets/img/icons/icon-justificar.png";
import secondIcon from "../../assets/img/icons/icon-justificar2.png";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const AjustarPonto:React.FC = () => {

    document.title = 'REClock - Ajustar ponto'

    useEffect(()=>{
        const ajustarPonto = document.getElementById('ajustar-pontos') as HTMLElement;
        ajustarPonto.style.opacity = '1';
    }, [])

    return (
        <div className={styles.ajustarponto}>
            <Navigation />
            <section>
                <header>
                    <h1>Ajustar ponto</h1>
                </header>

                <div className={styles.dpai}>
                    <p>O colaborador só poderá solicitar o reajuste de ponto de até 3 dias corridos após a data do erro. A solicitação de reajuste de ponto será analisada pelo setor de Recursos Humanos.</p>

                    <p>O colaborador será notificado por e-mail sobre o resultado da solicitação.</p>

                    <div>
                        <div className={styles.divicons}>
                            <div>
                                <img src={firstIcon} alt="Ícone problemas técnicos" />
                                <p>Justificativa de problemas técnicos</p>
                            </div>

                            <div>
                                <img src={secondIcon} alt="Ícone problemas médicos" />
                                <p>Atestados médicos / Declarações</p>
                            </div>
                        </div>
                    </div>

                    <Link className={styles.button} to='/ajustar-ponto-justificativa'><button>Avançar</button></Link>
                </div>
            </section>
        </div>
    )
}