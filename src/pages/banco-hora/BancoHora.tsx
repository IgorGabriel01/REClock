import { useEffect } from 'react';
import img from '../../assets/img/Group 2.png';
import img2 from '../../assets/img/Group 2758.png';
import img3 from '../../assets/img/atual.png';
import img4 from '../../assets/img/frame.png';
import { Navigation } from '../../components/navigation-menu/Navigation'
import styles from './styles.module.scss'

export const BancoHora: React.FC = () => {
    document.title = 'REClock - Banco de horas';

    useEffect(()=>{
        const bancoHoras = document.getElementById('banco-hora') as HTMLElement;
        bancoHoras
        bancoHoras.style.opacity = '1';
    });

    return (
        <div className={styles.bancoHora}>
            <Navigation />
            <section>
                <header>
                    <h1>Banco de horas</h1>
                </header>
                <div className={styles.container}>
                    <div className={styles.hora}>
                        <h1>Horas semanais</h1>
                        <img src={img2} alt="" className={styles.img2}/>
                    </div>

                    <div className={styles.saldoAtual}>
                        <h1>Saldo atual</h1>
                        <img src={img3} alt="" className={styles.img3}/>
                    </div>

                    <div className={styles.saldoTotal}>
                        <h1>Salto total de horas</h1>
                        <img 
                        src={img} 
                        alt=""/>
                    </div>
                </div>

                <div 
                className={styles.bancoHoraSemanal}
                > 
                <h1>Banco de horas semanais</h1>
                <img src={img4} alt="" className={styles.img4}/>
                </div>
            </section>
        </div>
    )
}