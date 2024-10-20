import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { UserContext } from '../../useHooks/useDarkModeContext/useDarkModeContext';
import { Add, DateRange, ImportExport } from '@mui/icons-material';
import { SearchBar } from '../searchBar/searchBar';
import { Pagination } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

function createData(id, orderId, user, project, address, date, status) {
  return { id, orderId, user, project, address, date, status };
}

const rows = [
  createData(1, '#CM9801', 'Natali', 'Landing Page', 'Meadow Lane Oakland', 'Just now', 'In Progress'),
  createData(2, '#CM9802', 'John', 'Mobile App', 'Sunset Boulevard LA', '5 mins ago', 'Completed'),
  createData(3, '#CM9803', 'Anna', 'Dashboard UI', 'Mountain View SF', '10 mins ago', 'Pending'),
  createData(4, '#CM9804', 'Chris', 'E-commerce Site', 'Downtown NYC', '15 mins ago', 'Approved'),
  createData(5, '#CM9805', 'Mike', 'Blog Platform', 'Lakewood St Chicago', '20 mins ago', 'Rejected'),
  createData(6, '#CM9806', 'Sarah', 'Portfolio Website', 'Brooklyn NY', '25 mins ago', 'Pending'),
  createData(7, '#CM9807', 'David', 'CRM System', '5th Avenue NYC', '30 mins ago', 'In Progress'),
  createData(8, '#CM9808', 'Laura', 'Social Media App', 'Silicon Valley CA', '35 mins ago', 'Completed'),
  createData(9, '#CM9809', 'Daniel', 'Marketing Website', 'Greenwich Village NYC', '40 mins ago', 'In Progress'),
  createData(10, '#CM9810', 'Sophia', 'Analytics Dashboard', 'Palo Alto CA', '45 mins ago', 'Pending'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  { id: 'orderId', numeric: false, disablePadding: true, label: 'Order ID' },
  { id: 'user', numeric: false, disablePadding: false, label: 'User' },
  { id: 'project', numeric: false, disablePadding: false, label: 'Project' },
  { id: 'address', numeric: false, disablePadding: false, label: 'Address' },
  { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
  { id: 'status', numeric: false, disablePadding: false, label: 'Status' },  // Added Status head cell
];

function OrderListTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  const dark = React.useContext(UserContext);
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            sx={{ color: dark ? 'white !important' : '' }}
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            sx={{ color: dark ? 'white !important' : '' }}
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              sx={{ color: dark ? 'white !important' : '' }}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

OrderListTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function OrderListTableToolbar(props) {
  const { numSelected } = props;
  const dark = React.useContext(UserContext);
  return (
    <Toolbar
      sx={
        [
          {
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
          },
          numSelected > 0 && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          },
        ]}
      style={{ background: dark ? 'var(--black-5, #FFFFFF1A)' : 'var(--Primary-Light, rgba(247, 249, 251, 1))', borderRadius: '15px' }}
      className='flex justify-between'
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <div>
          <Tooltip title="Add list">
            <IconButton>
              <Add sx={{ color: dark ? 'white !important' : '' }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon sx={{ color: dark ? 'white !important' : '' }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Export list">
            <IconButton>
              <ImportExport sx={{ color: dark ? 'white !important' : '' }} />
            </IconButton>
          </Tooltip>
        </div>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon sx={{ color: dark ? 'white !important' : '' }} />
          </IconButton>
        </Tooltip>
      ) : (
        <SearchBar filter={false} />
      )}
    </Toolbar>
  );
}

OrderListTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function OrderListTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage],
  );
  const dark = React.useContext(UserContext);
  const statusMap = new Map();
  statusMap.set('In Progress', { color: 'rgba(138, 140, 217, 1)' });
  statusMap.set('Completed', { color: 'rgba(74, 167, 133, 1)' });
  statusMap.set('Pending', { color: 'rgba(89, 168, 212, 1)' });
  statusMap.set('Approved', { color: 'rgba(255, 197, 85, 1)' });
  statusMap.set('Rejected', { color: dark ? 'var(--black-40, rgba(255, 255, 255, 0.4))' : 'rgb(23 23 23 / 40%)' });

  return (
    <Box sx={{ width: '100%', boxShadow: 'none' }} >
      <Paper sx={{ width: '100%', mb: 2, background: dark ? 'black !important' : 'white', color: dark ? 'white !important' : 'black', boxShadow: 'none' }}>
        <OrderListTableToolbar numSelected={selected.length} />
        <TableContainer sx={{ color: dark ? 'white !important' : '' }} elevation={0}>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
            <OrderListTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody >
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.indexOf(row.id) !== -1;
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    sx={{ color: dark ? 'white !important' : '' }}
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox" >
                      <Checkbox
                        sx={{ color: dark ? 'white !important' : '' }}
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none" sx={{ color: dark ? 'white !important' : '' }}>
                      {row.orderId}
                    </TableCell>
                    <TableCell align="left" sx={{ color: dark ? 'white !important' : '' }}>
                      <div className='flex gap-2 justify-start items-center w-[100%]'>
                        <img src="./assests/profile.png" alt='profile' />
                        {row.user}
                      </div>
                    </TableCell>
                    <TableCell align="left" sx={{ color: dark ? 'white !important' : '' }}>{row.project}</TableCell>
                    <TableCell align="left" sx={{ color: dark ? 'white !important' : '' }}>{row.address}</TableCell>
                    <TableCell align="left" sx={{ color: dark ? 'white !important' : '' }}>
                      <div className='flex gap-2 justify-start items-center w-[100%]'>
                        <DateRange />
                        {row.date}
                      </div>
                    </TableCell>
                    <TableCell align="left" sx={{ color: dark ? 'white !important' : '' }}>
                      <div className={`flex justify-start gap-2 my-2 cursor-pointer `} style={statusMap.get(row.status)}>
                        <div className=' flex justify-center items-center' onClick={(e) => { }}>
                          <CircleIcon style={{ fontSize: '10px' }} visibility={false} />
                        </div>
                        {row.status}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
          sx={{
            color: dark ? 'white !important' : '', '.MuiTablePagination-actions button': {
              color: dark ? 'white !important' : '',
            },
          }}

          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
        <Pagination shape="rounded"
          sx={{
            color: dark ? 'white' : 'black', // Change color based on dark mode
            "& .MuiPaginationItem-root": {
              color: dark ? 'white' : 'black',  // Change the color of pagination items
            },
            "& .Mui-selected": {
              backgroundColor: dark ? '#1976d2' : '',  // Change background of selected item in dark mode
              color: dark ? 'white' : '',  // Keep the text white when selected in dark mode
            },
            "& .MuiPaginationItem-ellipsis": {
              color: dark ? 'white' : 'black',  // Change the color of ellipsis
            },
            display: 'flex',
            justifyContent: 'end',
            margin: '10px 0px'
          }}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={5}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage} />
      </Paper>
    </Box>
  );
}
