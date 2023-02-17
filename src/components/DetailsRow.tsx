import { cargoDetails } from 'api/mock_api';
import { Column, DataGrid } from 'devextreme-react/data-grid';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import { FC, useEffect, useState } from 'react';

interface IDetailsRowProps {
  _key: number;
}

interface ITask {
  ID: number;
  Subject: string;
  StartDate: string;
  DueDate: string;
  Status: string;
  Priority: string;
  Completion: number;
  EmployeeID: number;
}

function getDetails(_key: number) {
  return new DataSource({
    store: new ArrayStore({
      data: cargoDetails,
      key: 'ID',
    }),
    filter: ['cargoID', '=', _key],
  });
}

export const DetailsRow: FC<IDetailsRowProps> = ({ _key }) => {
  const [dataSource, setDataSource] = useState<ITask[]>([]);

  useEffect(() => {
    setDataSource(getDetails(_key) as any);
  }, [_key]);

  return (
    <div>
      <DataGrid
        dataSource={dataSource}
        showBorders={true}
        columnAutoWidth={true}
      >
        <Column dataField="Отправка и прибытие" />
        <Column dataField="Дата отправления" dataType="date" />
        <Column dataField="Дата прибытия" dataType="date" />
        <Column dataField="Груз" />
        <Column dataField="_Вес" />
      </DataGrid>
    </div>
  );
};
