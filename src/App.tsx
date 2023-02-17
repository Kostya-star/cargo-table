import { DataGrid, Column, MasterDetail } from 'devextreme-react/data-grid';
import data from './data';
import { DetailsRow } from './components/DetailsRow';
import 'devextreme/dist/css/dx.darkmoon.css';
// import 'devextreme/dist/css/dx.material.orange.dark.compact.css';
// import 'devextreme/dist/css/dx.material.teal.dark.css';

const employes = data.getEmployees();

const App = () => {
  return (
    <div className="App">
      <DataGrid
        id="grid-container"
        dataSource={employes}
        keyExpr="ID"
        showBorders={true}
      >
        <Column dataField="CityFrom" width={70} caption="From" />
        <Column dataField="CityTo" />
        <MasterDetail enabled={true} component={({ data }) => <DetailsRow _key={data.key}/>} />
      </DataGrid>
    </div>
  );
};

export default App;