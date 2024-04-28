import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(namePlayers, dateCreate, email, quizzes, status) {
  return { namePlayers, dateCreate, email, quizzes, status };
}

const rows = [
  createData("Fernando Santos", "24/04/2024", "email@email.com", 100, "Online"),
  createData(
    "Admiro Gregorio",
    "24/04/2024",
    "email@email.com",
    100,
    "Offline"
  ),
  createData("Fernando Lemos", "24/04/2024", "email@email.com", 100, "Online"),
  createData("Fernando Neto", "24/04/2024", "email@email.com", 100, "Online"),
  createData("Lucas Sergio", "24/04/2024", "email@email.com", 100, "Offline"),
  createData(
    "Batman O Morcego",
    "24/04/2024",
    "email@email.com",
    100,
    "Online"
  ),
  createData("Robin Hood", "24/04/2024", "email@email.com", 100, "Offline"),
  createData(
    "Calabreso Samsumgo",
    "24/04/2024",
    "email@email.com",
    100,
    "Offline"
  ),
  createData("Cnpjoto", "24/04/2024", "email@email.com", 100, "Online"),
  createData("Linguição", "24/04/2024", "email@email.com", 100, "Offline"),
  createData(
    "Fernando Trevisano",
    "24/04/2024",
    "email@email.com",
    100,
    "Online"
  ),
  createData(
    "Fernando Gonçalves",
    "24/04/2024",
    "email@email.com",
    100,
    "Online"
  ),
  createData("Lucas Riello", "24/04/2024", "email@email.com", 100, "Online"),
];

export default function TableUsers() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <>
      <TableContainer component={Paper} elevation={0}>
        <Table
          sx={{
            minWidth: 650,
          }}
          aria-label="caption table"
        >
          <TableRow>
            <TableCell>Nome dos Jogadores</TableCell>
            <TableCell align="right">Criação</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">Quizzes</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
          <TableBody
            sx={{
              overflowY: "hidden",
            }}
          >
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.namePlayers}>
                <TableCell component="th" scope="row">
                  {row.namePlayers}
                </TableCell>
                <TableCell align="right">{row.dateCreate}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.quizzes}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[4, 10, 25, { label: "All", value: -1 }]}
                colSpan={5}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
