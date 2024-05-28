import React, { useState } from 'react';
import styles from "./styles.module.scss";
import { Button } from "../../sub-components/sb-button/Button";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { Aside } from "../../sub-components/sb-aside/Aside";


export const ResetPassword: React.FC = () => {

    document.title = 'REClock - Recuperar senha';

    const [formState, setFormState] = useState({
        input1: false,
        input2: false,
        input3: false,
        input4: false,
        input5: false

    });

    const [senhaState, setSenhaState] = useState(" ");

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
            case "nome":
                if (eventElement.target.value.length <= 10) {
                    entradaValueEventOne(eventElement, 'Nome precisa ter pelo menos 10 caracteres');
                    setFormState({ ...formState, input1: false });
                } else {
                    entradaValueEventTwo(eventElement);
                    setFormState({ ...formState, input1: true });
                }
                break;
            case "matricula":
                if (eventElement.target.value.length < 6) {
                    entradaValueEventOne(eventElement, 'Sua matrícula precisa ter no mínimo 6 números');
                    setFormState({ ...formState, input2: false });
                } else {
                    entradaValueEventTwo(eventElement);
                    setFormState({ ...formState, input2: true });
                }
                break;
            case "email":
                if (!eventElement.target.value.includes("@") || !eventElement.target.value.includes(".com")) {
                    entradaValueEventOne(eventElement, 'Digite um e-mail válido');
                    setFormState({ ...formState, input3: false });
                } else {
                    entradaValueEventTwo(eventElement)
                    setFormState({ ...formState, input3: true });
                }
                break;
            case "senha":
                if (eventElement.target.value.length <= 6) {
                    entradaValueEventOne(eventElement, 'A senha precisa ter mais que 6 caracteres')
                    setFormState({ ...formState, input4: false });
                } else {
                    entradaValueEventTwo(eventElement);

                    setFormState({ ...formState, input4: true });
                    setSenhaState(eventElement.target.value);
                }
                break;
            case "confirmasenha":
                if (eventElement.target.value !== senhaState) {
                    entradaValueEventOne(eventElement, 'As senhas precisam ser iguais');
                    setFormState({ ...formState, input5: false });
                } else {
                    entradaValueEventTwo(eventElement);
                    setFormState({ ...formState, input5: true });
                }
                break
            default:
                break;
        }
    }

    return (
        <div className={styles.dresetpassword}>

            <Aside />

            <section className={styles.resetpassword}>

                <ArrowBackIcon className={styles.arrowicon} onClick={() => {
                    window.history.back();
                }} />

                <div className={styles.firstdiv}>

                    <h1>Redefinir Senha</h1>
                    <p className={styles.firstp}>Insira seu dados</p>

                </div>

                <form className={styles.form}>

                    <div className={styles.inputs}>
                        <label htmlFor="nome">Nome completo</label>
                        <input required type="text" id="nome" placeholder='Digite seu nome' className={styles.input} onBlur={(e) => {
                            validaInputs(e);
                        }} />
                        <span className={styles.span}>generic text</span>
                    </div>

                    <div className={styles.inputs}>
                        <label htmlFor="matricula">Matrícula</label>
                        <input required type="number" id="matricula" placeholder='Digite sua matrícula' className={styles.input} onBlur={(e) => {
                            validaInputs(e);
                        }} />
                        <span className={styles.span}>generic text</span>
                    </div>

                    <div className={styles.inputs}>
                        <label htmlFor="email">E-mail</label>
                        <input required type="email" id="email" placeholder='Digite seu email' className={styles.input} onBlur={(e) => {
                            validaInputs(e);
                        }} />
                        <span className={styles.span}>generic text</span>
                    </div>

                    <div className={styles.inputs}>
                        <label htmlFor="senha">Nova senha</label>
                        <input required type="password" id="senha" placeholder='Digite sua senha' className={styles.input} onBlur={(e) => {
                            validaInputs(e);
                        }} />
                        <span className={styles.span}>generic text</span>
                        <VisibilityOffIcon className={styles.showpasswordfirst} onClick={() => {
                            const senhaInput: any = document.getElementById('senha');
                            if (senhaInput.type === 'password') {
                                senhaInput.type = 'text';
                            } else {
                                senhaInput.type = 'password';
                            }
                        }
                        } />
                    </div>

                    <div className={styles.inputs}>
                        <label htmlFor="confirmasenha">Confime sua nova senha</label>
                        <input required type="password" id="confirmasenha" placeholder='Confirme sua senha' className={styles.input} onBlur={(e) => {
                            validaInputs(e);
                        }} />
                        <span className={styles.span}>generic text</span>
                        <VisibilityOffIcon className={styles.showpasswordsecond} onClick={() => {
                            const senhaInput: any = document.getElementById('confirmasenha');
                            if (senhaInput.type === 'password') {
                                senhaInput.type = 'text';
                            } else {
                                senhaInput.type = 'password';
                            }
                        }
                        } />
                    </div>

                    <Link className={styles.button} to={"/navigation"} onClick={(e: any) => {
                        if (formState.input1 == false || formState.input2 == false || formState.input3 == false || formState.input4 == false || formState.input5 == false) {
                            e.preventDefault();
                        }
                    }}>
                        <Button title="Redefinir" />
                    </Link>

                </form>
            </section>
        </div>
    );
}