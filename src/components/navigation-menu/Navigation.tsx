import Img from "../../assets/img/logos/logo-reclock.png";
import Icon from "../../assets/img/icons/usuario-de-perfil.png";
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import styles from "./styles.module.scss";
import { ModificarPerfil } from "../../components/modificar-pefil/ModificarPerfil";
import { useContext, useEffect, useState } from "react";
import { DadosContext } from "../../services/ContextProvider";
import { ModalTask } from "../../pages/modal-task/MotalTask";
import { Link } from "react-router-dom";
import HistoryIcon from '@mui/icons-material/History';

export const Navigation: React.FC = () => {

    const modalData = useContext(DadosContext);
    const {userData, setUserData} = modalData;

    useEffect(()=>{
        setUserData({...userData, modalOpen: false});
    }, []);
    
    const data = localStorage.getItem('savedata') as string;
    const parsedData = JSON.parse(data);

    const [open, setOpen] = useState<boolean>(false);
    const [taskCount, setTaskCount] = useState<number>(0);
    const [message, setMessage] = useState('Adicionar uma nova tarefa');

    const handleTaskAdded = (count: number) => {
        setTaskCount(count);
        if (count === 1) {
            setMessage(`Você tem ${count} tarefa criada`);
        } else if(count > 1) {
            setMessage(`Você tem ${count} tarefas criadas`);
        }
         else {
            setMessage('Adicione uma nova tarefa');
        }
    };

    return (
        <div className={styles.navigationContainer}>
            <nav className={styles.navigation}>
                <div className={styles.firstdivinfos}>
                    <div>
                        <img src={Img} alt="Logo REClock" />
                        <p>REClock</p>
                    </div>
                    <ul>
                        <Link className={styles.linkli} to={'/home'}><li id="home" onClick={()=>{
                            const confirm = document.getElementById('confirmacao-main') as HTMLElement;
                            confirm.style.display = 'none';
                        }}> <HomeIcon /> Home</li></Link>
                        <Link className={styles.linkli} to={'/meus-pontos'}><li id="meus-pontos"> <CalendarMonthIcon /> Meus pontos</li></Link> 
                        <Link className={styles.linkli} to={'/ajustar-ponto'}><li id="ajustar-pontos"> <EditCalendarIcon /> Ajustar pontos</li></Link> 
                        <Link className={styles.linkli} to={'/banco-de-horas'}><li id="banco-hora"> <HistoryIcon /> Banco de horas</li></Link> 
                    </ul>
                </div>
                <div className={styles.addtasks}>
                    <p>Vamos começar</p>
                    <p>Criar ou adicionar novas tarefas não poderia ser mais fácil</p>
                    <div>
                       <AddTaskOutlinedIcon className={styles.add}/>
                       <button className={styles.button} type="submit" onClick={() => setOpen(true)}> 
                       {message}</button> 
                    </div>
                    
                </div> 
                <ModalTask
                isOpen={open} 
                onClose={() => setOpen(false)}
                onTaskAdded={handleTaskAdded}/>
                <div className={styles.seconddivinfos}>
                    <ul>
                        <Link className={styles.linkli} to='/suporte'> <li> <NotificationsIcon /> Notificações</li></Link>
                        <Link className={styles.linkli} to='/suporte'><li> <SettingsIcon /> Configurações</li></Link>
                        <Link className={styles.linkli} to='/suporte'><li id="suporte"><HelpOutlineIcon />Suporte</li></Link> 
                    </ul>
                </div>
                <div className={styles.infos} onClick={()=>{
                    const modificarperfil = document.getElementById('modificarperfil') as HTMLElement;
                    
                    if (userData.modalOpen === false) {
                        modificarperfil.style.display = 'block';

                        setUserData({...userData, modalOpen: true});
                    }

                    }}>
                    <img src={Icon} id="foto-perfil" alt="Ícone perfil" />
                    <div className={styles.infosi}>
                        <p id="nomenavigation">{parsedData.nome}</p>
                        <div>
                            <p id="matriculanavigation">{parsedData.matricula}</p>
                            <p>•</p>
                            <p id="cargonavigation">{parsedData.cargo}</p>
                        </div>
                    </div>
                    <Link to={"/"}>
                        <LogoutIcon className={styles.iconlogout}/>
                    </Link>
                </div>
            </nav>
            
            <ModificarPerfil id="modificarperfil" elementNome={document.getElementById('nomenavigation') as HTMLElement} elementMatricula={document.getElementById('matriculanavigation') as HTMLElement} elementCargo={document.getElementById('cargonavigation') as HTMLElement} urlImg={document.getElementById('foto-perfil')}/>
        </div>
    );
}