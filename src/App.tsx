import React from 'react';
import { TreeGridComponent, ColumnsDirective, ColumnDirective,
         Inject, Aggregate, AggregatesDirective, AggregateDirective, AggregateColumnsDirective, AggregateColumnDirective } from '@syncfusion/ej2-react-treegrid';
import { summaryData } from './datasource';
import { getObject} from '@syncfusion/ej2-grids';
import './App.css';

function customAggregateFn(data: object): any{
  let SampleData: object[] = getObject('result',data);
  let countLength: number = 0;
  SampleData.filter((record) => {
    const data = getObject('priority', record);
    const value = 'High';
    if(data === value){
      countLength++
    }
  });
  return countLength;
}

function App() {
  return (
    <TreeGridComponent dataSource={summaryData} childMapping="subtasks" treeColumnIndex={1}>
      <Inject services={[Aggregate]} />  
      <AggregatesDirective>
        <AggregateDirective showChildSummary={false}>
          <AggregateColumnsDirective>
            <AggregateColumnDirective field="duration" columnName="duration" type="Sum"
            footerTemplate={(props: any) => <span>Sum: {props.Sum}</span>}></AggregateColumnDirective>
          </AggregateColumnsDirective>
        </AggregateDirective>
        <AggregateDirective showChildSummary={false}>
          {/* To show this count in the same footer row with sum aggregate, cut and paste this AggregateColumnsDirective in above AggregateDirective */}
          <AggregateColumnsDirective>
            <AggregateColumnDirective field="priority" columnName="priority" type="Custom"
              footerTemplate={(props: any) => <span>HP Count: {props.Custom}</span>}
              customAggregate={customAggregateFn}></AggregateColumnDirective>
            </AggregateColumnsDirective>
        </AggregateDirective>
      </AggregatesDirective>                 
      <ColumnsDirective>
        <ColumnDirective field="taskID" headerText="Task ID" width='90' textAlign="Right"></ColumnDirective>
        <ColumnDirective field="taskName" headerText="Task Name"></ColumnDirective>
        <ColumnDirective field="startDate" headerText="Start Date" format='yMd'></ColumnDirective>
        <ColumnDirective field="duration" headerText="Duration"></ColumnDirective>
        <ColumnDirective field="priority" headerText="Priority"></ColumnDirective>
        <ColumnDirective field="approved" headerText="Approved"></ColumnDirective>
      </ColumnsDirective>
    </TreeGridComponent>
  );
}

export default App;
