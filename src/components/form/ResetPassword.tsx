import React from 'react';
import { Input } from '../input/Input';
import styles from "../form/style.module.scss";
import { useNavigate } from 'react-router-dom';

export const ResetPassword: React.FC = () => {
    const navigate = useNavigate();
    return (
        <form className={styles.form}>
            <h1>Redefinir Senha</h1>
            <p>Insira seu dados</p>
            <Input tipoInput="text" label="Nome completo" placeholder='Digite seu nome' />
            <Input tipoInput="number" label="Matrícula" placeholder='Digite sua matrícula' />
            <Input tipoInput="email" label="Email" placeholder='Digite seu email' />
            <Input tipoInput="password" label="Senha" placeholder='Digite sua senha' />
            <Input tipoInput="password" label="Confirme sua senha" placeholder='Confirme sua senha' />

            <button type='submit' onClick={() => navigate("/")}> Redefinir</button>
        </form>
    );
}