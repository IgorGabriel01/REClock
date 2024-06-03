import { createContext, useState } from 'react';
  
interface UserData {
    nome?: string;
    matricula?: string;
    email?: string;
    senha: string;
    cargo?: string;
    modalOpen?: boolean;
    horario?: string;
    data?: string;
    turno?: string;
    inicioEscala?: {
        hora?: number,
        minutos?: number
    };
    intervalo?: {
        hora?: number,
        minutos?: number
    };
    fimExpediente?: {
        hora?: number,
        minutos?: number
    };
    pontoBatido?: boolean;
    entradaExpediente?: {
        hora?: number,
        minutos?: number,
        segundos?: number
    }
    saidaExpediente?: {
        hora?: number,
        minutos?: number,
        segundos?: number
    }
    comecoIntervalo?: {
        hora?: number,
        minutos?: number,
        segundos?: number
    }
    terminoIntervalo?: {
        hora?: number,
        minutos?: number,
        segundos?: number
    };
}

export const DadosContext = createContext<{ userData: UserData, setUserData: React.Dispatch<React.SetStateAction<UserData>> }>({
    userData: {
      nome: '',
      matricula: '',
      email: '',
      senha: '',
      cargo: ''
    },
    setUserData: () => {}
});

interface ProviderChildren {
    children: React.ReactNode;
}

export const Provider: React.FC<ProviderChildren> = ( {children}) => {
    const [userData, setUserData] = useState<UserData>({
        nome: '',
        matricula: '',
        email: '',
        senha: '',
        cargo: ''
    });

    return (
        <DadosContext.Provider value={{userData, setUserData}}>
            {children}
        </DadosContext.Provider>
    )
};