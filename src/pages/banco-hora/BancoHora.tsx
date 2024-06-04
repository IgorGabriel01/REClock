import { Navigation } from '../../components/navigation-menu/Navigation'
import styles from './styles.module.scss'
import HistoryIcon from '@mui/icons-material/History';

export const BancoHora: React.FC = () => {
    document.title = 'REClock - Banco de horas'

    return (
        <div className={styles.bancoHora}>
            <Navigation />
            <section>
                <header>
                    <h1>Banco de horas</h1>
                    <HistoryIcon className={styles.history} />
                </header>
                <div className={styles.container}>
                    <div className={styles.hora}>
                        <h1>Horas semanais</h1>
                    </div>

                    <div className={styles.saldoAtual}>
                        <h1>Saldo atual</h1>
                    </div>

                    <div className={styles.saldoTotal}>
                        <h1>ei</h1>
                    </div>
                </div>

                <div 
                className={styles.bancoHoraSemanal}
                > 
                <h1>Banco de horas semanal</h1>
                </div>
            </section>
        </div>
    )
}