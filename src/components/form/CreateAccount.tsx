import React from 'react';
import { Input } from '../input/Input';
import styles from "../form/style.module.scss";

export const CreateAccount: React.FC = () => {
    return (
        <form className={styles.form}>
            <h1>Crie sua conta</h1>
            <Input label="Nome completo" tipoInput="text" placeholder='Digite seu nome' />
            <Input label="Matrícula" tipoInput="number"  placeholder='Digite sua matrícula' />
            <Input label="Email" tipoInput="email" placeholder='Digite seu email' />
            <Input label="Senha" tipoInput="password" placeholder='Digite sua senha' />
            <Input label="Confirme sua senha" tipoInput="password"  placeholder='Confirme sua senha' />

            <button type="submit">Cadastrar</button>

            <p>Ao clicar em cadastra-se, você concorda com nossos Termos de serviço e Política de Privacidade</p>
        </form>
    );
}