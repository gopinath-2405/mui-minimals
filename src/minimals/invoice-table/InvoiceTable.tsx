import React, { MouseEvent,useState } from 'react';
import tabledata, { TableData } from './tabledata';
import _ from 'lodash';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Menu, MenuItem } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import DetailsTable from './DetailsTable';
import GroupBy from './GroupBy';

export type ColorsType = 'primary' | 'warning' | 'success' | 'secondary';
export type Select = 'main' | 'status' | 'name';

const InvoiceTable = () => {

  const [groupByAnchor, setGroupByAnchor] = useState<null | HTMLElement>(null);
  const [select, setSelect] = useState<Select>('main')

  const handleGroupByClick = (e: MouseEvent<HTMLElement>) => {
    setGroupByAnchor(e.currentTarget);
  }

  const handleGroupByClose = () => {
    setGroupByAnchor(null);
  }

  const openGroupBy = Boolean(groupByAnchor);

  const headers = (_.keys(tabledata[0])) as (keyof TableData)[];
  const selectColor = (status: string): ColorsType => {
    switch (status) {
      case 'INITIAL':
        return 'primary';
      case 'PENDING':
        return 'warning';
      case 'COMPLETED':
        return 'success';
      default:
        return 'secondary';
    }
  };

  const handleSelect = (option: Select) => {
    setSelect(option);
    setGroupByAnchor(null);
  }

  return ( 
    <Grid container sx={{ margin: 1, display: 'flex', flexFlow: 'column' }}>
      <Grid item xs={11} sm={7} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant='contained'  onClick={handleGroupByClick} sx={{ bgcolor: 'black', fontWeight: 'bold' }} >Group By</Button>
        { (select === 'status' || select === 'name') && <Button variant='outlined' color='error'  onClick={() => handleSelect('main')}  sx={{ fontWeight: 'bolder', ml: 3 }}><ClearIcon /></Button>}
      </Grid>
      <Menu open={openGroupBy} anchorEl={groupByAnchor} onClose={handleGroupByClose} >
        <MenuItem onClick={() => handleSelect('status')} >
          <Typography sx={{ fontWeight: 'bold' }}>Status</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleSelect('name')} >
          <Typography sx={{ fontWeight: 'bold' }}>Assignee</Typography>
        </MenuItem>
      </Menu>
      <Grid item xs={11} sm={7} md={6} lg={4}>
        {select === 'main' ? <DetailsTable headers={headers} selectColor={selectColor} /> : <GroupBy headers={headers} selectColor={selectColor} select={select} /> }
       
      </Grid>
    </Grid>
  );
};

export default InvoiceTable;
