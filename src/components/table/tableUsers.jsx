import * as React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import '../../css/table/table.css';

const TableUsers = () => {
  
  const createData = (namePlayers, dateCreate, email, quizzes, status) => {
    return {namePlayers, dateCreate, email, quizzes, status};
  }

  const rows = [
    createData('Fernando Santos', '24/04/2024', 'email@email.com', 100, 'Online'),
    createData('Admiro Gregorio', '24/04/2024', 'email@email.com', 100, 'Offline'), 
    createData('Fernando Lemos', '24/04/2024', 'email@email.com', 100, 'Online'),
    createData('Fernando Neto', '24/04/2024', 'email@email.com', 100, 'Online'),
    createData('Lucas Sergio', '24/04/2024', 'email@email.com', 100, 'Offline'),
    createData('Batman O Morcego', '24/04/2024', 'email@email.com', 100, 'Online'),
    createData('Robin Hood', '24/04/2024', 'email@email.com', 100, 'Offline'),
    createData('Calabreso Samsumgo', '24/04/2024', 'email@email.com', 100, 'Offline'),
    createData('Cnpjoto', '24/04/2024', 'email@email.com', 100, 'Online'),
    createData('Linguição', '24/04/2024', 'email@email.com', 100, 'Offline'),
    createData('Fernando Trevisano', '24/04/2024', 'email@email.com', 100, 'Online'),
    createData('Fernando Gonçalves', Date.now.toString, 'email@email.com', 100, 'Online'),
    createData('Lucas Riello', Date.now.toString, 'email@email.com', 100, 'Online')
  ];

  return (
    <>
      <TableContainer component={Paper} >
        <Table sx={{minWidth: 650}} aria-label='caption table' bgcolor='white' >
          <TableHead>
            <TableRow>
              <TableCell>Nome dos Jogadores</TableCell>
              <TableCell align='right'>Criação</TableCell>
              <TableCell align='right'>E-mail</TableCell>
              <TableCell align='right'>Quizzes</TableCell>
              <TableCell align='right'>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((rows) => (
              <TableRow key={rows.namePlayers}>
                <TableCell component='th' scope='row'>
                  {rows.namePlayers}
                </TableCell>
                <TableCell align='right'>{rows.dateCreate}</TableCell>
                <TableCell align='right'>{rows.email}</TableCell>
                <TableCell align='right'>{rows.quizzes}</TableCell>
                <TableCell align='right'>{rows.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default TableUsers;
