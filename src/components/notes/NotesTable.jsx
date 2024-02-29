import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";
import { orderBy } from "lodash";
import { Button } from "@mui/material";
import DetailsModal from "../notes/DetailsModal";

const NotesTable = (props) => {
  const { data } = props;

  const [openModal, setOpenModal] = useState(false);

  const [paragraphs, setParagraphs] = useState([]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Start</TableCell>
              <TableCell align="left">End</TableCell>
              <TableCell align="left">Note</TableCell>
              <TableCell align="left">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderBy(
              data,
              function (dateObj) {
                return dateObj[0];
              },
              ["desc"]
            ).map((note, idx) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  {note[0]
                    ? moment(note[0]).format("MMMM Do YYYY, h:mm:ss a")
                    : ""}
                </TableCell>
                <TableCell align="left">
                  {note[1]
                    ? moment(note[1]).format("MMMM Do YYYY, h:mm:ss a")
                    : ""}
                </TableCell>
                <TableCell align="left">{note[2]}</TableCell>
                <TableCell
                  align="left"
                  onClick={() => {
                    setParagraphs(note[3]?.split(/\n+/));
                    setOpenModal(true);
                  }}
                >
                  <Button variant="contained" size="small">
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DetailsModal
        paragraphs={paragraphs}
        open={openModal}
        handleClose={() => {
          setOpenModal(false);
        }}
      />
    </>
  );
};

export default NotesTable;
