// Models
import { ModulesEnum } from 'models';

// Modules
import { GestantesScreen } from 'modules/home/screens/gestantes';

// Components
import { Layout } from 'components/layout';

const GestantesPage = () => {
    return (
        <Layout selectedKey="3">
            <GestantesScreen />
        </Layout>
    );
};

// GestantesPage.allowedModule = ModulesEnum.GESTANTES

export default GestantesPage;
