// Next
import Image from 'next/image';

// Icons
import frame from './icons/Frame.svg';

// Styles
import * as S from './GestantesTable.styles';

// Models
import { GestantesTableProps } from 'models';

const GestantesTable = ({ columns, data, handleCheckboxChange, selectedItems, setSelectedItems }: GestantesTableProps) => {
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

export default GestantesTable;
