import React, { useContext, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FilterIcon from '@mui/icons-material/Filter';
import styles from "./styles.module.scss";
import Img from "../../assets/img/icons/usuario-de-perfil.png";
import { DadosContext } from '../../services/ContextProvider';

interface ModificarPerfilProp {
    id: string;
    elementNome: HTMLElement;
    elementMatricula: HTMLElement;
    elementCargo: any;
    urlImg: any;
}

export const ModificarPerfil: React.FC<ModificarPerfilProp> = (props) => {
    const [validaMudanca, setValidaMudanca] = useState({
        input1: false,
        input2: false,
        input3: false
    });

    const modalData = useContext(DadosContext);
    const { userData, setUserData } = modalData;

    const [profileImage, setProfileImage] = useState("");

    const data: any = localStorage.getItem("savedata");
    const parsedData = JSON.parse(data);

    function entradaValueEventOne(eventElement: any, context: string) {
        eventElement.target.classList.add(styles.inputerror);
        eventElement.target.classList.remove(styles.input);
        eventElement.target.nextElementSibling.textContent = context;
        eventElement.target.nextElementSibling.classList.add(styles.spanerror);
        eventElement.target.nextElementSibling.classList.remove(styles.span);
    }

    function entradaValueEventTwo(eventElement: any) {
        eventElement.target.classList.remove(styles.inputerror);
        eventElement.target.classList.add(styles.input);
        eventElement.target.nextElementSibling.classList.remove(styles.spanerror);
        eventElement.target.nextElementSibling.classList.add(styles.span);
    }

    return (
        <div className={styles.backmodal} id={props.id}>
            <section className={styles.modalperfil} >
                <div className={styles.editar}>
                    <h2>Editar Perfil</h2>
                    <CloseIcon onClick={() => {
                        const modificarperfil = document.getElementById('modificarperfil') as HTMLElement;
                        if (userData.modalOpen === true) {
                            modificarperfil.style.display = 'none';
                            setUserData({ ...userData, modalOpen: false });
                        } else {
                            modificarperfil.style.display = 'block';
                            setUserData({ ...userData, modalOpen: true });
                        }
                    }} />
                </div>

                <div className={styles.sectioninfospai}>
                    <div className={styles.firstinfos}>
                        <div className={styles.imgdiv}>
                            <img src={profileImage ?  profileImage : Img} id='perfil' alt="Imagem perfil" />
                            <div>
                                <label htmlFor="imgfotoperfil"><FilterIcon /> Editar foto</label>
                                <input id='imgfotoperfil' type="file" accept=".jpg,.png," onChange={(e)=>{
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                            setProfileImage(reader.result as string);
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }}/>
                            </div>
                        </div>
                        <div>
                            <p>Nome: <span id='nomeinput'>{parsedData.nome}</span></p>
                            <p>Matrícula: <span id='matriculainput'>{parsedData.matricula}</span></p>
                            <p>Cargo: <span id='cargoinput'>{parsedData.cargo}</span></p>
                            <p>E-mail: <span id='emailinput'>{parsedData.email}</span></p>
                        </div>
                    </div>

                    <form className={styles.forminfos} action='reset'>
                        <div>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id='nome' onChange={(e) => {
                                if (e.target.value.length <= 10) {
                                    entradaValueEventOne(e, 'Nome precisa ter pelo menos 10 caracteres');
                                    setValidaMudanca({ ...validaMudanca, input1: false });
                                } else if (e.target.value === parsedData.nome) {
                                    entradaValueEventOne(e, 'O nome não pode ser igual ao anterior');
                                    setValidaMudanca({ ...validaMudanca, input1: false });
                                } else {
                                    entradaValueEventTwo(e);
                                    setValidaMudanca({ ...validaMudanca, input1: true });
                                }
                            }} />
                            <span>Texto genérico</span>
                        </div>
                        <div>
                            <label htmlFor="matricula">Matrícula</label>
                            <input type="number" id='matricula' onChange={(e) => {
                                if (e.target.value.length < 6) {
                                    entradaValueEventOne(e, 'Sua matrícula precisa ter 6 números');
                                    setValidaMudanca({ ...validaMudanca, input2: false });
                                } else if (e.target.value === parsedData.matricula) {
                                    entradaValueEventOne(e, 'A matrícula não pode ser igual a anterior');
                                    setValidaMudanca({ ...validaMudanca, input2: false });
                                } else {
                                    entradaValueEventTwo(e);
                                    setValidaMudanca({ ...validaMudanca, input2: true });

                                    let validaCargo: string = '';
                                    let percorrer = e.target.value as any;

                                    for (let i = 0; i < percorrer.length - 3; i++) {
                                    validaCargo = validaCargo + percorrer[i];
                                    }

                                    switch (validaCargo) {
                                        case '123':
                                                setUserData({...parsedData, cargo: 'Dev. Front-End'});
                                            break;
                                        case '321':
                                                setUserData({...parsedData, cargo: 'Dev. Back-End'});
                                            break;
                                        case '875':
                                                setUserData({...parsedData, cargo: 'Gestor'});
                                            break;
                                        case '432':
                                                setUserData({...parsedData, cargo: 'Scrum Master'});
                                            break;
                                        case '532':
                                                setUserData({...parsedData, cargo: 'Recursos Humanos'});
                                            break;
                                        default:
                                            break;
                                    }
                                } 
                            }} />
                            <span>Texto genérico</span>
                        </div>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id='email' onChange={(e) => {
                                if (!e.target.value.includes("@") || !e.target.value.includes(".com")) {
                                    entradaValueEventOne(e, 'Digite um E-mail válido');
                                    setValidaMudanca({ ...validaMudanca, input3: false });
                                } else if (e.target.value === parsedData.email) {
                                    entradaValueEventOne(e, 'O E-mail não pode ser igual ao anterior');
                                    setValidaMudanca({ ...validaMudanca, input3: false });
                                } else {
                                    entradaValueEventTwo(e);
                                    setValidaMudanca({ ...validaMudanca, input3: true });
                                }
                            }} />
                            <span>Texto genérico</span>
                        </div>
                    </form>
                </div>

                <button onClick={(e) => {
                    const nome = document.getElementById('nome') as HTMLInputElement;
                    const matricula = document.getElementById('matricula') as HTMLInputElement;
                    const email = document.getElementById('email') as HTMLInputElement;

                    const nomeinput = document.getElementById('nomeinput') as HTMLElement;
                    const matriculainput = document.getElementById('matriculainput') as HTMLElement;
                    const emailinput = document.getElementById('emailinput') as HTMLElement;
                    const cargoinput = document.getElementById('cargoinput') as any;

                    if (nome.value === '') {
                        e.preventDefault();
                    } else if (validaMudanca.input1 === true) {
                        parsedData.nome = nome.value;
                        nomeinput.textContent = parsedData.nome;
                        props.elementNome.textContent = parsedData.nome;
                        nome.value = '';
                    }

                    if (matricula.value === '') {
                        e.preventDefault();
                    } else if (validaMudanca.input2 === true) {
                        parsedData.matricula = matricula.value;
                        matriculainput.textContent = parsedData.matricula;
                        props.elementMatricula.textContent = parsedData.matricula;
                        matricula.value = '';
                        cargoinput.textContent = userData.cargo;
                        props.elementCargo.textContent = userData.cargo;
                    }

                    if (email.value === '') {
                        e.preventDefault();
                    } else if (validaMudanca.input3 === true) {
                        parsedData.email = email.value;
                        emailinput.textContent = parsedData.email;
                        email.value = '';
                    }

                    if (profileImage) {
                        const perfil = props.urlImg;

                        perfil.setAttribute('src', profileImage);
                    }

                }}>Salvar alterações</button>
            </section>
        </div>
    )
}