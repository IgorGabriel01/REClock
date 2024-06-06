import { useEffect, useState } from "react";
import { Navigation } from "../../components/navigation-menu/Navigation";
import styles from "./styles.module.scss";
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ReportIcon from '@mui/icons-material/Report';

export const Notificacoes: React.FC = () => {

    document.title = 'REClock - Notificações'

    useEffect(()=>{
        const notificacoes = document.getElementById('notificacoes') as HTMLElement;
        notificacoes.style.opacity = '1';
    }, [])

    const [input1, setInput1] = useState(false);
    const [infos1, setInfos1] = useState(false);
    const [span1, setSpan1] = useState(false);
    const [input2, setInput2] = useState(false);
    const [infos2, setInfos2] = useState(false);
    const [span2, setSpan2] = useState(false);

    return (
        <div className={styles.notificacoes}>
            <Navigation />
            <section>
                <h1>Notificações</h1>
                <div className={styles.pnotifications}>
                    <div className={styles.notifications} id="notifications">
                            <div className={styles.paidivs} onClick={()=>{
                                const divInfos1 = document.getElementById('infos1') as HTMLElement;
                                if (infos1 === false) {
                                    divInfos1.style.display = 'flex';
                                    setInfos1(true);
                                } else {
                                    divInfos1.style.display = 'none';
                                    setInfos1(false);
                                }
                            }}>
                            <div className={styles.firstdiv}>
                                <input type="checkbox" onChange={()=>{
                                    const details = document.getElementById('input1') as HTMLElement;
                                    if (input1 === false) {
                                        details.style.opacity = '1';
                                        setInput1(true);
                                    } else {
                                        details.style.opacity = '0';
                                        setInput1(false);
                                    }
                                }}/>
                                <p className={styles.title}>Mudanças nas diretrizes da plataforma</p>
                            </div>
                            <div className={styles.secondiv} id="input1">
                                <ArchiveIcon className={styles.icons} onClick={()=>{
                                    const divPai = document.getElementById('notifications') as HTMLElement;

                                    divPai.style.display = 'none';
                                }}/>
                                <DeleteOutlineIcon className={styles.icons} onClick={()=>{
                                    const divPai = document.getElementById('notifications') as HTMLElement;

                                    divPai.style.display = 'none';
                                }}/>
                                <ReportIcon className={styles.icons} onClick={()=>{
                                    const divPai = document.getElementById('notifications') as HTMLElement;

                                    if (span1 === false) {
                                        divPai.style.backgroundColor = '#ff5f5e';
                                        setSpan1(true);
                                    } else {
                                        divPai.style.backgroundColor = 'var(--third-color)';
                                        setSpan1(false);
                                    }     
                                }}/>
                            </div>
                        </div>
                        <div className={styles.details} id="infos1">
                            <p className={styles.title}>Mudanças nas diretrizes da plataforma</p>
                            <p>
                            As principais alterações incluem ajustes nos procedimentos de segurança, políticas de trabalho remoto e diretrizes de comunicação interna. Essas mudanças refletem nosso compromisso contínuo com a excelência e a adaptação às necessidades em constante evolução do nosso ambiente de negócios.</p>
                        </div>
                    </div>
                    <div className={styles.notifications} id="notifications2">
                            <div className={styles.paidivs} onClick={()=>{
                                const divInfos2 = document.getElementById('infos2') as HTMLElement;
                                if (infos2 === false) {
                                    divInfos2.style.display = 'flex';
                                    setInfos2(true);
                                } else {
                                    divInfos2.style.display = 'none';
                                    setInfos2(false);
                                }
                            }}>
                            <div className={styles.firstdiv}>
                                <input type="checkbox" onChange={()=>{
                                    const details = document.getElementById('input2') as HTMLElement;
                                    if (input2 === false) {
                                        details.style.opacity = '1';
                                        setInput2(true);
                                    } else {
                                        details.style.opacity = '0';
                                        setInput2(false);
                                    }
                                }}/>
                                <p className={styles.title}>Certifique seu ponto</p>
                            </div>
                            <div className={styles.secondiv} id="input2">
                                <ArchiveIcon className={styles.icons} onClick={()=>{
                                    const divPai = document.getElementById('notifications2') as HTMLElement;

                                    divPai.style.display = 'none';
                                }}/>
                                <DeleteOutlineIcon className={styles.icons} onClick={()=>{
                                    const divPai = document.getElementById('notifications2') as HTMLElement;

                                    divPai.style.display = 'none';
                                }}/>
                                <ReportIcon className={styles.icons} onClick={()=>{
                                    const divPai = document.getElementById('notifications2') as HTMLElement;

                                    if (span2 === false) {
                                        divPai.style.backgroundColor = '#ff5f5e';
                                        setSpan2(true);
                                    } else {
                                        divPai.style.backgroundColor = 'var(--third-color)';
                                        setSpan2(false);
                                    }     
                                }}/>
                            </div>
                        </div>
                        <div className={styles.details} id="infos2">
                            <p className={styles.title}>Certifique seu ponto</p>
                            <p>
                            Para garantir a precisão dos seus registros, lembre-se de iniciar e encerrar as atividades corretamente, além de verificar periodicamente se os pontos batidos correspondem às suas atividades reais.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    )
}