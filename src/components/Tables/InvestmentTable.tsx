import React, { useState } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams, GridSelectionModel } from '@mui/x-data-grid';
import { investment_server_calls } from '../../api'; 
import { useGetDataInvestments } from '../../custom-hooks';
import { Button } from '@material-ui/core';



const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'amount', headerName: '#', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'ticker',
    headerName: 'Symbols',
    width: 150,
    editable: true,
  },
  {
    field: 'purchaseprice',
    headerName: 'Purchase Price',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'currentprice',
    headerName: 'Current Price',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'percent-change',
    headerName: '% Change',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 400,
    valueGetter: (params: GridValueGetterParams) =>
      `${ Math.round(((params.row.currentprice / params.row.purchaseprice)-1)*10000)/100}%`, /* Multiplying by and extra 100 to be able to round to 2 decimal places */
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

export const InvestmentTable = () => {
  let { investmentData, getData } = useGetDataInvestments()
  let [gridData, setData] = useState<GridSelectionModel>([])
  let deleteData = () => {
    investment_server_calls.delete(`${gridData[0]}`)
    console.log(gridData)
    getData()
  }
  console.log(gridData)

    return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={investmentData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel);}}
            {...investmentData}
          />
          <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
        </div>
      );
}