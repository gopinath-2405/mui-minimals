import Grid from '@mui/material/Grid';
import React from 'react';
import tabledata, { TableData } from './tabledata';
import _ from 'lodash';
import { ColorsType } from './InvoiceTable';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface GroupByProps{
  select: "status" | 'name'
  headers: (keyof TableData)[];
  selectColor: (status: string) => ColorsType;
}


const GroupBy = (props: GroupByProps) => {
  const {select , headers , selectColor} = props;

  const filteredData = _.groupBy(tabledata , (details) => details[select] );

  return (
   <Grid container sx={{mt: 1}}>
    <Grid item xs={12} sm={12} md={12} lg={12}>
    {
      _.map(_.keys(filteredData), name => (
        <Accordion>
          <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
            {_.upperCase(name)}
          </AccordionSummary>
          <AccordionDetails>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        {_.map(_.without(headers, 'name'), header => (
                          <TableCell key={header} sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 'large' }}>
                            {_.capitalize(header)}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {_.map(filteredData[name], (detail: TableData) => (
                        <TableRow key={detail.id}>
                          <TableCell sx={{ textAlign: 'center' }}>{detail.id}</TableCell>
                          <TableCell sx={{ textAlign: 'center' }}>{detail.item}</TableCell>
                          <TableCell sx={{ textAlign: 'center' }}>
                            <Button
                              variant='contained'
                              color={selectColor(detail.status)}
                              sx={{ minWidth: '120px', fontWeight: 'bold' }}
                            >
                              {detail.status}
                            </Button>
                          </TableCell>
                          <TableCell sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Tooltip title={detail.name}>
                              <Avatar src={detail.assignee} alt={detail.name} />
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
        </Accordion>
      ))
    }
         </Grid> 
   </Grid>
  )
}

export default GroupBy
