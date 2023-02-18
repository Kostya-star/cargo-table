import { cities } from 'api/mock_api';
import { DetailsRow } from 'components/DetailsRow';
import {
  Column,
  DataGrid,
  FilterPanel,
  HeaderFilter,
  MasterDetail,
  SearchPanel,
} from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.material.blue.dark.css';
// import 'devextreme/dist/css/dx.material.orange.dark.compact.css';
// import 'devextreme/dist/css/dx.material.teal.dark.css';
import { Select } from 'components/Select/Select';
import { useState } from 'react';
import 'scss/all.scss';
import { SingleValue } from 'react-select/dist/declarations/src';
import { IOption } from './../components/Select/Select';

export const Home = () => {
  const [selectedColumn, setSelectedColumn] = useState<string>('');

  const onSelectColumn = (column:  SingleValue<IOption>) => {
    if(column) {
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
            caption="From"
            allowSearch={selectedColumn === 'From' || selectedColumn === ''}
          />
          <Column
            dataField="CityTo"
            caption="To"
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
