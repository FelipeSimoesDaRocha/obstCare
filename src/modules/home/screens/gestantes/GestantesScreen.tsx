// Styles
import * as S from './Gestantes.styles';

// Components
import { Button } from 'components/button';
import { Filter } from 'components/filter';
import { GestantesTable } from 'components/gestantesTable';
import { Search } from 'components/search';

const GestantesScreen = () => {
  return (
    <S.Container>
      <S.Header>
        <div className="filters">
          <Search title="Search" />
          <Filter />
        </div>
        <div className="actions">
          <Button label={'Adicionar'} />
          <Button label={'Deletar'} />
        </div>
      </S.Header>
      <GestantesTable />
    </S.Container>
  );
};

export default GestantesScreen;
