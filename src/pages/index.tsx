// Modules
import { HomeScreen } from 'modules/home/screens/home';

// Components
import { Layout } from 'components/layout';

const HomePage = () => {
  return (
    <Layout selectedKey="1">
      <HomeScreen />
    </Layout>
  );
};

export default HomePage;
