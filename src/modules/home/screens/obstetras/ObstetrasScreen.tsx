// React
import { ChangeEvent, useState } from 'react';

// Images
import icon from '../../../../assets/images/image1.png';
import icon2 from '../../../../assets/images/image2.png';
import icon3 from '../../../../assets/images/image3.png';
import icon4 from '../../../../assets/images/image4.png';

// Styles
import * as S from './Obstetras.styles';

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

  const columns = [
    { title: 'User', dataIndex: 'user', key: 'user', className: 'hover-effect' },
    { title: 'Nº Gestantes', dataIndex: 'pregnant_women', key: 'pregnant_women' },
    { title: 'Telefone', dataIndex: 'phone', key: 'phone' },
    { title: 'Estado', dataIndex: 'state', key: 'state' },
    { title: 'Data de criação', dataIndex: 'created_at', key: 'created_at' },
    { title: 'Atividade', dataIndex: 'activity', key: 'activity' },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      user: 'Andrew Bojangles',
      pregnant_women: 3,
      phone: '+79000010101',
      state: 'RS',
      created_at: '14/05/2023',
      activity: '2 days ago',
      image: icon,
    },
    {
      id: 2,
      user: 'Andrew Bojangles',
      pregnant_women: 2,
      phone: '+79000010101',
      state: 'SP',
      created_at: '14/05/2023',
      activity: '2 days ago',
      image: icon2,
    },
    {
      id: 3,
      user: 'Andrew Bojangles',
      pregnant_women: 5,
      phone: '+79000010101',
      state: 'SP',
      created_at: '14/05/2023',
      activity: '2 days ago',
      image: icon3,
    },
    {
      id: 4,
      user: 'Andrew Bojangles',
      pregnant_women: 0,
      phone: '+79000010101',
      state: 'SP',
      created_at: '14/05/2023',
      activity: '2 days ago',
      image: icon4,
    },
    {
      id: 5,
      user: 'Andrew Bojangles',
      pregnant_women: 0,
      phone: '+79000010101',
      state: 'SC',
      created_at: '14/05/2023',
      activity: '2 days ago',
      image: icon,
    },
    {
      id: 6,
      user: 'Andrew Bojangles',
      pregnant_women: 0,
      phone: '+79000010101',
      state: 'SC',
      created_at: '14/05/2023',
      activity: '2 days ago',
      image: icon,
    },
  ]);

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
  };

  return (
    <S.Container>
      <S.Header>
        <div className="filters">
          <Search title="Search" />
          <Filter />
        </div>
        <div className="actions">
          <Button label={'Adicionar'} onClick={() => setIsOpen(true)} type="secondary" />
          <Button label={'Deletar'} onClick={handleDeleteSelected} type="secondary" />
        </div>
      </S.Header>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ObstetrasForm data={data} setData={setData} onClose={() => setIsOpen(false)} />
      </Modal>
      <ObstetrasTable
        columns={columns}
        data={data}
        handleCheckboxChange={handleCheckboxChange}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    </S.Container>
  );
};

export default ObstetrasScreen;
