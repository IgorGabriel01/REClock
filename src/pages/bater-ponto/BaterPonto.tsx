import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import styles from "./styles.module.scss";

export const BaterPonto: React.FC = ()=>{

    document.title = 'REClock - Bater ponto'

    let dataHoraAtual = new Date();

    const [hora, setHora] = useState('');
    const [minutos, setMinutos] = useState('');
    const [segundos, setSegundos] = useState('');
    const [horario] = useState(localStorage.getItem('savedata') as string);

    useEffect(() => {
        const interval = setInterval(() => {
            const dataHoraAtual = new Date();

            const novaHora = (dataHoraAtual.getHours() < 10) ? '0' + dataHoraAtual.getHours() : String(dataHoraAtual.getHours());
            const novosMinutos = (dataHoraAtual.getMinutes() < 10) ? '0' + dataHoraAtual.getMinutes() : String(dataHoraAtual.getMinutes());
            const novosSegundos = (dataHoraAtual.getSeconds() < 10) ? '0' + dataHoraAtual.getSeconds() : String(dataHoraAtual.getSeconds());

            setHora(novaHora);
            setMinutos(novosMinutos);
            setSegundos(novosSegundos);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return(
        <section className={styles.baterponto}>
            <header>
                <div>
                    <p className={styles.texth}>REClock</p>
                    <Link className={styles.enter} to={'/navigation'}>
                        <ExitToAppIcon className={styles.icon} />
                        <p>Entrar sem bater ponto</p>
                    </Link>
                </div>  
            </header>
            <main>
                Map Content
            </main>
            <div className={styles.dinfos}>
                <div className={styles.infos}>
                    <div className={styles.firstdiv}>Localidade atual</div>
                    <div className={styles.secondiv}>{`HORÁRIO: ${hora}:${minutos}:${segundos}`}</div>
                    <div className={styles.secondiv}>{`DATA: ${(dataHoraAtual.getDate() < 10) ? '0' + dataHoraAtual.getDate() : dataHoraAtual.getDate()}/${(dataHoraAtual.getMonth() + 1 < 10) ? '0' + (dataHoraAtual.getMonth() + 1) : dataHoraAtual.getMonth() + 1}/${dataHoraAtual.getFullYear()}`}</div>
                </div>   
                <button onClick={()=>{
                    const dataParsed = JSON.parse(horario);

                    dataParsed.horario = `${hora}:${minutos}:${segundos}`;

                    dataParsed.data = `${(dataHoraAtual.getDate() < 10) ? '0' + dataHoraAtual.getDate() : dataHoraAtual.getDate()}/${(dataHoraAtual.getMonth() + 1 < 10) ? '0' + (dataHoraAtual.getMonth() + 1) : dataHoraAtual.getMonth() + 1}/${dataHoraAtual.getFullYear()}`;

                    console.log(dataParsed);
                    console.log(dataParsed.horario);
                    console.log(dataParsed.data);
                }}><Link className={styles.secondlink} to={'/navigation'}>Bater ponto</Link></button>
            </div> 
        </section>
    )
}