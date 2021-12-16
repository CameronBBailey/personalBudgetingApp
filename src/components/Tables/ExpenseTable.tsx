import React, { useState } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams, GridSelectionModel } from '@mui/x-data-grid';
import { expenses_server_calls } from '../../api'; 
import { useGetDataExpenses, useGetDataInvestments } from '../../custom-hooks';
import { Button } from '@material-ui/core';



const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  { field: 'amount', headerName: 'cost', width: 90 },
  
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
const rows = [
  { id: 1, amount: 1, investment: 'Amazon', ticker: 'AMZN', purchaseprice: 100, currentprice: 120 },
  { id: 2, amount: 1, investment: 'Tesla', ticker: 'AMZN', purchaseprice: 100, currentprice: 80 },
  { id: 3, amount: 100, investment: 'VTSAX', ticker: 'VTSAX', purchaseprice: 10, currentprice: 25900 },
  
]

export const ExpenseTable = () => {
  let { expenseData, getData } = useGetDataExpenses()
  let [gridData, setData] = useState<GridSelectionModel>([])
  let deleteData = () => {
    expenses_server_calls.delete(`${gridData[0]}`)
    console.log(gridData)
    getData()
  }
  console.log(gridData)

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