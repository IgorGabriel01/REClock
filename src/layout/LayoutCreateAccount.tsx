import { Aside } from "../components/aside/Aside"
import { CreateAccount } from "../components/form/CreateAccount"


export const LayoutCadastro: React.FC = () => {
    return (
        <div id="root">
            <Aside></Aside>        
                <CreateAccount/>      
        </div>
    )
}
