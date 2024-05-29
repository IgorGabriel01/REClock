import { Integrante } from "../../components/integrante/Integrante";
import logo from "../../assets/img/logos/logo-reclock.png";
import Imgigor from "../../assets/img/integrantes-img/integrante-igorgabriel.jpg";
import Imgbrunno from "../../assets/img/integrantes-img/integrante-brunnoassuncao.jpg";
import Imgingrid from "../../assets/img/integrantes-img/integrante-ingridsantos.jpeg";
import Imgnayane from "../../assets/img/integrantes-img/integrante-nayanelopes.jpg";
import Imgdirelly from "../../assets/img/integrantes-img/integrante-direlly.jpg";
import styles from "./styles.module.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Sobre:React.FC = ()=> {
    return (
        <main className={styles.sobre}>
            <ArrowBackIcon className={styles.arrow} onClick={()=> {
                window.history.back();
            }}/>

            <div>
                <img className={styles.logoreclock} src={logo} alt="Logo REClock" />
                <p className={styles.reclock}>REClock</p>
            </div>

            <h1>Conheça nosso time</h1>

            <section>
                <Integrante img={Imgbrunno} nome="Brunno Assunção" descricao="Nasci em Recife, hoje estou com 22 anos e cursando Análise e Desenvolvimento de Sistemas na UNIT. Desenvolver um software é arte, corrigir bug, faz parte. Domínio em Backend, onde procuro me qualificar cada vez mais." links={{ linkedin: 'https://www.linkedin.com/in/brunnoassuncao/', github: 'https://github.com/brunnolink'}} />

                <Integrante img={Imgdirelly} nome="Direlly Kaline" descricao="Nascida em Recife, tenho 18 anos e sou graduanda em Análise e Desenvolvimento de Sistemas pela UNIT, ainda estou descobrindo os horizontes na área de TI." links={{ linkedin: 'https://www.linkedin.com/in/direlly-kaline-barbosa-2b0b902b6/', github: 'https://github.com/DirellyBarbosa'}} />

                <Integrante img={Imgigor} nome="Igor Gabriel" descricao="Nascido em Paulista, atualmente com 23 anos e cursando Análise e Desenvolvimento de Sistemas na UNIT e também Engenharia de Software na Faculdade Pitágoras, apaixonado pela área do desenvolvimento, atualmente com mais domínio nas tecnologias do front-end e UX Design." links={{ linkedin: 'https://www.linkedin.com/in/igorgabriel-dev/', github: 'https://github.com/IgorGabriel01'}} />

                <Integrante img={Imgingrid} nome="Ingrid Santos" descricao="Nascida em Recife, tenho dezenove anos e sou graduanda em Análise e Desenvolvimento de Sistemas pela UNIT e Ciências Sociais pela Universidade Federal De Pernambuco. Tenho um grande apreço pela área de Gestão de Projetos em TI e também possuo interesse especial pelo desenvolvimento backend." links={{ linkedin: 'http://linkedin.com/in/-ingridsantos', github: 'https://github.com/Ingridvsa'}} />

                 <Integrante img={Imgigor} nome="Karen" descricao="descricao" links={{ linkedin: 'https://www.linkedin.com/in/igorgabriel-dev/', github: 'https://github.com/IgorGabriel01'}} />

                <Integrante img={Imgnayane} nome="Nayane Lopes" descricao="Nascida em Recife, atualmente com 23 anos, formada em Multimidia para jogos digitais e atualmente graduanda em Análise e desenvolvimento de sistemas pela UNIT. Apaixonada por Business Intelligence e Cibersegurança." links={{ linkedin: 'https://www.linkedin.com/in/nayanellopes/', github: 'https://github.com/nayanelopes'}} />
            </section>
        </main>
    )
}
