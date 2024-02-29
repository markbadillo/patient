import React from "react";
import { Grid } from "@mui/material";
import capitalize from "../utils/capitalize";
import PatientCard from "../components/patients/PatientCard";
import patientsData from "../data/longitudinal_cardiac_patient_deid_mapped.json";

const Patients = () => {
  return (
    <Grid container spacing={4}>
      {patientsData.map((patient, idx) => (
        <Grid key={idx} item xs={12} sm={6} lg={3}>
          <PatientCard
            id={idx}
            name={capitalize(patient.givenName.toLowerCase())}
            sex={
              patient.sex === "F" ? "Female" : patient.sex === "M" ? "Male" : ""
            }
            dateOfBirth={patient.dateOfBirth}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Patients;
