import { DataGrid, Column } from 'devextreme-react/data-grid';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import { FC, useEffect, useState } from 'react';
import data from '../data';

const tasks = data.getTasks()

interface IDetailsRowProps {
  _key: number
}

function getTasks(_key: number)  {
  return new DataSource({
    store: new ArrayStore({
      data: tasks,
      key: 'ID',
    }),
    filter: ['EmployeeID', '=', _key],
  });

}

interface ITask {
  ID: number
  Subject: string
  StartDate: string
  DueDate: string
  Status: string
  Priority: string
  Completion: number
  EmployeeID: number

}

export const DetailsRow: FC<IDetailsRowProps> = ({ _key }) => {
  const [dataSource, setDataSource] = useState<ITask[]>([]);

  useEffect(() => {
    setDataSource(getTasks(_key) as any);
  }, [_key]);
  
  const completedValue = (rowData: ITask) => {
    return rowData.Status === 'Completed';
  };

  return (
    <div>
      <DataGrid dataSource={dataSource} showBorders={true}
          columnAutoWidth={true}>
            <Column dataField="Subject" />
          <Column dataField="StartDate" dataType="date" />
          <Column dataField="DueDate" dataType="date" />
          <Column dataField="Priority" />
          <Column
            caption="Completed"
            dataType="boolean"
            calculateCellValue={completedValue}
          />
          </DataGrid>
    </div>
  );
}
