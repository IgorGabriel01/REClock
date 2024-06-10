import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Navigation } from '../../components/navigation-menu/Navigation';
import Mapa from '../../services/api-maps/Mapa';

export const MeuPonto: React.FC = () => {
    document.title = 'REClock - Meus pontos';

    const [pontos, setPontos] = useState<Array<{ endereco: string, data: string, horario: string }>>([]);
    const [endereco, setEndereco] = useState<string>('');

    console.log(endereco);

    useEffect(() => {
        const savedPoints = JSON.parse(localStorage.getItem('pontos') || '[]');
        setPontos(savedPoints);

        const meuPontoIcon = document.getElementById('meus-pontos') as HTMLElement;
        meuPontoIcon.style.opacity = '1';
    }, [])

    return (
        <div className={styles.meuspontos}>
            <Navigation />
            <section className={styles.pontos}>
                <header>
                    <h1>Meus Pontos</h1>
                </header>
                <div>
                    <Mapa onAddressChange={setEndereco}/>
                </div>
                {pontos.length > 0 ? (
                    <div className={styles.firstDiv}>
                        <div className={styles.secondDiv}>
                        <p>Data</p>
                        <p>Horário de início</p>
                        <p>Horário de saída</p>
                        <p>Localização</p></div>
                        {pontos.map((ponto, index) => (
                            <div key={index} className={styles.thirdDiv}>
                                <p className={styles.inf    }> {ponto.data}</p>
                                <p className={styles.info}>{ponto.horario}</p>
                                <p className={styles.info}>18:15:03</p>
                                <p className={styles.info}>{ponto.endereco}</p>
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