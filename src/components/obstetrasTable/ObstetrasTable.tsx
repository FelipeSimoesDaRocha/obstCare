// Next
import Image from 'next/image';

// Icons
import avatar from './icons/avatar.svg';
import frame from './icons/Frame.svg';

// Styles
import * as S from './ObstetrasTable.styles';

// Models
import { ObstetrasTableProps } from './models';

const ObstetrasTable = ({
  columns,
  data,
  handleCheckboxChange,
  selectedItems,
  setSelectedItems,
}: ObstetrasTableProps) => {
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
                  <Image src={item.perfilImage ? item.perfilImage : avatar} alt={`User ${item.name}`} />
                  {item.name}
                </div>
              </td>
              <td>{item.numerosDeGestantes}</td>
              <td>{item.telefone}</td>
              <td>{item.estadoOndeReside}</td>
              <td>{item.dataDaCriacao}</td>
              <td>{item.ultimaAtividade}</td>
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
