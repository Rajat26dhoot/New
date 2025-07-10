import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ClientSideRowModelModule, ModuleRegistry, type ValueGetterParams, type ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import '../styles/ag-overrides.css';

import TableHeader from './TableHeader';
import JobRequestHeader from './JobRequestHeader';
import SubmittedHeaderComponent from './SubmittedHeaderComponent';
import StatusHeader from './StatusHeader';
import SubmitHeader from './SubmitHeader';
import UrlHeader from './UrlHeader';
import NameHeader from './NameHeader';
import PriorityHeader from './PriorityHeader';
import ValueHeader from './ValueHeader';
import DueDateHeader from './DueDateHeader';

import { spreadsheetData, type SpreadsheetRow } from '../data/spreadsheetData';

// Register AG Grid modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);

type CellRendererParams = {
  value: string;
  data?: {
    statusBgColor?: string;
    statusTextColor?: string;
  };
};

type CellRendererParamsother = {
  value: string;
  data: {
    priorityColor: string;
  };
};
const TableView: React.FC = () => {
  const emptyRows = useMemo(() => Array.from({ length: 15 }, () => ({} as SpreadsheetRow)), []);
  const rowDataWithBlank: SpreadsheetRow[] = useMemo(() => [...spreadsheetData, ...emptyRows], [emptyRows]);

  const columnDefs: ColDef<SpreadsheetRow>[] = useMemo(() => [
    {
      headerName: '#',
      width: 40,
      valueGetter: (params: ValueGetterParams<SpreadsheetRow>) => (params.node?.rowIndex ?? 0) + 1,
      suppressMovable: true,
    },
    {
      headerName: '',
      field: 'jobRequest' as keyof SpreadsheetRow,
      headerStyle: { margin: 0, padding: 0 },
      width: 250,
      tooltipField: 'jobRequest',
      headerComponent: JobRequestHeader,
    },
    {
      headerName: '',
      field: 'submittedDate' as keyof SpreadsheetRow,
      width: 150,
      headerStyle: { margin: 0, padding: 0 },
      headerComponent: SubmittedHeaderComponent,
      cellStyle: { textAlign: 'center' },
    },
    {
      headerName: '',
      field: 'status' as keyof SpreadsheetRow,
      width: 150,
      headerStyle: { margin: 0, padding: 0 },
      headerComponent: StatusHeader,
      cellRenderer: (params:CellRendererParams) => {
        if (!params.value) return '';
        return (
          <span
            style={{
              backgroundColor: params.data?.statusBgColor,
              color: params.data?.statusTextColor,
              borderRadius: '12px',
              padding: '2px 8px',
              display: 'inline-block',
              fontWeight: 700,
            }}
          >
            {params.value}
          </span>
        );
      },
    },
    {
      headerName: 'Submitter',
      field: 'submitter' as keyof SpreadsheetRow,
      width: 150,
      headerComponent: SubmitHeader,
      headerStyle: { margin: 0, padding: 0 },
    },
    {
      headerName: '',
      field: 'portfolioLink' as keyof SpreadsheetRow,
      width: 200,
      headerStyle: { margin: 0, padding: 0 },
      headerComponent: UrlHeader,
    },
    {
      headerName: 'Name',
      field: 'name' as keyof SpreadsheetRow,
      width: 150,
      headerComponent: NameHeader,
      headerStyle: { margin: 0, padding: 0 },
    },
    {
      headerName: 'Priority',
      field: 'priority' as keyof SpreadsheetRow,
      width: 120,
      headerStyle: { margin: 0, padding: 0 },
      headerComponent: PriorityHeader,
      cellRenderer: (params:CellRendererParamsother) => (
        <span
          style={{
            color: params.data?.priorityColor,
            fontWeight: 700,
          }}
        >
          {params.value}
        </span>
      ),
    },
    {
      headerName: 'Due Date',
      field: 'dueDate' as keyof SpreadsheetRow,
      width: 120,
      headerStyle: { margin: 0, padding: 0 },
      headerComponent: DueDateHeader,
    },
    {
      headerName: 'Value',
      field: 'value' as keyof SpreadsheetRow,
      width: 120,
      headerStyle: { margin: 0, padding: 0 },
      headerComponent: ValueHeader,
      cellStyle: { textAlign: 'right' },
      valueFormatter: (params) => (params.value ? `${params.value} ₹` : ''),
    },
    {
      headerName: '',
      field: '' as keyof SpreadsheetRow, // empty placeholder if needed
      flex: 1,
    },
  ], []);

  const defaultColDef = useMemo(() => ({
    resizable: false,
    sortable: false,
    filter: false,
  }), []);

  return (
    <div className="ag-theme-quartz" style={{ width: '100%', overflowX: 'hidden' }}>
      <TableHeader />
      <AgGridReact<SpreadsheetRow>
        rowData={rowDataWithBlank}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowHeight={26}
        domLayout="autoHeight"
      />
    </div>
  );
};

export default TableView;
