import React, { useState, useContext } from 'react';
import styles from "./styles.module.scss";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Aside } from '../../components/aside-log/Aside';
import { DadosContext } from '../../services/ContextProvider';
import { Modal } from '../sucesso-modal/Modal';

export const ResetPassword: React.FC = () => {

    const dadosUsuarios = useContext(DadosContext);

    document.title = 'REClock - Redefinir senha';

    const [formState, setFormState] = useState({
        input1: false,
        input2: false,
        input3: false,
        input4: false,
        input5: false
    });

    const [senhaState, setSenhaState] = useState(" ");
    const [open, setOpen] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted');
        setOpen((prevOpen) => !prevOpen);
        console.log('Modal open state:', !open);
    };

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
                if (eventElement.target.value !== dadosUsuarios.userData.nome) {
                    entradaValueEventOne(eventElement, 'Nome não encontrado');
                    setFormState({ ...formState, input1: false });
                } else {
                    entradaValueEventTwo(eventElement);
                    setFormState({ ...formState, input1: true });
                }
                break;
            case "matricula":
                if (eventElement.target.value !== dadosUsuarios.userData.matricula) {
                    entradaValueEventOne(eventElement, 'Matricula não encontrada');
                    setFormState({ ...formState, input2: false });
                } else {
                    entradaValueEventTwo(eventElement);
                    setFormState({ ...formState, input2: true });
                }
                break;
            case "email":
                if ((!eventElement.target.value.includes("@") || !eventElement.target.value.includes(".com")) || eventElement.target.value !== dadosUsuarios.userData.email) {
                    entradaValueEventOne(eventElement, 'E-mail inválido ou não encontrado');
                    setFormState({ ...formState, input3: false });
                } else {
                    entradaValueEventTwo(eventElement)
                    setFormState({ ...formState, input3: true });
                }
                break;
            case "senha":
                if (eventElement.target.value.length < 6) {
                    entradaValueEventOne(eventElement, 'A senha precisa ter mais que 5 caracteres')
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
                    setSenhaState(eventElement.target.value);
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

                <form className={styles.form} onSubmit={handleSubmit}>

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
                        <label htmlFor="confirmasenha">Confirme sua nova senha</label>
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

                    <button className={styles.button} type="submit">
                        Redefinir
                    </button>
                    
                    <Modal 
                    isOpen={open}
                    title={'Senha redefinida com sucesso!'}
                    description={'Você pode fazer login com sua nova senha.'}
                    /> 
                </form>
            </section>
        </div>
    );
}