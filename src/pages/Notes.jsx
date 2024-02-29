import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as yup from "yup";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { styled } from "@mui/system";
import AddNoteDrawer from "../components/notes/AddNoteDrawer";
import Tabs from "../components/notes/Tabs";
import NotesTable from "../components/notes/NotesTable";
import patientsData from "../data/longitudinal_cardiac_patient_deid_mapped.json";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const StyledTabPanel = styled(TabPanel)`
  max-width: calc(100% - 160px);
  width: 100%;
  flex-grow: 1;
`;

const Notes = () => {
  const { id } = useParams();

  const [valueTabs, setValueTabs] = useState(0);

  const handleChangeTabs = (event, value) => {
    setValueTabs(value);
  };

  const formik = useFormik({
    initialValues: {
      start: null,
      end: null,
      note: "",
      details: "",
    },
    validationSchema: yup.object().shape({
      start: yup
        .date()
        .required("Start is required")
        .min(dayjs(), "Date is invalid"),
      end: yup
        .date()
        .required("End is required")
        .min(yup.ref("start"), "Date is invalid")
        .test({
          name: "not-same-as-start",
          message: "Date is invalid",
          test: function (value) {
            const startDateTime = dayjs(this.parent.start);
            const endDateTime = dayjs(value);

            return !startDateTime.isSame(endDateTime);
          },
        }),
      note: yup.string().required("Note is required"),
      details: yup.string().required("Details is required"),
    }),
    onSubmit: (values) => {
      toast.success("Add note success");
      setPatientNote([
        [
          dayjs(values.start).unix() * 1000,
          dayjs(values.end).unix() * 1000,
          values.note,
          values.details,
        ],
        ...patientNote,
      ]);
      setOpen(false);
      formik.resetForm();
    },
  });

  const [open, setOpen] = useState(false);

  const patient = useMemo(() => {
    const statePatient = patientsData.find((_, idx) => {
      return idx === Number(id);
    });
    return statePatient;
  }, [patientsData, id]);

  const [patientNote, setPatientNote] = useState([]);

  return (
    <div>
      <Box display="flex" justifyContent="end" mb={2}>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          variant="contained"
        >
          Add Note
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Tabs value={valueTabs} handleChange={handleChangeTabs} />
        <StyledTabPanel value={valueTabs} index={0}>
          <NotesTable data={[...patientNote, ...patient.PatientNote]} />
        </StyledTabPanel>
        <StyledTabPanel value={valueTabs} index={1}>
          <NotesTable data={patientNote} />
        </StyledTabPanel>
      </Box>
      <AddNoteDrawer
        formik={formik}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};

export default Notes;
