import React from 'react';
import { Input } from '../input/Input';
import styles from "../form/style.module.scss";
import { useNavigate } from 'react-router-dom';



export const CreateAccount: React.FC = () => {
    const navigate = useNavigate();
    return (
        <form className={styles.form}>
            <h1 className={styles.h1}>Crie sua conta</h1>
            <p>Cadastre seus dados</p>
            <Input label="Nome completo" tipoInput="text" placeholder='Digite seu nome' />
            <Input label="Matrícula" tipoInput="number"  placeholder='Digite sua matrícula' />
            <Input label="Email" tipoInput="email" placeholder='Digite seu email' />
            <Input label="Senha" tipoInput="password" placeholder='Digite sua senha' />
            <Input label="Confirme sua senha" tipoInput="password"  placeholder='Confirme sua senha' />

            <button type="submit" onClick={() => navigate("/")}>Cadastrar</button>

            <p className={styles.termos}>Ao clicar em cadastra-se, você concorda com nossos <strong>Termos de serviço e Política de Privacidade</strong></p>
        </form>
    );
}