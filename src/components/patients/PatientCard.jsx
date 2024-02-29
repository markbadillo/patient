import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function PatientCard(props) {
  const { id, sex, name, dateOfBirth } = props;

  const navigate = useNavigate();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Patient Information
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {sex}
        </Typography>
        <Typography variant="body2">
          {moment(dateOfBirth).format("MMMM Do YYYY")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            navigate(`/${id}`);
          }}
          size="small"
        >
          See Notes
        </Button>
      </CardActions>
    </Card>
  );
}

export default PatientCard;
