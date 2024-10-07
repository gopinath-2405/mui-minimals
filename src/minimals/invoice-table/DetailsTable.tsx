import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import tabledata, { TableData } from './tabledata';
import _ from 'lodash';
import { ColorsType } from './InvoiceTable';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

interface DetailTableProps {
  headers: (keyof TableData)[];
  selectColor: (status: string) => ColorsType;
}

const DetailsTable = (props: DetailTableProps) => {
  const { headers, selectColor } = props;
  return (
    <Box sx={{ mt: 1 }}>
    <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            {_.map(_.without(headers, 'name'), header => (
              <TableCell key={header} sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                {_.capitalize(header)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {_.map(tabledata, (detail) => (
            <TableRow key={detail.id}>
              <TableCell sx={{ textAlign: 'center', padding: '8px' }}>{detail.id}</TableCell>
              <TableCell sx={{ textAlign: 'center', padding: '8px' }}>{detail.item}</TableCell>
              <TableCell sx={{ textAlign: 'center', padding: '8px' }}>
                <Button
                  variant='contained'
                  color={selectColor(detail.status)}
                  sx={{ fontWeight: 'bold' }}
                >
                  {detail.status}
                </Button>
              </TableCell>
              <TableCell sx={{ display: 'flex', justifyContent: 'center', padding: '8px' }}>
                <Tooltip title={detail.name}>
                  <Avatar src={detail.assignee} alt={detail.name} />
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
  )
}

export default DetailsTable
