import * as React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

const TableUsers = () => {
  
  const createData = (namePlayers, dateCreate, email, quizzes, status) => {
    return {namePlayers, dateCreate, email, quizzes, status};
  }

  const rows = [
    createData('Fernando Santos', Date.now.toString, 'email@email.com', 100, 'Online'),
    createData('Admiro Gregorio', Date.now.toString, 'email@email.com', 100, 'Offline'),
    createData('Fernando Lemos', Date.now.toString, 'email@email.com', 100, 'Online'),
    createData('Fernando Neto', Date.now.toString, 'email@email.com', 100, 'Online'),
    createData('Lucas Sergio', Date.now.toString, 'email@email.com', 100, 'Offline'),
    createData('Batman O Morcego', Date.now.toString, 'email@email.com', 100, 'Online'),
    createData('Robin Hood', Date.now.toString, 'email@email.com', 100, 'Offline'),
    createData('Calabreso Samsumgo', Date.now.toString, 'email@email.com', 100, 'Offline'),
    createData('Cnpjoto', Date.now.toString, 'email@email.com', 100, 'Online'),
    createData('Linguição', Date.now.toString, 'email@email.com', 100, 'Offline'),
    createData('Fernando Trevisano', Date.now.toString, 'email@email.com', 100, 'Online'),
    createData('Fernando Gonçalves', Date.now.toString, 'email@email.com', 100, 'Online'),
    createData('Lucas Riello', Date.now.toString, 'email@email.com', 100, 'Online')
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label='caption table'>
          <caption>A basic table example with a caption</caption>
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