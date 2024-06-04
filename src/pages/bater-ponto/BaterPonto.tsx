import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import styles from "./styles.module.scss";
import Mapa from "../../services/api-maps/Mapa";

export const BaterPonto: React.FC = ()=>{

    document.title = 'REClock - Bater ponto'
    
    const dataHoraAtual = new Date();

    const [horario] = useState(localStorage.getItem('savedata') as string);

    const [hora, setHora] = useState('');
    const [minutos, setMinutos] = useState('');
    const [segundos, setSegundos] = useState('');

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
                <div onClick={()=>{
                        const dataParsed = JSON.parse(horario);

                        dataParsed.pontoBatido = false;
                        dataParsed.horario = '';
                        dataParsed.data = '';

                        localStorage.setItem('pontoBatido', JSON.stringify(dataParsed));
                    }}>
                    <p className={styles.texth}>REClock</p>
                    <Link className={styles.enter} to={'/home'}>
                        <ExitToAppIcon className={styles.icon}/>
                        <p>Entrar sem bater ponto</p>
                    </Link>
                </div>  
            </header>
            <main>
                <Mapa/>
            </main>
            <div className={styles.dinfos}>
                <div className={styles.infos}>
                    <div className={styles.firstdiv}>Localidade atual</div>
                    <div className={styles.secondiv}>{`HORÁRIO: ${hora}:${minutos}:${segundos}`}</div>
                    <div className={styles.secondiv}>{`DATA: ${(dataHoraAtual.getDate() < 10) ? '0' + dataHoraAtual.getDate() : dataHoraAtual.getDate()}/${(dataHoraAtual.getMonth() + 1 < 10) ? '0' + (dataHoraAtual.getMonth() + 1) : dataHoraAtual.getMonth() + 1}/${dataHoraAtual.getFullYear()}`}</div>
                </div>
                <Link className={styles.secondlink} to={'/home'}>
                    <button onClick={()=>{
                        const dataParsed = JSON.parse(horario);

                        dataParsed.horario = `${hora}:${minutos}:${segundos}`;

                        dataParsed.data = `${(dataHoraAtual.getDate() < 10) ? '0' + dataHoraAtual.getDate() : dataHoraAtual.getDate()}/${(dataHoraAtual.getMonth() + 1 < 10) ? '0' + (dataHoraAtual.getMonth() + 1) : dataHoraAtual.getMonth() + 1}/${dataHoraAtual.getFullYear()}`;

                        dataParsed.pontoBatido = true;

                        localStorage.setItem('pontoBatido', JSON.stringify(dataParsed));
                        localStorage.setItem('savedata', JSON.stringify(dataParsed));
                        }}>Bater ponto</button>
                </Link>
            </div> 
        </section>
    )
}