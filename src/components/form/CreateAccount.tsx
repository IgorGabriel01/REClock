import  React, { useState } from 'react';
import { Input } from '../input/Input';
import styles from "../form/style.module.scss";
import Modal from '../popup/modal';



export const CreateAccount: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Evita o comportamento padrão do formulário
        console.log('Form submitted');
        setOpen((prevOpen) => !prevOpen); // Alterna o estado do modal
        console.log('Modal open state:', !open);
    };
    
    const [open, setOpen] = useState<boolean>(false)
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.h1}>Crie sua conta</h1>
            <p>Cadastre seus dados</p>
            <Input label="Nome completo" tipoInput="text" placeholder='Digite seu nome' />
            <Input label="Matrícula" tipoInput="number"  placeholder='Digite sua matrícula' />
            <Input label="Email" tipoInput="email" placeholder='Digite seu email' />
            <Input label="Senha" tipoInput="password" placeholder='Digite sua senha' />
            <Input label="Confirme sua senha" tipoInput="password"  placeholder='Confirme sua senha' />

            <button type="submit" onClick={() => setOpen(open)}>Cadastrar</button>

            <p className={styles.termos}>Ao clicar em cadastra-se, você concorda com nossos <strong>Termos de serviço e Política de Privacidade</strong></p>
            <Modal 
            isOpen={open}
            title={'Conta criada com sucesso!'}
            description={'Faça login para continuar'}/>
        </form>
    );
}