import { Navigation } from "../../components/navigation-menu/Navigation";
import { HeaderPrincipal } from "../../components/header-principal/HeaderPrincipal";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import manha from "../../assets/img/icons/manha.png";
import tarde from "../../assets/img/icons/tarde.png";
import noite from "../../assets/img/icons/noite.png";
import madrugada from "../../assets/img/icons/madrugada.png";
import { ConfirmacaoMain } from "../../components/confirmacao-main/ConfirmacaoMain";

export const PrincipalHome:React.FC = ()=> {

    document.title = 'REClock - Home';

    const horarioData = new Date();

    const data = localStorage.getItem('savedata') as string;
    const parsedData = JSON.parse(data);

    const [turno, setTurno] = useState('');
    const [segundoTurno, setSegundoTurno] = useState('');
    const [fimIntervalo, setFimIntervalo] = useState({
        hora: parsedData.intervalo.hora,
        minutos: parsedData.intervalo.minutos
    });
    const [icon, setIcon] = useState('');
    const [secondIcon, setSecondIcon] = useState('');

    useEffect(() => {
        if (parsedData) {
            if (parsedData.inicioEscala.hora >= 5 && parsedData.inicioEscala.hora < 12) {
                setTurno('Manhã');
                setIcon(manha);
                setSegundoTurno('Tarde');
                setSecondIcon(tarde);
            } else if (parsedData.inicioEscala.hora >= 12 && parsedData.inicioEscala.hora <= 18) {
                setTurno('Tarde');
                setIcon(tarde);
                setSegundoTurno('Noite');
                setSecondIcon(noite);
            } else if(parsedData.inicioEscala.hora > 18 || parsedData.inicioEscala.hora < 5) {
                setTurno('Noite');
                setIcon(noite);
                setSegundoTurno('Madrugada');
                setSecondIcon(madrugada);
            } else { 
                setTurno('Madrugada');
                setIcon(madrugada);
                setSegundoTurno('Manhã');
                setSecondIcon(manha);
            }
        }
            
        setFimIntervalo({
            hora: fimIntervalo.hora + 1,
            minutos: parsedData.intervalo.minutos
        });

        const home = document.getElementById('home') as HTMLElement;
        home.style.opacity = '1.5';
    }, []);

    return (
        <div className={styles.home}>
            <Navigation />
            <section className={styles.maincontenthome}>
                <HeaderPrincipal
                 atualPage="Home" />

                <div className={styles.contenthome}>
                    <h2>
                        Sua escala de hoje
                    </h2>
                    <div className={styles.horarios}>
                        <div className={styles.primeiroex}>
                            <div className={styles.firstdivex}>
                                <div>
                                    <img src={icon} alt={`Icone ${turno}`} />
                                    <p>{turno}</p>
                                </div>
                                <p>{`${parsedData.inicioEscala.hora < 10 ? '0' + parsedData.inicioEscala.hora : parsedData.inicioEscala.hora}:${parsedData.inicioEscala.minutos < 10 ? '0' + parsedData.inicioEscala.minutos : parsedData.inicioEscala.minutos}h - ${parsedData.intervalo.hora < 10 ? '0' + parsedData.intervalo.hora : parsedData.intervalo.hora}:${parsedData.intervalo.minutos < 10 ? '0' + parsedData.intervalo.minutos : parsedData.intervalo.minutos}h`}</p>
                            </div>
                            <div className={styles.seconddivex}>
                                <p>{`${parsedData.inicioEscala.hora < 10 ? '0' + parsedData.inicioEscala.hora : parsedData.inicioEscala.hora}:${parsedData.inicioEscala.minutos < 10 ? '0' + parsedData.inicioEscala.minutos : parsedData.inicioEscala.minutos} - Início de Escala`}</p>
                                
                                <p>{`${parsedData.intervalo.hora < 10 ? '0' + parsedData.intervalo.hora : parsedData.intervalo.hora}:${parsedData.intervalo.minutos < 10 ? '0' + parsedData.intervalo.minutos : parsedData.intervalo.minutos} - Intervalo`}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.horarios}>
                        <div className={styles.primeiroex}>
                            <div className={styles.firstdivex}>
                                <div>
                                    <img src={secondIcon} alt={`Icone ${segundoTurno}`} />
                                    <p>{segundoTurno}</p>
                                </div>
                                <p>{`${fimIntervalo.hora < 10 ? '0' + fimIntervalo.hora : fimIntervalo.hora}:${fimIntervalo.minutos < 10 ? '0' + fimIntervalo.minutos : fimIntervalo.minutos}h - ${parsedData.fimExpediente.hora < 10 ? '0' + parsedData.fimExpediente.hora : parsedData.fimExpediente.hora}:${parsedData.fimExpediente.minutos < 10 ? '0' + parsedData.fimExpediente.minutos : parsedData.fimExpediente.minutos}h`}</p>
                            </div>
                            <div className={styles.seconddivex}>
                                <p>{`${fimIntervalo.hora < 10 ? '0' + fimIntervalo.hora : fimIntervalo.hora}:${fimIntervalo.minutos < 10 ? '0' + fimIntervalo.minutos : fimIntervalo.minutos} - Retorno do intervalo`}</p>
                                
                                <p>{`${parsedData.fimExpediente.hora < 10 ? '0' + parsedData.fimExpediente.hora : parsedData.fimExpediente.hora}:${parsedData.fimExpediente.minutos < 10 ? '0' + parsedData.fimExpediente.minutos : parsedData.fimExpediente.minutos} - Fim do expediente`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ConfirmacaoMain title='Ponto batido' hora={`${(horarioData.getHours() < 10) ? '0' + horarioData.getHours() : String(horarioData.getHours())}:${(horarioData.getMinutes() < 10) ? '0' + horarioData.getMinutes() : String(horarioData.getMinutes())}:${(horarioData.getSeconds() < 10) ? '0' + horarioData.getSeconds() : String(horarioData.getSeconds())}`} data={`${(horarioData.getDate() < 10) ? '0' + horarioData.getDate() : horarioData.getDate()}/${(horarioData.getMonth() + 1 < 10) ? '0' + (horarioData.getMonth() + 1) : horarioData.getMonth() + 1}/${horarioData.getFullYear()}`}/>
        </div>
    )
}