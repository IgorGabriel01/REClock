import React from 'react';
import styles from '../../components/section/style.module.scss';
import { Form } from '../../components/form/Form.tsx';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface SectionInfosProps {
    title?: string;
}

export const SectionInfos: React.FC<SectionInfosProps> = (props) => {
    return (
        <section className={styles.sectionInfos}>
            <h1>{props.title}</h1>
            <p className={styles.data}>Insira seus dados</p>

            <Form />

            <div className={styles.firstDiv}>
                <div className={styles.noneDiv}></div>
                <p>Ou conecte com</p>
                <div className={styles.noneDiv}></div>
            </div>

            <div className={styles.divIcons}>
                <GoogleIcon className={styles.icons} />
                <LinkedInIcon className={styles.icons} />
            </div>

            <p>Não tem conta? <span>Cadastre-se</span></p>
        </section>
    )
}