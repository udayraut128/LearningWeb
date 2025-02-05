import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Alert from "@mui/material/Alert";

export default function Material() {
  return (
    <div className="material">
      <h2>Material</h2>
      <Button variant="text">Text</Button> <br></br> <br></br>
      <Button variant="contained">Contained</Button> <br></br> <br></br>
      <Button variant="contained" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <br></br> <br></br>
      <Alert severity="success">
        Here is a gentle confirmation that your action was successful.
      </Alert>
    </div>
  );
}
