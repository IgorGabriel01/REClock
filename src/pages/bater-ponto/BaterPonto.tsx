import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import styles from "./styles.module.scss";
import Mapa from "../../services/api-maps/Mapa";
import Webcam from "react-webcam";

export const BaterPonto: React.FC = ()=>{

    document.title = 'REClock - Bater ponto'
    
    const navigate = useNavigate();
    const webcamRef = useRef<Webcam>(null);

    const dataHoraAtual = new Date();
    const [horario] = useState(localStorage.getItem('savedata') as string);
    const [hora, setHora] = useState('');
    const [minutos, setMinutos] = useState('');
    const [segundos, setSegundos] = useState('');
    const [endereco, setEndereco] = useState<string>('');
    const [showWebcam, setShowWebcam] = useState(false);

    
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

    const handleBaterPonto = () => {
        setShowWebcam(true);
    };

    const handleCapture = () => {
        if (webcamRef.current) {
            const screenshot = webcamRef.current.getScreenshot();
            if (screenshot) {
                // Save the screenshot in localStorage or send it to the server here

                const dataParsed = JSON.parse(horario);
                dataParsed.horario = `${hora}:${minutos}:${segundos}`;
                dataParsed.data = `${(dataHoraAtual.getDate() < 10) ? '0' + dataHoraAtual.getDate() : dataHoraAtual.getDate()}/${(dataHoraAtual.getMonth() + 1 < 10) ? '0' + (dataHoraAtual.getMonth() + 1) : dataHoraAtual.getMonth() + 1}/${dataHoraAtual.getFullYear()}`;
                dataParsed.endereco = endereco;
                dataParsed.pontoBatido = true;

                localStorage.setItem('pontoBatido', JSON.stringify(dataParsed));
                localStorage.setItem('savedata', JSON.stringify(dataParsed));

                // Save point data to localStorage
                const savedPoints = JSON.parse(localStorage.getItem('pontos') || '[]');
                savedPoints.push({
                    endereco: endereco,
                    data: dataParsed.data,
                    horario: dataParsed.horario,
                    screenshot: screenshot  // Save the screenshot
                });
                localStorage.setItem('pontos', JSON.stringify(savedPoints));

                // Redirect to home page
                navigate('/home');
            }
        }
    };
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

                    <Link 
                    className={styles.enter} 
                    to={'/home'}>
                        <ExitToAppIcon 
                        className={styles.icon} />
                        <p>Entrar sem bater ponto</p>
                    </Link>

                </div>  
            </header>
            <main>
                <Mapa 
                onAddressChange={setEndereco}
                 />
            </main>
            <div 
            className={styles.dinfos}>
                 {showWebcam && (
                    <div className={styles.webcamContainer}>
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                        />
                        <button onClick={handleCapture} className={styles.capture}>Capture</button>
                    </div>
                )}
                
                <div 
                className={styles.infos}>
                    
                    <div 
                    className={styles.firstdiv}>
                        {`${endereco}`}
                    </div>  
                    
                    <div 
                    className={styles.secondiv}>
                        {`HORÁRIO: ${hora}:${minutos}:${segundos}`}
                    </div>
                    
                    <div 
                    className={styles.secondiv}>
                        {`DATA: ${(dataHoraAtual.getDate() < 10) ? '0' + dataHoraAtual.getDate() : dataHoraAtual.getDate()}/${(dataHoraAtual.getMonth() + 1 < 10) ? '0' + (dataHoraAtual.getMonth() + 1) : dataHoraAtual.getMonth() + 1}/${dataHoraAtual.getFullYear()}`}
                    </div>
                </div>   
                
                <button onClick={handleBaterPonto}>Bater ponto</button>
               
            </div> 
        </section>
    )
}

