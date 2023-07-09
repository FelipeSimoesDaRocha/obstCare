// React
import { ChangeEvent, useEffect, useState } from 'react';

// Styles
import * as S from './Gestantes.styles';

// Models
import { DataItemGestantes } from 'models';

// Api
import { getGestantes } from 'services/api';

// Components
import { Button } from 'components/button';
import { Filter } from 'components/filter';
import { GestantesForm } from 'components/gestantesForm';
import { GestantesTable } from 'components/gestantesTable';
import { Input } from 'components/input';
import { Modal } from 'components/modal';
import { Search } from 'components/search';

const GestantesScreen = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenReminder, setIsOpenReminder] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [timeValue, setTimeValue] = useState('');
  const [data, setData] = useState<DataItemGestantes[]>([]);

  const [items, setItems] = useState([
    { id: 1, label: 'Pressão', checked: false },
    { id: 2, label: 'Glicemia', checked: false },
    { id: 3, label: 'Humor', checked: false },
    { id: 4, label: 'Sintomas', checked: false },
    { id: 5, label: 'Mov. Fetais', checked: false },
    { id: 6, label: 'Peso', checked: false },
  ]);

  const columns = [
    { title: 'User', dataIndex: 'user', key: 'user', className: 'hover-effect' },
    { title: 'DPP', dataIndex: 'ddp', key: 'ddp' },
    { title: 'Telefone', dataIndex: 'phone', key: 'phone' },
    { title: 'Obstetra', dataIndex: 'obstetra', key: 'obstetra' },
    { title: 'Monitoramentos', dataIndex: 'monitoring', key: 'monitoring' },
    { title: 'Atividade', dataIndex: 'activity', key: 'activity' },
  ];

  const handleReminderItens = (itemId: number) => {
    setItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === itemId) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
    });
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleTimeChange = (value: string) => {
    setTimeValue(value);
  };

  let filteredData: DataItemGestantes[] = []

  if (data && data.length > 0) {
    filteredData = data.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
  }

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

  const fetchData = async () => {
    const response = await getGestantes();

    const gestantesFormat = response.data

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
        <GestantesForm data={data} setData={setData} onClose={() => setIsOpen(false)} />
      </Modal>
      <Modal open={isOpenDelete} onClose={() => setIsOpenDelete(false)}>
        <h2>Tem certeza que quer deletar?</h2>
        <p>Deletar pode ser perigoso!</p>
        <div className="actions_modal">
          <Button label={'Cancelar'} type="primary" onClick={() => setIsOpenDelete(false)} />
          <Button label={'Deletar'} type="secondary" onClick={handleDeleteSelected} />
        </div>
      </Modal>
      <Modal open={isOpenReminder} onClose={() => setIsOpenReminder(false)}>
        <h2>Adicionar lembrete</h2>
        <div className="contentReminder">
          <Input title={'Horário'} type="time" value={timeValue} onChange={handleTimeChange} />
          {items.map(item => (
            <div key={item.id} className="itenCheck">
              <div className="item">
                <input type="checkbox" checked={item.checked} onChange={() => handleReminderItens(item.id)} />
                <label>{item.label}</label>
              </div>
            </div>
          ))}
        </div>
        <div className="actions_modal">
          <Button label={'Cancelar'} type="primary" onClick={() => setIsOpenReminder(false)} />
          <Button label={'Salvar'} type="secondary" onClick={handleDeleteSelected} />
        </div>
      </Modal>
      <GestantesTable
        columns={columns}
        data={filteredData}
        handleCheckboxChange={handleCheckboxChange}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        OpenModal={() => setIsOpenReminder(true)}
      />
    </S.Container>
  );
};

export default GestantesScreen;
