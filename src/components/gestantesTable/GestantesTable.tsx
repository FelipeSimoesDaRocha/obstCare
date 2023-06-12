// Next
import Image from 'next/image';

// React
import { ChangeEvent, useState } from 'react';

// Images
import frame from './images/Frame.svg';
import icon from './images/image1.png';
import icon2 from './images/image2.png';
import icon3 from './images/image3.png';
import icon4 from './images/image4.png';

// Styles
import * as S from './GestantesTable.styles';

const GestantesTable = () => {
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

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const columns = [
    { title: 'User', dataIndex: 'user', key: 'user', className: 'hover-effect' },
    { title: 'DPP', dataIndex: 'ddp', key: 'ddp' },
    { title: 'Telefone', dataIndex: 'phone', key: 'phone' },
    { title: 'Obstetra', dataIndex: 'obstetra', key: 'obstetra' },
    { title: 'Monitoramentos', dataIndex: 'monitoring', key: 'monitoring' },
    { title: 'Atividade', dataIndex: 'activity', key: 'activity' },
  ];

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
    <S.Component>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectedItems.length === data.length}
                onChange={e => {
                  if (e.target.checked) {
                    setSelectedItems(data.map((_, index) => index));
                  } else {
                    setSelectedItems([]);
                  }
                }}
              />
            </th>
            {columns.map((item, index) => (
              <th key={index}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(index)}
                  onChange={e => handleCheckboxChange(e, index)}
                />
              </td>
              <td>
                <div>
                  <Image src={item.image} alt="image" />
                  {item.user}
                </div>
              </td>
              <td>{item.ddp}</td>
              <td>{item.phone}</td>
              <td>{item.obstetra}</td>
              <td>{item.monitoring}</td>
              <td>{item.activity}</td>
              <td>
                <button onClick={handleDeleteSelected}>
                  <Image src={frame} alt="image" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Component>
  );
};

export default GestantesTable;
