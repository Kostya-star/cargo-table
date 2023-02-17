import {
  DataGrid,
  Column,
  MasterDetail,
  FilterRow,
  HeaderFilter,
  ColumnHeaderFilter,
  SearchPanel,
  FilterPanel,
  FilterBuilder,
} from 'devextreme-react/data-grid';
import data from './data';
import { DetailsRow } from './components/DetailsRow';
// import 'devextreme/dist/css/dx.darkmoon.css';
// import 'devextreme/dist/css/dx.material.orange.dark.compact.css';
import 'devextreme/dist/css/dx.material.teal.dark.css';
import { useState } from 'react';
import { Select } from './components/Select';

const employes = data.getEmployees();

const App = () => {
  const[searchOption, setSearchOption] = useState('')

  const onSearchByColumn = (option: string) => {
    setSearchOption(option)
  }

    return (
    <div className="App">
      <Select onChange={onSearchByColumn}/>
      <DataGrid
        id="grid-container"
        dataSource={employes}
        keyExpr="ID"
        showBorders={true}
        columnAutoWidth
        hoverStateEnabled={true}
      >
        {/* <HeaderFilter 
                    visible={true} 
                /> */}
        <FilterPanel visible={true} />   

        <SearchPanel visible={true} />
        <FilterBuilder customOperations={true} />
        <Column dataField="CityFrom" caption="From" allowSearch={searchOption === 'From' || searchOption === ''}/>
        <Column dataField="CityTo" caption="To" allowSearch={searchOption === 'To' || searchOption === ''} />
        <MasterDetail
          enabled={true}
          component={({ data }) => <DetailsRow _key={data.key} />}
        />
      </DataGrid>
    </div>
  );
};

export default App;