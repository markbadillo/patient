import React, { useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import { styled } from "@mui/system";

const Form = styled("form")`
  max-width: 400;
  flex-direction: column;
  display: flex;
  height: 100%;
`;

const Body = styled("div")`
  flex-grow: 1;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  & > .MuiStack-root {
    padding-top: 16px;
  }
`;

const Header = styled("div")`
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const Footer = styled("div")`
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const StyledTextField = styled(TextField)`
  margin-top: 16px !important;
`;

const AddNoteDrawer = (props) => {
  const { formik, open, onClose } = props;

  useEffect(() => {
    if (open) {
      formik.resetForm();
      formik.setTouched({}, false);
    }
    // eslint-disable-next-line
  }, [open]);

  const startDateTime = dayjs(formik.values.start);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => {
        onClose();
      }}
    >
      <Form onSubmit={formik.handleSubmit}>
        <Header>
          <Typography variant="h5" fontWeight="bold" component="div">
            Add Note
          </Typography>
        </Header>
        <Divider />
        <Body>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker
                label="Start"
                name="start"
                minDate={dayjs()}
                minTime={dayjs()}
                value={formik.values.start}
                onChange={(value) => {
                  formik.setFieldValue("start", value);
                }}
                slotProps={{
                  textField: {
                    helperText:
                      formik?.errors?.start && formik?.touched?.start
                        ? formik?.errors?.start
                        : "",
                    error: formik?.errors?.start && formik?.touched?.start,
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker
                label="End"
                name="end"
                disabled={!formik.values.start}
                minDate={startDateTime.add(5, "minutes")}
                minTime={startDateTime.add(5, "minutes")}
                value={formik.values.end}
                onChange={(value) => {
                  formik.setFieldValue("end", value);
                }}
                slotProps={{
                  textField: {
                    helperText:
                      formik?.errors?.end && formik?.touched?.end
                        ? formik?.errors?.end
                        : "",
                    error: formik?.errors?.end && formik?.touched?.end,
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
          <StyledTextField
            variant="outlined"
            fullWidth
            label="Note"
            value={formik.values.note}
            name="note"
            onChange={formik.handleChange}
            error={formik?.errors?.note && formik?.touched?.note}
            helperText={
              formik?.errors?.note && formik?.touched?.note
                ? formik?.errors?.note
                : null
            }
          />
          <StyledTextField
            rows={5}
            multiline
            variant="outlined"
            fullWidth
            label="Details"
            value={formik.values.details}
            name="details"
            onChange={formik.handleChange}
            error={formik?.errors?.details && formik?.touched?.details}
            helperText={
              formik?.errors?.details && formik?.touched?.details
                ? formik?.errors?.details
                : null
            }
          />
        </Body>
        <Divider />
        <Footer>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => {
                  onClose();
                }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button type="submit" variant="contained" fullWidth>
                Save
              </Button>
            </Grid>
          </Grid>
        </Footer>
      </Form>
    </Drawer>
  );
};

export default AddNoteDrawer;
