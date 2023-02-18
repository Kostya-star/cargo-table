import { cities } from 'api/mock_api';
import { DetailsRow } from 'components/DetailsRow';
import { Select } from 'components/Select/Select';
import {
  Column,
  DataGrid,
  FilterPanel,
  HeaderFilter,
  MasterDetail,
  SearchPanel,
} from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.material.blue.dark.css';
import { useState } from 'react';
import { SingleValue } from 'react-select/dist/declarations/src';
import 'scss/all.scss';
import { IOption } from './../components/Select/Select';

export const Home = () => {
  const [selectedColumn, setSelectedColumn] = useState('');

  const onSelectColumn = (column: SingleValue<IOption>) => {
    if (column) {
      setSelectedColumn(column.value);
    }
  };

  return (
    <div className="container">
      <div className="select">
        <span>Искать по колонке: </span>
        <Select onChange={onSelectColumn} />
      </div>
      <DataGrid
        dataSource={cities}
        keyExpr="ID"
        showBorders={true}
        columnAutoWidth
        hoverStateEnabled={true}
      >
        <HeaderFilter visible={true} />
        <FilterPanel visible={true} />
        <SearchPanel visible={true} />

        <Column
          dataField="CityFrom"
          caption="Из города"
          allowSearch={selectedColumn === 'From' || selectedColumn === ''}
        />
        <Column
          dataField="CityTo"
          caption="В город"
          allowSearch={selectedColumn === 'To' || selectedColumn === ''}
        />
        <MasterDetail
          enabled={true}
          component={({ data }) => <DetailsRow _key={data.key} />}
        />
      </DataGrid>
    </div>
  );
};
