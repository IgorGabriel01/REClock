import { useEffect } from "react";
import styles from "./styles.module.scss";
import { Navigation } from "../../components/navigation-menu/Navigation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

export const AjustarPontoJustificativa:React.FC = () => {

    document.title = 'REClock - Ajustar ponto'

    useEffect(()=>{
        const ajustarPonto = document.getElementById('ajustar-pontos') as HTMLElement;
        ajustarPonto.style.opacity = '1';
    }, [])

    const data = new Date();

    const dia = (data.getDate() < 10) ? '0' + data.getDate() : String(data.getDate());
    const mes = ((data.getMonth() + 1) < 10) ? '0' + (data.getMonth() + 1) : String(data.getMonth() + 1)
    const ano = data.getFullYear();

    return (
        <div className={styles.ajustarpontojustificativa}>
            <Navigation />
            <section>
                <header>
                    <Link to='/ajustar-ponto' >< ArrowBackIcon className={styles.arrowlink}/></Link>
                    <h1>Ajustar ponto</h1>
                </header>
        
                <div className={styles.divp}>
                    <div className={styles.sectionjustificativa}>
                        <h2>Solicitação de reajuste de ponto</h2>
                        <p>Informe os dados da correção para solicitar reajuste </p>
                        <p> A justificativa será analisada e reajustada em até 30 dias.</p> 
        
                        <form action="">
                            <h3>Justificativa</h3>

                            <div className={styles.divpinputradio}>
                                <div className={styles.inputradio}>
                                    <input name="problema" type="radio" id="problemas-tecnicos"/>
                                    <label htmlFor="problemas-tecnicos">Problemas técnicos</label>
                                </div>
                                <div className={styles.inputradio}>
                                    <input name="problema" type="radio" id="atestados-declaracoes"/>
                                    <label htmlFor="atestados-declaracoes">Atestados / Declarações</label>
                                </div>
                            </div>
        
                            <select name="valor-input-tecnicos" id="valor-input-tecnicos">
                                <option value="none" selected>Selecione</option>
                                <option value="acompanhamentoconjugegestante">Acompanhamento cônjuge gestante</option>
                                <option value="acompanhamentoidoso">Acompanhamento idoso</option>
                                <option value="alistamentoeleitoral">Alistamento eleitoral</option>
                                <option value="audiencia">Audiência</option>
                                <option value="boletimdeocorrencia">Boletim de ocorrência</option>
                                <option value="casamento">Casamento</option>
                                <option value="compareceraojuizo">Comparecer a juízo</option>
                                <option value="docacaodesangue">Doação de sangue</option>
                                <option value="emissaodedocumentoslegais">Emissão de documentos legais</option>
                                <option value="falecimento">Falecimento</option>
                                <option value="licencaparental">Licença parental</option>
                                <option value="reuniaoescolar">Reunião escolar</option>
                                <option value="servicomilitar">Serviço militar</option>
                                <option value="vestibular">Vestibular</option>
                            </select>
        
                            <select name="valor-input-atestados" id="valor-input-atestados">
                                <option value="none" selected>Selecione</option>
                                <option value="computadorcolaborador">Computador colaborador</option>
                                <option value="computadorempresa">Computador empresa</option>
                                <option value="energia">Energia</option>
                                <option value="internet">Internet</option>
                            </select>

                            <h3>Selecione a data que deseja ajustar:</h3>

                            <select name="valor-input-horario" id="valor-input-horario">
                                <option value={`${dia}/${mes}/${ano}`}>{`${dia}/${mes}/${ano}`}</option>
                                <option value={`${'0' + (data.getDate() - 1)}/${mes}/${ano}`}>{`${'0' + (data.getDate() - 1)}/${mes}/${ano}`}</option>
                                <option value={`${'0' + (data.getDate() - 2)}/${mes}/${ano}`}>{`${'0' + (data.getDate() - 2)}/${mes}/${ano}`}</option>
                            </select>

                            <h3>Anexe aqui o seu atestado ou protocolo:</h3>

                            <div className={styles.inputfile}>
                                <label htmlFor="file">
                                    <span>
                                        Escolher arquivo
                                    </span>
                                    <span>
                                        Formato aceitos: pdf, jpg, png
                                    </span>
                                </label>
                                <input type="file" id="file"/>
                            </div>
                            

                            <button>Enviar solicitação</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}