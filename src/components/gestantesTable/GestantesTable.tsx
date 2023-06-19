// Next
import Image from 'next/image';

// Icons
import avatar from './icons/avatar.svg';
import frame from './icons/Frame.svg';

// Styles
import * as S from './GestantesTable.styles';

// Models
import { GestantesTableProps } from './models';

const GestantesTable = ({
  columns,
  data,
  handleCheckboxChange,
  selectedItems,
  setSelectedItems,
  OpenModal,
}: GestantesTableProps) => {
  const handleOpenModal = () => {
    OpenModal();
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
            {columns.map(item => (
              <th key={item.title}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(index)}
                  onChange={e => handleCheckboxChange(e, index)}
                />
              </td>
              <td>
                <div>
                  <Image src={item.image ? item.image : avatar} alt={`User ${item.user}`} />
                  {item.user}
                </div>
              </td>
              <td>{item.ddp}</td>
              <td>{item.phone}</td>
              <td>{item.obstetra}</td>
              <td>{item.monitoring}</td>
              <td>{item.activity}</td>
              <td>
                <button onClick={handleOpenModal}>
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
