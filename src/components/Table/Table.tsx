import { FC } from 'react';
import imgDelete from './images/delete.svg';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { removeTableRow } from '../../store/tableSlice';

const Table: FC = () => {
  const tableRows = useAppSelector(state => state.table.tableRows);
  const dispatch = useAppDispatch();

  return (
    <div className='table__wrap'>
      <table className='table'>
        <thead>
          <tr>
            <th className='table__th' style={{ width: '58px' }}></th>
            <th className='table__th' style={{ width: '150px' }}>
              Company
            </th>
            <th className='table__th' style={{ width: '150px' }}>
              Name
            </th>
            <th className='table__th' style={{ width: '150px' }}>
              Additional
            </th>
            <th className='table__th' style={{ width: '100px' }}>
              Street
            </th>
            <th className='table__th' style={{ width: '95px' }}>
              Postal Code
            </th>
            <th className='table__th' style={{ width: '90px' }}>
              Country
            </th>
            <th className='table__th' style={{ width: '100px' }}>
              IBAN
            </th>
            <th className='table__th' style={{ width: '100px' }}>
              BIC
            </th>
            <th className='table__th' style={{ width: '90px' }}>
              Bank name
            </th>
            <th className='table__th' style={{ width: '110px' }}>
              Fax
            </th>
            <th className='table__th' style={{ width: '64px' }}>
              E-mail
            </th>
            <th className='table__th' style={{ width: '75px' }}>
              Birthday
            </th>
            <th className='table__th' style={{ width: '89px' }}>
              Homepage
            </th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map(tableRow => (
            <tr key={tableRow.id}>
              <td className='table__td'>
                <button
                  className='table__delete'
                  onClick={() => dispatch(removeTableRow(tableRow.id))}
                >
                  <img src={imgDelete} alt='delete' />
                </button>
              </td>
              <td className='table__td'>{tableRow.company}</td>
              <td className='table__td'>{tableRow.name}</td>
              <td className='table__td'>{tableRow.additional}</td>
              <td className='table__td'>{tableRow.street}</td>
              <td className='table__td'>{tableRow.postalCode}</td>
              <td className='table__td'>{tableRow.country}</td>
              <td className='table__td'>{tableRow.iban}</td>
              <td className='table__td'>{tableRow.bic}</td>
              <td className='table__td'>{tableRow.bankName}</td>
              <td className='table__td'>{tableRow.fax}</td>
              <td className='table__td'>{tableRow.email}</td>
              <td className='table__td'>{tableRow.birthday}</td>
              <td className='table__td'>{tableRow.homepage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
