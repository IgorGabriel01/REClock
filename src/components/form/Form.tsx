import React from 'react';
import { Input } from '../input/Input';
import styles from "../form/style.module.scss";

export const Form: React.FC = () => {
    return (
        <form className={styles.form}>
            <Input label="Matrícula" tipoInput="number" placeholder="Digite sua matrícula" />
            <Input label="Senha" tipoInput="password" placeholder="Digite sua senha" />

            <div className={styles.divFormRemember}>
                <div>
                    <input type="checkbox" /> Lembre-se
                </div>
                <p>Esqueceu a senha?</p>
            </div>

            <button>Entrar</button>
        </form>
    )
}