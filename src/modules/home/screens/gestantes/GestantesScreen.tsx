// React
import { ChangeEvent, useState } from 'react';

// Images
import icon from '../../../../assets/images/image1.png';
import icon2 from '../../../../assets/images/image2.png';
import icon3 from '../../../../assets/images/image3.png';
import icon4 from '../../../../assets/images/image4.png';

// Styles
import * as S from './Gestantes.styles';

// Components
import { Button } from 'components/button';
import { Filter } from 'components/filter';
import { GestantesTable } from 'components/gestantesTable';
import { Search } from 'components/search';

const GestantesScreen = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const columns = [
    { title: 'User', dataIndex: 'user', key: 'user', className: 'hover-effect' },
    { title: 'DPP', dataIndex: 'ddp', key: 'ddp' },
    { title: 'Telefone', dataIndex: 'phone', key: 'phone' },
    { title: 'Obstetra', dataIndex: 'obstetra', key: 'obstetra' },
    { title: 'Monitoramentos', dataIndex: 'monitoring', key: 'monitoring' },
    { title: 'Atividade', dataIndex: 'activity', key: 'activity' },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      user: 'Andrew Bojangles',
      ddp: '14/05/2023',
      phone: '+79000010101',
      obstetra: 'Caroline Paim',
      monitoring: 12,
      created_at: '14/05/2023',
      activity: '2 days ago',
      image: icon,
    },
    {
      id: 2,
      user: 'Andrew Bojangles',
      ddp: '14/05/2023',
      phone: '+79000010101',
      obstetra: 'Caroline Paim',
      monitoring: 5,
      created_at: '14/05/2023',
      activity: '2 days ago',
      image: icon2,
    },
    {
      id: 3,
      user: 'Andrew Bojangles',
      ddp: '14/05/2023',
      phone: '+79000010101',
      obstetra: 'Caroline Paim',
      monitoring: 0,
      created_at: '14/05/2023',
      activity: '2 days ago',
      image: icon3,
    },
    {
      id: 4,
      user: 'Andrew Bojangles',
      ddp: '14/05/2023',
      phone: '+79000010101',
      obstetra: 'Caroline Paim',
      monitoring: 63,
      created_at: '14/05/2023',
      activity: '2 days ago',
      image: icon4,
    },
    {
      id: 5,
      user: 'Andrew Bojangles',
      ddp: '14/05/2023',
      phone: '+79000010101',
      obstetra: 'Caroline Paim',
      monitoring: 7,
      created_at: '14/05/2023',
      activity: '2 days ago',
      image: icon,
    },
    {
      id: 6,
      user: 'Andrew Bojangles',
      ddp: '14/05/2023',
      phone: '+79000010101',
      obstetra: 'Caroline Paim',
      monitoring: 28,
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
          <Button label={'Adicionar'} />
          <Button label={'Deletar'} onClick={handleDeleteSelected} />
        </div>
      </S.Header>
      <GestantesTable
        columns={columns}
        data={data}
        handleCheckboxChange={handleCheckboxChange}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    </S.Container>
  );
};

export default GestantesScreen;
