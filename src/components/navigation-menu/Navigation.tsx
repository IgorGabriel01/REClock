import Img from "../../assets/img/logos/logo-reclock.png";
import Icon from "../../assets/img/icons/usuario-de-perfil.png";
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import styles from "./styles.module.scss";
import { ModificarPerfil } from "../../components/modificar-pefil/ModificarPerfil";
import { useContext, useEffect, useState } from "react";
import { DadosContext } from "../../services/ContextProvider";
import { ModalTask } from "../../pages/modal-task/MotalTask";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const Navigation: React.FC = () => {

    const modalData = useContext(DadosContext);
    const {userData, setUserData} = modalData;

    useEffect(()=>{
        setUserData({...userData, modalOpen: false});
    }, []);
    
    const data = localStorage.getItem('savedata') as string;
    const parsedData = JSON.parse(data);

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className={styles.navigationContainer}>
            <nav className={styles.navigation}>
                <div className={styles.firstdivinfos}>
                    <div>
                        <img src={Img} alt="Logo REClock" />
                        <p>REClock</p>
                    </div>
                    <ul>
                        <li> <HomeIcon /> Home</li>
                        <li> <CalendarMonthIcon /> Meus pontos</li>
                        <li> <EditCalendarIcon /> Ajustar pontos</li>
                    </ul>
                </div>
                <div className={styles.addtasks}>
                    <p>Vamos começar</p>
                    <p>Criar ou adicionar novas tarefas não poderia ser mais fácil</p>
                    <div>
                       <AddCircleOutlineIcon className={styles.add}/>
                       <button className={styles.button} type="submit" onClick={() => setOpen(true)}> 
                        Adicionar nova tarefa</button> 
                      
                    </div>
                    
                </div> 
                <ModalTask
                isOpen={open} 
                onClose={() => setOpen(false)}/>
                <div className={styles.seconddivinfos}>
                    <ul>
                        <li> <NotificationsIcon /> Notificações</li>
                        <li> <SettingsIcon /> Configurações</li>
                        <li> <HelpOutlineIcon /> Suporte</li>
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
                    <LogoutIcon className={styles.iconlogout}/>
                </div>
            </nav>
            
            <ModificarPerfil id="modificarperfil" elementNome={document.getElementById('nomenavigation') as HTMLElement} elementMatricula={document.getElementById('matriculanavigation') as HTMLElement} elementCargo={document.getElementById('cargonavigation') as HTMLElement} urlImg={document.getElementById('foto-perfil')}/>
        </div>
    );
}