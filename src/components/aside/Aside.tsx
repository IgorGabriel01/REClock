import React from 'react';
import logoReclock from '../../assets/img/logo/logo-reclock.png';
import styles from '../../components/aside/style.module.scss';

export const Aside: React.FC = () => {
    return (
        <aside className={styles.aside}>
            <div className={styles.asideContent}>
                <div>
                    <img src={logoReclock} alt="Logo REClock" />
                    <p>REClock</p>
                </div>
                <div className={styles.hr}></div>
                <div>
                    <p>Evite Burocracias, bata seu ponto!</p>
                </div>
            </div>
        </aside>
    )
}
