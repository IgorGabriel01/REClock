import { Aside } from "../components/aside/Aside"

import { ResetPassword } from "../components/form/ResetPassword"


export const ResetPassLayout: React.FC = () => {
    return (
        <div id="root">
            <Aside></Aside>
            
                <ResetPassword/>
            
            
        </div>
    )
}
