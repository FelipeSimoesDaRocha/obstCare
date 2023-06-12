// Next
import Image from 'next/image';

// React
import { ChangeEvent, useState } from 'react';

// Styles

// Images
import frame from './images/Frame.svg';
import icon from './images/image1.png';
import icon2 from './images/image2.png';
import icon3 from './images/image3.png';
import icon4 from './images/image4.png';

import * as S from './ObstetrasTable.styles';

const ObstetrasTable = () => {
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

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const columns = [
    { title: 'User', dataIndex: 'user', key: 'user', className: 'hover-effect' },
    { title: 'Nº Gestantes', dataIndex: 'pregnant_women', key: 'pregnant_women' },
    { title: 'Telefone', dataIndex: 'phone', key: 'phone' },
    { title: 'Estado', dataIndex: 'state', key: 'state' },
    { title: 'Data de criação', dataIndex: 'created_at', key: 'created_at' },
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
              <td>{item.pregnant_women}</td>
              <td>{item.phone}</td>
              <td>{item.state}</td>
              <td>{item.created_at}</td>
              <td>{item.activity}</td>
              <td>
                <button>
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

export default ObstetrasTable;
