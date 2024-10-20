import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { UserContext } from '../../useHooks/useDarkModeContext/useDarkModeContext';

function createData(name, price, quatity, amount) {
  return { name, price, quatity, amount };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];

export default function ProductTable() {
  const dark = React.useContext(UserContext);
  return (
    <TableContainer sx={{
      boxShadow: 'none', border: 'none',
      background: dark ? 'rgb(39 39 39 / 5%)' : 'var(--Primary-Light, rgba(247, 249, 251, 1))',
      width:'95%',
    }} elevation={0}>
      <Table 
      // sx={{ minWidth: 550 }} 
      aria-label="">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: dark ? 'white !important' : 'grey' }} align="left">Name</TableCell>
            <TableCell sx={{ color: dark ? 'white !important' : 'grey' }} align="right">Price</TableCell>
            <TableCell sx={{ color: dark ? 'white !important' : 'grey' }} align="right">Quantity</TableCell>
            <TableCell sx={{ color: dark ? 'white !important' : 'grey' }} align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ color: dark ? 'white !important' : '' }} align="left">{row.name}</TableCell>
              <TableCell sx={{ color: dark ? 'white !important' : '' }} align="right">{row.price}</TableCell>
              <TableCell sx={{ color: dark ? 'white !important' : '' }} align="right">{row.quatity}</TableCell>
              <TableCell sx={{ color: dark ? 'white !important' : '' }} align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
