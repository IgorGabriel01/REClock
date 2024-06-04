import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

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

    useEffect(()=>{
        setAtualPage(`${diasDaSemana[dataHoraAtual.getDay()]}, ${data} de ${mes} de ${ano}`);

        if (parsedDataLocal.pontoBatido == false) {
            setTitleButton('Bater ponto');
        } else if(parsedDataLocal.pontoBatido == true && dataHoraAtual.getHours() < parsedDataLocal.intervalo.hora) {
            setTitleButton('Iniciar intervalo');
        } else if(parsedDataLocal.pontoBatido == true && dataHoraAtual.getHours() > parsedDataLocal.intervalo.hora && dataHoraAtual.getHours() > parsedDataLocal.intervalo.hora + 1){
            setTitleButton('Encerrar intervalo');
        } else if (parsedDataLocal.pontoBatido == true && dataHoraAtual.getHours() > parsedDataLocal.intervalo.hora + 1){
            setTitleButton('Marcar saída');
    }}, [])

    return (
        <header className={styles.header}>
            <div>
                <h1>{atualPage}</h1>
                <button onClick={(e)=>{
                    const valorBotao = e.target as HTMLElement;
                    const textValorBotao = valorBotao.textContent as string;

                    if(textValorBotao === 'Bater ponto'){
                        setTitleButton('Iniciar intervalo');
                        parsedDataLocal.horario = `${hora}:${minutos}:${segundos}`;
                        parsedDataLocal.data = `${(dataHoraAtual.getDate() < 10) ? '0' + dataHoraAtual.getDate() : dataHoraAtual.getDate()}/${(dataHoraAtual.getMonth() + 1 < 10) ? '0' + (dataHoraAtual.getMonth() + 1) : dataHoraAtual.getMonth() + 1}/${dataHoraAtual.getFullYear()}`;
                        parsedDataLocal.pontoBatido = true;
                    } else if (textValorBotao === 'Iniciar intervalo') {
                        setTitleButton('Encerrar intervalo');
                    } else if(textValorBotao === 'Encerrar intervalo') {
                        setTitleButton('Marcar saída');
                    } else if(textValorBotao === 'Marcar saída'){
                        e.preventDefault();
                        console.log(document.querySelector('header div button'));
                    }
                }}>{titleButton}</button>
            </div>
        </header>
    )
}