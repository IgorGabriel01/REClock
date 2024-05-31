import Img from "../../assets/img/logos/logo-reclock.png";
import Icon from "../../assets/img/icon.png";
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import styles from "./styles.module.scss";

import { useState } from "react";
import { ModalTask } from "../../pages/modaltask/MotalTask";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


//import Mapa from "./Mapa";

export const Navigation: React.FC = () => {
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
                <div className={styles.infos}>
                    <img src={Icon} alt="Ícone perfil" />
                    <div>
                        <p>Ana Beatriz da Silva</p>
                        <div>
                            <p>389873</p>
                            <p>Software Dev</p>
                        </div>
                    </div>
                    <LogoutIcon className={styles.iconlogout} />
                </div>
            </nav>
        </div>
    );
}

export default Navigation;