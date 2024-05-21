import React from 'react';
import { Input } from '../../sub-components/sb-input/Input';
import styles from "./styles.module.scss";
import { Button } from "../../sub-components/sb-button/Button";

export const ResetPassword: React.FC = () => {

    document.title = 'REClock - Recuperar senha';

    return (
        <section className={styles.resetpassword}>

            <div className={styles.firstdiv}>

                <h1>Redefinir Senha</h1>
                <p className={styles.firstp}>Insira seu dados</p>

            </div>

            <form className={styles.form}>

                <Input tipoInput="text" label="Nome completo" placeholder='Digite seu nome' />
                <Input tipoInput="number" label="Matrícula" placeholder='Digite sua matrícula' />
                <Input tipoInput="email" label="Email" placeholder='Digite seu email' />
                <Input tipoInput="password" label="Senha" placeholder='Digite sua senha' />
                <Input tipoInput="password" label="Confirme sua senha" placeholder='Confirme sua senha' />

                <Button title="Redefinir" />

            </form>
        </section>
    );
}