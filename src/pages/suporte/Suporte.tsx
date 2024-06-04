import styles from "./styles.module.scss";
import { Navigation } from "../../components/navigation-menu/Navigation";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect, useState } from "react";

export const Suporte:React.FC = () => {

    document.title = 'REClock - Ajuda'

    useEffect(()=>{
        const suporte = document.getElementById('suporte') as HTMLElement;
        suporte.style.opacity = '1';
    }, []);

    const [valida1, setValida1] = useState(false);
    const [valida2, setValida2] = useState(false);
    const [valida3, setValida3] = useState(false);
    const [valida4, setValida4] = useState(false);

    return (
        <div className={styles.suporte}>
            <Navigation />
            <section>
                <h1>Ajuda</h1>
                <h2>Perguntas frequentes</h2>
                <div className={styles.divpaiajuda}>
                    <div className={styles.duvidas}>
                        <div onClick={()=>{
                            const elemento = document.getElementById('first') as HTMLElement;
                            const icon1 = document.getElementById('first-icon') as HTMLElement;

                            if (valida1 === false) {
                                elemento.style.display = 'block';
                                setValida1(true);
                               icon1.style.transform = 'rotateX(180deg)';
                            } else {
                                elemento.style.display = 'none';
                                setValida1(false);
                                icon1.style.transform = 'rotateX(360deg)';
                            }   
                        }}>
                            <p>Como faço para marcar meu ponto?</p>
                            <KeyboardArrowUpIcon  id="first-icon"/>
                        </div>
                        <div id="first" className={styles.resposta}>
                            <span>Para marcar seu ponto, navegue até a seção home na aplicação e clique no botão "Bater ponto". Você também pode usar atalhos de teclado ou comandos de voz, se disponíveis.</span>
                        </div>
                    </div>
                    <div className={styles.duvidas}>
                        <div onClick={()=>{
                            const elemento = document.getElementById('second') as HTMLElement;
                            const icon2 = document.getElementById('second-icon') as HTMLElement;

                            if (valida2 === false) {
                               elemento.style.display = 'block';
                               icon2.style.transform = 'rotateX(180deg)';
                               setValida2(true);
                            } else {
                                elemento.style.display = 'none';
                                setValida2(false);
                                icon2.style.transform = 'rotateX(360deg)';
                            }   
                        }}>
                            <p>Posso ajustar um ponto de marcação incorreto?</p>
                            <KeyboardArrowUpIcon id="second-icon"/>
                        </div>
                        <div id="second" className={styles.resposta}>
                            <span>Sim, você pode ajustar pontos de marcação incorretos na seção de ajuste de ponto. Lá, você poderá corrigir a hora de entrada ou saída, inserindo seus atestados ou protocolos.</span>
                        </div>
                    </div>
                    <div className={styles.duvidas}>
                        <div onClick={()=>{
                            const elemento = document.getElementById('third') as HTMLElement;
                            const icon3 = document.getElementById('third-icon') as HTMLElement;

                            if (valida3 === false) {
                               elemento.style.display = 'block';
                               setValida3(true);
                               icon3.style.transform = 'rotateX(180deg)';
                            } else {
                                elemento.style.display = 'none';
                                setValida3(false);
                                icon3.style.transform = 'rotateX(360deg)';
                            }   
                        }}>
                            <p>Existe um limite de tempo para ajustar um ponto de marcação?</p>
                            <KeyboardArrowUpIcon id="third-icon"/>
                        </div>
                        <div id="third" className={styles.resposta}>
                            <span>Normalmente, os ajustes de ponto devem ser feitos dentro de um período especificado após a marcação original. Verifique as políticas da empresa ou as configurações da aplicação para saber os limites de tempo aplicáveis.</span>
                        </div>
                    </div>
                    <div className={styles.duvidas}>
                        <div onClick={()=>{
                            const elemento = document.getElementById('fourth') as HTMLElement;
                            const icon4 = document.getElementById('fourth-icon') as HTMLElement;

                            if (valida4 === false) {
                                elemento.style.display = 'block';
                                setValida4(true);
                                icon4.style.transform = 'rotateX(180deg)';
                            } else {
                                elemento.style.display = 'none';
                                setValida4(false);
                                icon4.style.transform = 'rotateX(360deg)';
                            }   
                        }}>
                            <p>O que devo fazer se encontrar um problema ao marcar meu ponto?</p>
                            <KeyboardArrowUpIcon id="fourth-icon"/>
                        </div>
                        <div id="fourth" className={styles.resposta}>
                            <span>Se você encontrar algum problema ao marcar seu ponto, entre em contato com o suporte técnico da aplicação para obter assistência. Eles estarão prontos para ajudar a resolver qualquer problema que você possa encontrar durante o processo de marcação de ponto.</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}