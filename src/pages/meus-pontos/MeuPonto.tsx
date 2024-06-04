import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Navigation } from '../../components/navigation-menu/Navigation';
import Mapa from '../../services/api-maps/Mapa';


export const MeuPonto: React.FC = () => {
    document.title = 'REClock - meus pontos';

    const [pontos, setPontos] = useState<Array<{ endereco: string, data: string, horario: string }>>([]);
    const [endereco, setEndereco] = useState<string>('');

    useEffect(() => {
        const savedPoints = JSON.parse(localStorage.getItem('pontos') || '[]');
        setPontos(savedPoints);

        const meuPonto = document.getElementById('meu-ponto') as HTMLElement;
        meuPonto.style.opacity = '1';
    }, []);

    const handleSavePoint = () => {
        const novoPonto = {
            endereco: endereco,
            data: new Date().toLocaleDateString(),
            horario: new Date().toLocaleTimeString(),
        };

        const updatedPoints = [novoPonto, ...pontos];
        setPontos(updatedPoints);
        localStorage.setItem('pontos', JSON.stringify(updatedPoints));
    };

    return (
        <div id="meu-ponto" className={styles.meuspontos}>
            <Navigation />
            <section className={styles.pontos}>
                <header>
                    <h2>Meus Pontos</h2>
                </header>
                <div>
                    <Mapa onAddressChange={setEndereco}/>
                </div>
                {pontos.length > 0 ? (
                    <div className={styles.divponto}>
                        <div className={styles.divinfo}><p>Data</p>
                        <p>Horario de início</p>
                        <p>Localização</p></div>
                        {pontos.map((ponto, index) => (
                            <div key={index} className={styles.ponto}>
                                <div className={styles.inf}> {ponto.data}</div>
                                <div className={styles.inf}>{ponto.horario}</div>
                                <div className={styles.inf}> {ponto.endereco}</div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Nenhum ponto registrado.</p>
                )}
            </section>
        </div>
    );
};