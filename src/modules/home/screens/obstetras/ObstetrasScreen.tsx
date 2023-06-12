// Styles
import * as S from './Obstetras.styles';

// Components
import { Button } from 'components/button';
import { Filter } from 'components/filter';
import { ObstetrasTable } from 'components/obstetrasTable';
import { Search } from 'components/search';

const ObstetrasScreen = () => {
  return (
    <S.Container>
      <S.Header>
        <div className="filters">
          <Search title={'Search'} />
          <Filter />
        </div>
        <div className="actions">
          <Button label={'Adicionar'} />
          <Button label={'Deletar'} />
        </div>
      </S.Header>
      <ObstetrasTable />
    </S.Container>
  );
};

export default ObstetrasScreen;
