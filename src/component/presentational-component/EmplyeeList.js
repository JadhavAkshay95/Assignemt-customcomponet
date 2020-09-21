import { Checkbox } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { useEffect, useState } from "react";
import EmpDetailsContainer from "./../container-component/EmpDetailsContainer";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    minHeight: "100px",
    maxHeight: "430px",
  },
});

const EmployeeList = ({ state, getData, deleteData }) => {
  const classes = useStyles();
  const [openDetails, setopenDetails] = useState(false);
  const [emp, setEmp] = useState();
  const [deleteRecordList, setdeleteRecordList] = useState([]);

  const handleClickOpen = (row) => {
    if (!openDetails) {
      setEmp(row);
    }
    setopenDetails(!openDetails);
  };

  useEffect(() => {
    getData();
  }, []);

  const selectRecords = (id, $event) => {
    if ($event.target.checked) {
      setdeleteRecordList([...deleteRecordList, id]);
    } else {
      setdeleteRecordList(
        [...deleteRecordList].filter((record) => record !== id)
      );
    }
  };

  const deleteRecord = () => {
    deleteData(deleteRecordList);
  };

  return (
    <>
      <div>
        <div className="message">
          Search the right candidate from below list
        </div>
        <div className="hedaer">
          <div className="header-title">
            <span>Employee list</span>
            <Button
              variant="outlined"
              onClick={deleteRecord}
              color="primary"
              className="delete-button"
            >
              Delete
            </Button>
          </div>
          <div>Total: {state && state.length}</div>
        </div>
        <TableContainer className={classes.table} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Desiganation</TableCell>
                <TableCell>Technologies</TableCell>
                <TableCell>Skill</TableCell>
                <TableCell>Availability</TableCell>
                <TableCell>Base Location</TableCell>
                <TableCell>Open Relocate</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            {state && state.length ? (
              <TableBody>
                <TableCell padding="checkbox"></TableCell>
                {state &&
                  state.length &&
                  state.map((row) => (
                    <TableRow key={row.id}>
                      <Checkbox
                        onClick={($event) => selectRecords(row.id, $event)}
                      />
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.designation}</TableCell>
                      <TableCell>
                        {row.technologies &&
                          row.technologies.length &&
                          row.technologies.join(", ")}
                      </TableCell>
                      <TableCell>
                        {row.skills &&
                          row.skills.length &&
                          row.skills.join(", ")}
                      </TableCell>
                      <TableCell>{row.avaibility}</TableCell>
                      <TableCell>
                        {row.location &&
                          row.location.length &&
                          row.location.join(", ")}
                      </TableCell>
                      <TableCell>
                        {row.isOpenForRelocation ? "Yes" : "No"}
                      </TableCell>
                      <TableCell>
                        <Button
                          style={{
                            fontSize: "12px",
                            textTransform: "capitalize",
                          }}
                          variant="contained"
                          color="primary"
                          onClick={() => handleClickOpen(row)}
                        >
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            ) : (
              <TableBody>
                <TableCell>"No data available for this filters"</TableCell>
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </div>
      {emp && (
        <EmpDetailsContainer
          employee={emp}
          open={openDetails}
          handleClickOpen={handleClickOpen}
        />
      )}
    </>
  );
};

export default EmployeeList;
