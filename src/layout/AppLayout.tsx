import { Aside } from "../components/aside/Aside";
import { SectionInfos } from "../components/section/SectionInfos";

const Layout: React.FC = () => {
    return (
        <div id="root">
            <Aside/>
            <SectionInfos title="Entre na sua conta"/>
        </div>
    )
}


export default Layout;