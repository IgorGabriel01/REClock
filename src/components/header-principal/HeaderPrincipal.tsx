import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Confirmacao } from "../confirmacao/confirmacao";
import { Link } from "react-router-dom";

interface PropsHeader {
    atualPage: string;
}

export const HeaderPrincipal:React.FC<PropsHeader> = (props) => {
    const [atualPage, setAtualPage] = useState(props.atualPage);
    const [titleButton, setTitleButton] = useState('');

    const dataLocal = localStorage.getItem('pontoBatido') as string;
    const parsedDataLocal = JSON.parse(dataLocal);

    const dataHoraAtual = new Date();

    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    const hora = (dataHoraAtual.getHours() < 10) ? '0' + dataHoraAtual.getHours() : String(dataHoraAtual.getHours()); 
    const minutos = (dataHoraAtual.getMinutes() < 10) ? '0' + dataHoraAtual.getMinutes() : String(dataHoraAtual.getMinutes());
    const segundos = (dataHoraAtual.getSeconds() < 10) ? '0' + dataHoraAtual.getSeconds() : String(dataHoraAtual.getSeconds());

    const data = dataHoraAtual.getDate() < 10 ? "0" + dataHoraAtual.getDate() : dataHoraAtual.getDate();
    const mes = dataHoraAtual.toLocaleString('pt-BR', { month: 'long' });
    const ano = dataHoraAtual.getFullYear();

    const [title, setTitle] = useState('');

    useEffect(()=>{
        setAtualPage(`${diasDaSemana[dataHoraAtual.getDay()]}, ${data} de ${mes} de ${ano}`);

        if (parsedDataLocal.pontoBatido == false) {
            setTitleButton('Bater ponto');
        } else {
            setTitleButton('Iniciar intervalo');
        }
    }, [])

    return (
        <header className={styles.header}>
            <div className={styles.divheader}>
                <h1>{atualPage}</h1>
                <Link to='/' onClick={(e)=>{
                        const valorBotao = e.target as HTMLElement;
                        const textValorBotao = valorBotao.textContent as string;

                        const confirmacao = document.getElementById('confirmacao') as HTMLElement;

                        if(textValorBotao === 'Bater ponto'){
                            e.preventDefault();
                            setTitleButton('Iniciar intervalo');
                            parsedDataLocal.horario = `${hora}:${minutos}:${segundos}`;
                            parsedDataLocal.data = `${(dataHoraAtual.getDate() < 10) ? '0' + dataHoraAtual.getDate() : dataHoraAtual.getDate()}/${(dataHoraAtual.getMonth() + 1 < 10) ? '0' + (dataHoraAtual.getMonth() + 1) : dataHoraAtual.getMonth() + 1}/${dataHoraAtual.getFullYear()}`;
                            parsedDataLocal.pontoBatido = true;

                            setTitle('Ponto batido');
                            
                            confirmacao.style.display = 'block';

                            setTimeout(() => {
                                confirmacao.style.display = 'none';
                            }, 2000);
                        } else if (textValorBotao === 'Iniciar intervalo') {
                            e.preventDefault();
                            setTitleButton('Encerrar intervalo');

                            setTitle('Intervalo iniciado');

                            confirmacao.style.display = 'block';

                            setTimeout(() => {
                                confirmacao.style.display = 'none';
                            }, 2000);
                        } else if(textValorBotao === 'Encerrar intervalo') {
                            e.preventDefault();
                            setTitleButton('Marcar saída');

                            setTitle('Intervalo finalizado');

                            confirmacao.style.display = 'block';

                            setTimeout(() => {
                                confirmacao.style.display = 'none';
                            }, 2000);
                        } else if(textValorBotao === 'Marcar saída'){
                            
                            console.log(document.querySelector('header div button'));
                        }
                    }}>
                    <button>{titleButton}</button>
                </Link>
            </div>
            <Confirmacao title={title} hora={`${(dataHoraAtual.getHours() < 10) ? '0' + dataHoraAtual.getHours() : String(dataHoraAtual.getHours())}:${(dataHoraAtual.getMinutes() < 10) ? '0' + dataHoraAtual.getMinutes() : String(dataHoraAtual.getMinutes())}:${(dataHoraAtual.getSeconds() < 10) ? '0' + dataHoraAtual.getSeconds() : String(dataHoraAtual.getSeconds())}`} data={`${(dataHoraAtual.getDate() < 10) ? '0' + dataHoraAtual.getDate() : dataHoraAtual.getDate()}/${(dataHoraAtual.getMonth() + 1 < 10) ? '0' + (dataHoraAtual.getMonth() + 1) : dataHoraAtual.getMonth() + 1}/${dataHoraAtual.getFullYear()}`}/>
        </header>
    )
}