import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Popover, Typography } from "@mui/material";

interface Column {
  id: "entity_name" | "entity_type" | "headquaters" | "global_id";
  label: string;
  minWidth?: number;
  align?: "right";
}

const columns: Column[] = [
  { id: "entity_name", label: "ENTITY NAME", minWidth: 190 },
  { id: "entity_type", label: "ENTITY TYPE", minWidth: 225 },
  { id: "headquaters", label: "HEADQUATERS", minWidth: 340 },
  { id: "global_id", label: "GLOBAL ID", minWidth: 50 },
];

interface Data {
  entity_name: any;
  entity_type: string;
  headquaters: string;
  global_id: string;
}

function createData(
  entity_name: any,
  entity_type: string,
  headquaters: string,
  global_id: string
): Data {
  return { entity_name, entity_type, headquaters, global_id };
}

const rows = [
  createData(
    "4Moms",
    "Private Company",
    "Pittsburgh, Pennsylvania, United States",
    "DS-9268418"
  ),
  createData(
    "4Moms",
    "Private Company",
    "Pittsburgh, Pennsylvania, United States",
    "DS-9268418"
  ),
  createData(
    "4Moms",
    "Private Company",
    "Pittsburgh, Pennsylvania, United States",
    "DS-9268418"
  ),
  createData(
    "4Moms",
    "Private Company",
    "Pittsburgh, Pennsylvania, United States",
    "DS-9268418"
  ),
  createData(
    "4Moms",
    "Private Company",
    "Pittsburgh, Pennsylvania, United States",
    "DS-9268418"
  ),
  createData(
    "4Moms",
    "Private Company",
    "Pittsburgh, Pennsylvania, United States",
    "DS-9268418"
  ),
  createData(
    "4Moms",
    "Private Company",
    "Pittsburgh, Pennsylvania, United States",
    "DS-9268418"
  ),
  createData(
    "4Moms",
    "Private Company",
    "Pittsburgh, Pennsylvania, United States",
    "DS-9268418"
  ),
  createData(
    "4Moms",
    "Private Company",
    "Pittsburgh, Pennsylvania, United States",
    "DS-9268418"
  ),
  createData(
    "4Moms",
    "Private Company",
    "Pittsburgh, Pennsylvania, United States",
    "DS-9268418"
  ),
  createData(
    "4Moms",
    "Private Company",
    "Pittsburgh, Pennsylvania, United States",
    "DS-9268418"
  ),
  createData(
    "4Moms",
    "Private Company",
    "Pittsburgh, Pennsylvania, United States",
    "DS-9268418"
  ),
  createData(
    "4Moms",
    "Private Company",
    "Pittsburgh, Pennsylvania, United States",
    "DS-9268418"
  ),
  createData(
    "4Moms",
    "Private Company",
    "Pittsburgh, Pennsylvania, United States",
    "DS-9268418"
  ),
  createData(
    "4Moms",
    "Private Company",
    "Pittsburgh, Pennsylvania, United States",
    "DS-9268418"
  ),
];


export default function SearchEntityTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);


  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Paper sx={{ width: "100%", borderRadius: "10px" }}>
      <TableContainer sx={{ maxHeight: "fit-content" }}>
        <Table>
          <TableHead className="border-b-[2px] border-[#2D3F5B]">
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontSize: "12px",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    fontWeight: 600,
                  }}
                  className="first:pl-[58px] "
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow tabIndex={-1} key={row.entity_name}>
                    <TableCell
                      key={columns[0].id}
                      align={columns[0].align}
                      style={{
                        fontSize: "14px",
                        paddingTop: "12px",
                        paddingBottom: "12px",
                      }}
                      className="first:pl-[58px] "
                    >
                      <span className="text-[#1668AF]"  onClick={handleClick}>
                        {row["entity_name"]}
                      </span>
                      <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        sx={{boxShadow:'none'}}
                      >
                        <Typography sx={{ p: 2 }}>
                          The content of the Popover.
                        </Typography>
                      </Popover>
                    </TableCell>
                    <TableCell
                      key={columns[1].id}
                      align={columns[1].align}
                      style={{
                        fontSize: "14px",
                        paddingTop: "12px",
                        paddingBottom: "12px",
                      }}
                      className="first:pl-[58px] "
                    >
                      {row["entity_type"]}
                    </TableCell>
                    <TableCell
                      key={columns[2].id}
                      align={columns[2].align}
                      style={{
                        fontSize: "14px",
                        paddingTop: "12px",
                        paddingBottom: "12px",
                      }}
                      className="first:pl-[58px] "
                    >
                      {row["headquaters"]}
                    </TableCell>
                    <TableCell
                      key={columns[3].id}
                      align={columns[3].align}
                      style={{
                        fontSize: "14px",
                        paddingTop: "12px",
                        paddingBottom: "12px",
                      }}
                      className="first:pl-[58px] "
                    >
                      {row["global_id"]}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
