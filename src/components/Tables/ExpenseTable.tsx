import React, { useState } from 'react'
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { expenses_server_calls } from '../../api'; 
import { useGetDataExpenses, useToken } from '../../custom-hooks';
import { Button } from '@material-ui/core';




const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  { field: 'amount', headerName: 'Cost', width: 90 },
  
  {
    field: 'category',
    headerName: 'Category',
    width: 150,
    editable: true,
  },
  
  
];

interface gridData{
  data:{
    id?:string;
  }
}


export const ExpenseTable = () => {
  let token = useToken()
  let { expenseData, getData } = useGetDataExpenses(token)
  let [gridData, setData] = useState<GridSelectionModel>([])
  let deleteData = () => {
    expenses_server_calls.delete(`${gridData[0]}`) 
    getData()
  }

    return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={expenseData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel);}}
            {...expenseData}
          />
          <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
        </div>
      );
}