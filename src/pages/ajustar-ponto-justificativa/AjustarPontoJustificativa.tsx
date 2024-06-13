import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Navigation } from "../../components/navigation-menu/Navigation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { Confirmacao } from "../../components/confirmacao/confirmacao";

export const AjustarPontoJustificativa:React.FC = () => {

    document.title = 'REClock - Ajustar ponto'

    useEffect(()=>{
        const ajustarPonto = document.getElementById('ajustar-pontos') as HTMLElement;
        ajustarPonto.style.opacity = '1';
    }, [])

    const horarioData = new Date();

    const dia = (horarioData.getDate() < 10) ? '0' + horarioData.getDate() : String(horarioData.getDate());
    const mes = ((horarioData.getMonth() + 1) < 10) ? '0' + (horarioData.getMonth() + 1) : String(horarioData.getMonth() + 1)
    const ano = horarioData.getFullYear();

    const [validaInputs, setValidaInputs] = useState({
        input1: false,
        input2: false,
        input3: true,
        input4: false 
    });

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
                                    <input name="problema" type="radio" id="problemas-tecnicos" onChange={()=>{
                                        const tecnicos = document.getElementById('valor-input-tecnicos') as HTMLElement;
                                        const atestados = document.getElementById('valor-input-atestados') as HTMLElement;

                                        tecnicos.style.display = 'block';
                                        atestados.style.display = 'none';

                                        setValidaInputs(validaInputs => ({...validaInputs, input1: true}));
                                    }}/>
                                    <label htmlFor="problemas-tecnicos">Atestados / Declarações</label>
                                </div>
                                <div className={styles.inputradio}>
                                    <input name="problema" type="radio" id="atestados-declaracoes" onChange={()=>{
                                        const atestados = document.getElementById('valor-input-atestados') as HTMLElement;
                                        const tecnicos = document.getElementById('valor-input-tecnicos') as HTMLElement;

                                        atestados.style.display = 'block';
                                        tecnicos.style.display = 'none';

                                        setValidaInputs(validaInputs => ({...validaInputs, input1: true}));
                                    }}/>
                                    <label htmlFor="atestados-declaracoes">Problemas técnicos</label>
                                </div>
                            </div>

                            <select className={styles.inputjustificativa} name="valor-input-tecnicos" id="valor-input-tecnicos" onChange={()=>{
                                setValidaInputs(validaInputs => ({...validaInputs, input2: true}));
                            }}>
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
        
                            <select className={styles.inputjustificativa} name="valor-input-atestados" id="valor-input-atestados" onChange={()=>{
                                setValidaInputs(validaInputs => ({...validaInputs, input2: true}));
                            }}>
                                <option value="none" selected>Selecione</option>
                                <option value="computadorcolaborador">Computador colaborador</option>
                                <option value="computadorempresa">Computador empresa</option>
                                <option value="energia">Energia</option>
                                <option value="internet">Internet</option>
                            </select>

                            <h3>Selecione a data que deseja ajustar:</h3>

                            <select name="valor-input-horario" id="valor-input-horario">
                                <option value={`${dia}/${mes}/${ano}`}>{`${dia}/${mes}/${ano}`}</option>
                                <option value={`${horarioData.getDate() - 1}/${mes}/${ano}`}>{`${horarioData.getDate() - 1}/${mes}/${ano}`}</option>
                                <option value={`${horarioData.getDate() - 2}/${mes}/${ano}`}>{`${horarioData.getDate() - 2}/${mes}/${ano}`}</option>
                            </select>

                            <h3>Anexe aqui o seu atestado ou protocolo:</h3>

                            <div className={styles.inputfile}>
                                <input type="file" id="file" accept=".jpg, .jpeg, .png, .pdf" onChange={() => {
                                    const spantext = document.getElementById('spantext') as HTMLElement;

                                    spantext.textContent = '(1) Arquivo recebido';
                                    setValidaInputs(validaInputs => ({...validaInputs, input4: true}));
                                }}/>
                                <label htmlFor="file">
                                    <span>
                                        Escolher arquivo
                                    </span>
                                    <span id="spantext">
                                        Formato aceitos: pdf, jpg, png
                                    </span>
                                </label>
                            </div>
                            
                            <button type="reset" onClick={(e)=>{
                                if (validaInputs.input1 == false || validaInputs.input2 == false || validaInputs.input3 == false || validaInputs.input4 == false) {
                                    e.preventDefault();
                                    console.log(validaInputs);
                                } else {
                                    const confirmacao = document.getElementById('confirmacao') as HTMLElement;

                                    const spantext = document.getElementById('spantext') as HTMLElement;
                                    spantext.textContent = 'Formato aceitos: pdf, jpg, png';

                                    const input1 = document.getElementById('valor-input-tecnicos') as HTMLElement;
                                    const input2 = document.getElementById('valor-input-atestados') as HTMLElement;

                                    input1.style.display = 'none';
                                    input2.style.display = 'none';

                                    confirmacao.style.display = 'block';

                                    setTimeout(() => {
                                        confirmacao.style.display = 'none';
                                    }, 3000);
                                }
                            }}>Enviar solicitação</button>
                        </form>
                    </div>
                </div>
            </section>
            <Confirmacao title="Justificativa enviada" hora={`${(horarioData.getHours() < 10) ? '0' + horarioData.getHours() : String(horarioData.getHours())}:${(horarioData.getMinutes() < 10) ? '0' + horarioData.getMinutes() : String(horarioData.getMinutes())}:${(horarioData.getSeconds() < 10) ? '0' + horarioData.getSeconds() : String(horarioData.getSeconds())}`} data={`${(horarioData.getDate() < 10) ? '0' + horarioData.getDate() : horarioData.getDate()}/${(horarioData.getMonth() + 1 < 10) ? '0' + (horarioData.getMonth() + 1) : horarioData.getMonth() + 1}/${horarioData.getFullYear()}`}/>
        </div>
    )
}