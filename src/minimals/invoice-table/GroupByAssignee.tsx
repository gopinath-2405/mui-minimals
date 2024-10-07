import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import tabledata, { TableData } from './tabledata';
import AccordionDetails from '@mui/material/AccordionDetails';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import _ from 'lodash';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { ColorsType } from './InvoiceTable';

interface GroupByAssigneeProps{
  headers: (keyof TableData)[];
  selectColor: (status: string) => ColorsType;
}

const GroupByAssignee = (props: GroupByAssigneeProps) => {
  const {headers , selectColor} = props;

  const assignee1 = _.filter(tabledata, details => details.name === 'Gopinath');
  const assignee2 = _.filter(tabledata, details => details.name === 'Vasanth');
  const assignee3 = _.filter(tabledata, details => details.name === 'Tamil Selvan');

  const assignees: TableData[][] = [assignee1, assignee2, assignee3]

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        {
          _.map(assignees, (details , i) => (
            <Accordion key={i}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{details[0].name}</Typography>
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
                      {_.map(details, (detail: TableData) => (
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

export default GroupByAssignee
