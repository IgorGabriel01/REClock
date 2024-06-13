import styles from "./styles.module.scss";
import { Aside } from "../../components/aside-log/Aside";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState, useContext} from 'react';
import { DadosContext } from '../../services/ContextProvider'
import { Modal } from '../sucesso-modal/Modal';
import { Link } from "react-router-dom";

export const CreateAccount: React.FC = () => {

    document.title = 'REClock - Criar Conta';

    const dadosUsuarios = useContext(DadosContext);
    const {userData, setUserData} = dadosUsuarios;

    const [formState, setFormState] = useState({
        input1: false,
        input2: false,
        input3: false,
        input4: false,
        input5: false
    })

    const [senha, setSenha] = useState() as any;

    const [open, setOpen] = useState<boolean>(false); //aqui é pra ele setar quando aparecer

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted');
        setOpen((prevOpen) => !prevOpen); // aqui ele altera o estado do modal
        console.log('Modal open state:', !open); //alterou certinho
    };

    function entradaValueEventOne(eventElement: any, context: string) {
        eventElement.target.classList.add(styles.inputerror);
        eventElement.target.classList.remove(styles.input);

        eventElement.target.nextElementSibling.textContent = `
        ${context}
        `;

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

                    setUserData({...userData, nome: eventElement.target.value});
                }
                break;
            case "matricula":
                if (eventElement.target.value.length < 6) {
                    entradaValueEventOne(eventElement, 'Sua matrícula precisa ter 6 números');
                    setFormState({ ...formState, input2: false });
                } else {
                    entradaValueEventTwo(eventElement);
                    setFormState({ ...formState, input2: true });

                    setUserData({...userData, matricula: eventElement.target.value});
                }
                break;
            case "email":
                if (!eventElement.target.value.includes("@") || !eventElement.target.value.includes(".com")) {
                    entradaValueEventOne(eventElement, `Digite um e-mail válido`);
                    setFormState({ ...formState, input3: false });
                } else {
                    entradaValueEventTwo(eventElement);
                    setFormState({ ...formState, input3: true });

                    setUserData({...userData, email: eventElement.target.value});
                }
                break;
            case "senha":
                if (eventElement.target.value.length < 6) {
                    entradaValueEventOne(eventElement, 'A senha precisa ter mais que 6 caracteres');
                    setFormState({ ...formState, input4: false });
                } else {
                    entradaValueEventTwo(eventElement);
                    setFormState({ ...formState, input4: true });
                    setSenha(eventElement.target.value);
                }
                break;
            case "confirmasenha":
                if (eventElement.target.value !== senha) {
                    entradaValueEventOne(eventElement, 'As senhas precisam ser iguais');
                    setFormState({ ...formState, input5: false });
                } else {
                    entradaValueEventTwo(eventElement);
                    setFormState({ ...formState, input5: true });

                    setUserData({...userData, senha: senha});
                }
                break;
            default:
                break;
        }
    }

    return (
        <div className={styles.dcadastrar}>
            <Aside />

            <section className={styles.cadastrar}>

                <ArrowBackIcon className={styles.arrowicon} onClick={() => {
                    window.history.back();
                }} />

                <div className={styles.firstdiv}>
                    <h1>Crie sua conta</h1>
                    <p className={styles.firstp}>Cadastre seus dados</p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                
                    <div className={styles.inputs}>
                        <label htmlFor="nome">Nome completo</label>
                        <input required type="text" id="nome" placeholder='Digite seu nome' className={styles.input} onBlur={(e) => validaInputs(e)} />
                        <span className={styles.span}>generic text</span>
                    </div>

                    <div className={styles.inputs}>
                        <label htmlFor="matricula">Matrícula</label>
                        <input required type="number" id="matricula" placeholder='Digite sua matrícula' className={styles.input} onBlur={(e) => validaInputs(e)} />
                        <span className={styles.span}>generic text</span>
                    </div>

                    <div className={styles.inputs}>
                        <label htmlFor="email">E-mail</label>
                        <input required type="email" id="email" placeholder='Digite seu email' className={styles.input} onBlur={(e) => validaInputs(e)} />
                        <span className={styles.span}>generic text</span>
                    </div>

                    <div className={styles.inputs}>
                        <label htmlFor="senha">Senha</label>
                        <input required type="password" id="senha" placeholder='Digite sua senha' className={styles.input} onBlur={(e) => validaInputs(e)} />
                        <span className={styles.span}>generic text</span>
                        <VisibilityOffIcon className={styles.showpasswordfirst} onClick={() => {
                            const senhaInput: any = document.getElementById('senha');
                            senhaInput.type = senhaInput.type === 'password' ? 'text' : 'password';
                        }} />
                    </div>

                    <div className={styles.inputs}>
                        <label htmlFor="confirmasenha">Confirme sua senha</label>
                        <input required type="password" id="confirmasenha" placeholder='Confirme sua senha' className={styles.input} onBlur={(e) => validaInputs(e)} />
                        <span className={styles.span}>generic text</span>
                        <VisibilityOffIcon className={styles.showpasswordsecond} onClick={() => {
                            const senhaInput: any = document.getElementById('confirmasenha');
                            senhaInput.type = senhaInput.type === 'password' ? 'text' : 'password';
                        }} />
                    </div>

                    <button className={styles.button} type='submit' onClick={()=>{
                        let validaCargo: string = '';
                        let percorrer = userData.matricula as string;
    
                        for (let i = 0; i < percorrer.length - 3; i++) {
                           validaCargo = validaCargo + percorrer[i];
                        }
                        
                        switch (validaCargo) {
                            case '123':
                                userData.cargo = 'Dev. Front-End';
                                userData.inicioEscala = {
                                    hora: 8,
                                    minutos: 15
                                };
                                userData.intervalo = {
                                    hora: 12,
                                    minutos: 0
                                };
                                userData.fimExpediente = {
                                    hora: 17,
                                    minutos: 30
                                };
                                break;
                            case '321':
                                userData.cargo = 'Dev. Back-End';
                                userData.inicioEscala = {
                                    hora: 8,
                                    minutos: 30
                                };
                                userData.intervalo = {
                                    hora: 12,
                                    minutos: 15
                                };
                                userData.fimExpediente = {
                                    hora: 17,
                                    minutos: 45
                                };
                                break;
                            case '875':
                                userData.cargo = 'Gestor';
                                userData.inicioEscala = {
                                    hora: 12,
                                    minutos: 15
                                };
                                userData.intervalo = {
                                    hora: 16,
                                    minutos: 30
                                };
                                userData.fimExpediente = {
                                    hora: 20,
                                    minutos: 30
                                };
                                break;
                            case '432':
                                userData.cargo = 'Recursos Humanos';
                                userData.inicioEscala = {
                                    hora: 11,
                                    minutos: 20
                                };
                                userData.intervalo = {
                                    hora: 16,
                                    minutos: 30
                                };
                                userData.fimExpediente = {
                                    hora: 19,
                                    minutos: 30
                                };
                                break;
                            case '532':
                                userData.cargo = 'Scrum Master';
                                userData.inicioEscala = {
                                    hora: 8,
                                    minutos: 0
                                }
                                userData.intervalo = {
                                    hora: 11,
                                    minutos: 30
                                }
                                userData.fimExpediente = {
                                    hora: 16,
                                    minutos: 30
                                };
                                break;
                            case '987':
                                userData.cargo = 'Segurança';
                                userData.inicioEscala = {
                                    hora: 19,
                                    minutos: 30
                                }
                                userData.intervalo = {
                                    hora: 2,
                                    minutos: 30
                                }
                                userData.fimExpediente = {
                                    hora: 4,
                                    minutos: 30
                                };
                                break;
                            case '872':
                                userData.cargo = 'Serviços gerais';
                                userData.inicioEscala = {
                                    hora: 19,
                                    minutos: 30
                                }
                                userData.intervalo = {
                                    hora: 2,
                                    minutos: 30
                                }
                                userData.fimExpediente = {
                                    hora: 4,
                                    minutos: 30
                                };
                                break;
                            default:
                                break;
                        }

                        userData.pontoBatido = false;

                        localStorage.setItem('savedata', JSON.stringify(userData));
                    }}>
                        Cadastrar
                    </button>
                    <Modal 
                    isOpen={open}
                    title={'Conta criada com sucesso!'}
                    description={'Faça login para continuar'}
                    />
                    <p className={styles.ftext}>Ao clicar em cadastrar, você concorda com nossos <Link to={'/termos-privacidade'}><br></br><span> termos de serviço e política de privacidade</span></Link></p>
                </form>
            </section>
        </div>
    );
}