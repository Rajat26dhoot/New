import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ClientSideRowModelModule } from 'ag-grid-community';
import { ModuleRegistry } from 'ag-grid-community';
import TableHeader from './TableHeader';

// Styles
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import '../styles/ag-overrides.css'; // ✅ Add this line for custom styles
import JobRequestHeader from './JobRequestHeader'; 
import SubmittedHeaderComponent from './SubmittedHeaderComponent';
import StatusHeader from './StatusHeader'; // Import the StatusHeader component
import SubmitHeader from './SubmitHeader'; // Import the SubmitHeader component
import UrlHeader from './UrlHeader'; // Import the UrlHeader component
import NameHeader from './NameHeader'; // Import the NameHeader component
import PriorityHeader from './PriorityHeader';
import ValueHeader from './ValueHeader';
import DueDateHeader from './DueDateHeader';

// Data
import { spreadsheetData } from '../data/spreadsheetData';

// Register module (only once globally)
ModuleRegistry.registerModules([ClientSideRowModelModule]);



const TableView: React.FC = () => {
  const emptyRows = useMemo(() => Array.from({ length: 15 }, () => ({})), []);
  const rowDataWithBlank = useMemo(() => [...spreadsheetData, ...emptyRows], []);

  const columnDefs = useMemo(() => [
   {
      headerName: '#',
      width: 40, 
      valueGetter: (params: any) => params.node.rowIndex + 1,
      suppressMovable: true,
      },
    {
      headerName: '',
      field: 'jobRequest',
      headerStyle: { margin:0,padding: 0,},
      width: 250,
      tooltipField: 'jobRequest',
      headerComponent: JobRequestHeader,
    },
    {
      headerName: '',
      field: 'submittedDate',
      width: 150,
      headerStyle: { margin:0,padding: 0,},
      headerComponent: SubmittedHeaderComponent,
      valueFormatter: (params: any) => {
        const date = new Date(params.value);
        return isNaN(date.getTime()) ? '' : date.toLocaleDateString('en-GB');
      }
    },
    {
      headerName: '',
      field: 'status',
      width: 150,
      headerStyle: { margin:0,padding: 0,},
      headerComponent: StatusHeader,
      cellRenderer: (params: any) => {
        if (!params.value) return '';
        return (
          <span
            style={{
              backgroundColor: params.data?.statusBgColor,
              color: params.data?.statusTextColor,
              borderRadius: '12px',
              padding: '2px 8px',
              display: 'inline-block'
            }}
          >
            {params.value}
          </span>
        );
      }
    },
    { headerName: 'Submitter', field: 'submitter', width: 150 , headerComponent: SubmitHeader,headerStyle: { margin:0,padding: 0,},},
    {
      headerName: '',
      field: 'portfolioLink',
      width: 200,
      headerStyle: { margin:0,padding: 0,},
      headerComponent: UrlHeader,

    },
    { headerName: 'Name', field: 'name', width: 150 , headerComponent: NameHeader,headerStyle: { margin:0,padding: 0,},},
    {
      headerName: 'Priority',
      field: 'priority',
      width: 120,
      headerStyle: { margin:0,padding: 0,},
      headerComponent: PriorityHeader,
      cellStyle: (params: any) => ({
        color: params.data?.priorityColor,
        fontWeight: 'bold'
      })
    },
    {
      headerName: 'Due Date',
      field: 'dueDate',
      width: 120,
      headerStyle: { margin:0,padding: 0,},
      headerComponent: DueDateHeader,
      valueFormatter: (params: any) => {
        const date = new Date(params.value);
        return isNaN(date.getTime()) ? '' : date.toLocaleDateString('en-GB');
      }
    },
    {
      headerName: 'Value',
      field: 'value',
      width: 120,
      headerStyle: { margin:0,padding: 0,},
      headerComponent: ValueHeader,
      cellStyle: { textAlign: 'right' },
      valueFormatter: (params: any) => params.value ? `$${params.value}` : ''
    },{
      width: 120,
    }
  ], []);

  const defaultColDef = useMemo(() => ({
    resizable: false,
    sortable: false,
    filter: false,
  }), []);

  return (
    <div className="ag-theme-quartz" style={{ width: '100%',overflowX: 'hidden', }}>

      <TableHeader />
      <AgGridReact
        rowData={rowDataWithBlank}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowHeight={25}
        domLayout="autoHeight"
      />
    </div>
  );
};

export default TableView;
