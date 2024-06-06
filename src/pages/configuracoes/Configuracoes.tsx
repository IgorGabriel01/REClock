import { useEffect, useState } from "react";
import { Navigation } from "../../components/navigation-menu/Navigation";
import styles from "./styles.module.scss";
import desligado from "../../assets/img/icons/botao-de-desligar.png";
import ligado from "../../assets/img/icons/botao-ligado.png";

export const Configuracoes: React.FC = () => {

    document.title = 'REClock - Configurações';

    const [firstConfig, setFirstConfig] = useState(false);
    const [secondConfig, setSecondConfig] = useState(false);

    useEffect(()=>{
        const configuracoes = document.getElementById('configuracoes') as HTMLElement;
        configuracoes.style.opacity = '1';
    }, [])

    return (
        <div className={styles.configuracoes}>
            <Navigation />
            <section>
                <h1>Configurações</h1>
                <div className={styles.pconfigs}>
                    <div className={styles.configs}>
                        <p>Notificações</p>
                        <img id="first-config" src={firstConfig ? ligado : desligado} alt="Icon ligado/desligado" onClick={()=>{
                            setFirstConfig(!firstConfig);
                            console.log(firstConfig);
                        }}/>
                    </div>
                    <div className={styles.configs}>
                        <p>Salvar tarefas</p>
                        <img id="second-config" src={secondConfig ? ligado : desligado} alt="Icon ligado/desligado" onClick={()=>{
                            setSecondConfig(!secondConfig);
                            console.log(secondConfig);
                        }}/>
                    </div>
                    <div className={styles.configs}>
                        <p>Economia de dados</p>
                        <input type="checkbox" />
                    </div>
                    <div className={styles.configs}>
                        <p>Carregamento automático de mapas</p>
                        <input type="checkbox" />
                    </div>
                    <div className={styles.configs}>
                        <p>Acesso a arquivos</p>
                        <input type="checkbox" />
                    </div>
                </div>
                
            </section>
        </div>
        
    )
}