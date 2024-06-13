import React, { useState, useEffect, useContext } from 'react';
import { Button } from "../../components/button/Button";
import styles from "./styles.module.scss";
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { DadosContext } from '../../services/ContextProvider';
import { Link } from "react-router-dom";
import { Aside } from "../../components/aside-log/Aside";



export const Login: React.FC = () => {

    const dadosUsuarios = useContext(DadosContext);

    document.title = 'REClock - Login'

    const [fMatricula, setMatricula] = useState();
    const [fSenha, setSenha] = useState();

    useEffect(() => {
        const remember = localStorage.getItem('remember');
        if (remember) {
            const parsedRemember = JSON.parse(remember);
            setMatricula(parsedRemember.matricula);
            setSenha(parsedRemember.senha);
        }
    }, []);

    const [formState, setFormState] = useState({
        input1: false,
        input2: false
    });

    function entradaValueEventOne(eventElement: any, context: string) {
        eventElement.target.classList.add(styles.inputerror);
        eventElement.target.classList.remove(styles.input);

        eventElement.target.nextElementSibling.textContent = `
        ${context}
        `

        eventElement.target.nextElementSibling.classList.add(styles.spanerror);
        eventElement.target.nextElementSibling.classList.remove(styles.span);
    }

    function entradaValueEventTwo(eventElement: any) {
        eventElement.target.classList.remove(styles.inputerror);
        eventElement.target.classList.add(styles.input);

        eventElement.target.nextElementSibling.classList.remove(styles.spanerror);
        eventElement.target.nextElementSibling.classList.add(styles.span);
    }

    function validaInputs(eventElement: any) {
        switch (eventElement.target.id) {
            case "matricula":
                if (eventElement.target.value !== dadosUsuarios.userData.matricula) {
                    entradaValueEventOne(eventElement, 'Matrícula não encontrada');
                    setFormState({ ...formState, input1: false });
                } else {
                    entradaValueEventTwo(eventElement);
                    setFormState({ ...formState, input1: true });
                }
                break;
            case "senha":
                if (eventElement.target.value !== dadosUsuarios.userData.senha) {
                    entradaValueEventOne(eventElement, 'Senha incorreta');
                    setFormState({ ...formState, input2: false });
                } else {
                    entradaValueEventTwo(eventElement);
                    setFormState({ ...formState, input2: true });
                }
                break;
            default:
                break;
        }
    }

    return (
        <div className={styles.dlogin}>
            <Aside />

            <section className={styles.login}>

                <div className={styles.firstdiv}>
                    <h1>Entre na sua conta</h1>

                    <p className={styles.firstp}>Insira seus dados</p>
                </div>

                <form>
                    <div className={styles.inputs}>
                        <label htmlFor="matricula">Matrícula</label>
                        <input required id="matricula" type="number" defaultValue={fMatricula} placeholder="Digite sua matrícula" className={styles.input} onBlur={(e) => {
                            validaInputs(e);
                        }} />
                        <span className={styles.span}>generic text</span>
                    </div>

                    <div className={styles.inputs}>
                        <label htmlFor="senha">Senha</label>
                        <input required id="senha" type="password" defaultValue={fSenha} placeholder="Digite sua senha" className={styles.input} onBlur={(e) => {
                            validaInputs(e);
                        }} />
                        <span className={styles.span}>generic text</span>
                        <VisibilityOffIcon className={styles.showpassword} onClick={() => {
                            const senhaInput: any = document.getElementById('senha');
                            if (senhaInput.type === 'password') {
                                senhaInput.type = 'text';
                            } else {
                                senhaInput.type = 'password';
                            }
                        }
                        } />
                    </div>

                    <div className={styles.divinfosform}>
                        <div>
                            <input type="checkbox" id='check' />
                            <p>Lembre-se</p>
                        </div>

                        <p><Link className={styles.firstlink} to={"/reset-password"}> Esqueceu a senha?</Link></p>
                    </div>

                    <Link className={styles.button} to={"/bater-ponto"} onClick={(e) => {
                        const checkbox = document.getElementById('check') as HTMLInputElement;
                        const matriculaElement = document.getElementById('matricula') as HTMLInputElement;
                        const senhaElement = document.getElementById('senha') as HTMLInputElement;

                        if (matriculaElement && senhaElement && checkbox.checked) {
                            localStorage.setItem('remember', JSON.stringify({
                                matricula: matriculaElement.value,
                                senha: senhaElement.value
                            }));
                        }

                        if (formState.input1 == false || formState.input2 == false) {
                            e.preventDefault();
                        }
                    }}>
                        <Button title="Entrar" />
                    </Link>
                </form>

                <div className={styles.conecte}>

                    <div></div>
                    <p>Ou conecte com</p>
                    <div></div>

                </div>

                <div className={styles.divIcons}>
                    <GoogleIcon fontSize="large" />
                    <LinkedInIcon fontSize="large" />
                </div>

                <p className={styles.ftext}>Não tem conta? <span><Link className={styles.secondlink} to={"/create-account"}>Cadastre-se</Link></span></p>
            </section>
        </div >
    )
}