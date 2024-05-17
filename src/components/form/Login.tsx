import React from 'react';
import { Input } from '../input/Input';
import styles from "../form/style.module.scss";
import { Link, useNavigate } from 'react-router-dom';


export const Login: React.FC = () => {
    const navigate = useNavigate();
    return (
        <form className={styles.form}>
            <Input label="Matrícula" tipoInput="number" placeholder="Digite sua matrícula" />
            <Input label="Senha" tipoInput="password" placeholder={"Digite sua senha"} />

            <div className={styles.divFormRemember}>
                <div>
                    <input type="checkbox" /> Lembre-se
                </div>
                <Link to={"reset-password"} className={styles.linkStyle}>Esqueceu a senha?</Link>
            </div>

            <button onClick={() => navigate("/home")}>Entrar</button>
        </form>
    )
}