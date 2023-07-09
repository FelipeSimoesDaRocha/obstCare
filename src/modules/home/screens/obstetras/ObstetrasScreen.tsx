// React
import { ChangeEvent, useEffect, useState } from 'react';

// Styles
import * as S from './Obstetras.styles';

// Models
import { DataItemObstetras } from 'models';

// Api
import { getObstetras } from 'services/api';

// Components
import { Button } from 'components/button';
import { Filter } from 'components/filter';
import { Modal } from 'components/modal';
import { ObstetrasForm } from 'components/obstetrasForm';
import { ObstetrasTable } from 'components/obstetrasTable';
import { Search } from 'components/search';

const ObstetrasScreen = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const columns = [
    { title: 'User', dataIndex: 'user', key: 'user', className: 'hover-effect' },
    { title: 'Nº Gestantes', dataIndex: 'pregnant_women', key: 'pregnant_women' },
    { title: 'Telefone', dataIndex: 'phone', key: 'phone' },
    { title: 'Estado', dataIndex: 'state', key: 'state' },
    { title: 'Data de criação', dataIndex: 'created_at', key: 'created_at' },
    { title: 'Atividade', dataIndex: 'activity', key: 'activity' },
  ];

  const [data, setData] = useState<DataItemObstetras[]>([]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const filteredData = data.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedItems([...selectedItems, index]);
    } else {
      setSelectedItems(selectedItems.filter(item => item !== index));
    }
  };

  const handleDeleteSelected = () => {
    setData(prevData => {
      const newData = prevData.filter((_, index) => !selectedItems.includes(index));
      return newData;
    });
    setSelectedItems([]);
    setIsOpenDelete(false);
  };


  const formatGestantesData = (data: DataItemObstetras[]) =>
    data.map(gestantes => ({
      ...gestantes
    }))

  const fetchData = async () => {
    const response = await getObstetras();

    const gestantesFormat = formatGestantesData(response.data)

    setData(gestantesFormat)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <div className="filters">
          <Search
            title="Search"
            key="input-name"
            id="name"
            type="text"
            data-testid="name"
            value={searchValue}
            onChange={handleSearchChange}
            autocomplete="current-name"
          />
          <Filter />
        </div>
        <div className="actions">
          <Button label={'Adicionar'} onClick={() => setIsOpen(true)} type="secondary" />
          <Button
            label={'Deletar'}
            onClick={() => setIsOpenDelete(true)}
            type="secondary"
            disabled={selectedItems.length === 0}
          />
        </div>
      </S.Header>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ObstetrasForm data={data} setData={setData} onClose={() => setIsOpen(false)} />
      </Modal>
      <Modal open={isOpenDelete} onClose={() => setIsOpenDelete(false)}>
        <h2>Tem certeza que quer deletar?</h2>
        <p>Deletar pode ser perigoso!</p>
        <div className="actions_modal">
          <Button label={'Cancelar'} type="primary" onClick={() => setIsOpenDelete(false)} />
          <Button label={'Deletar'} type="secondary" onClick={handleDeleteSelected} />
        </div>
      </Modal>
      <ObstetrasTable
        columns={columns}
        data={filteredData}
        handleCheckboxChange={handleCheckboxChange}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    </S.Container>
  );
};

export default ObstetrasScreen;
