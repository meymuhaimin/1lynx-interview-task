import React, { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Grid,
  Paper,
} from "@mui/material";

const Form = (props: any) => {
  const [file, setFile] = useState<File | null>(null);
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMobileNo, setEnteredMobileNo] = useState("");
  const [enteredOccupation, setEnteredOccupation] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [enteredGender, setEnteredGender] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const fileUploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const usernameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredUsername(event.target.value);
  };

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
  };

  const mobileNoChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredMobileNo(event.target.value);
  };

  const occupationChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredOccupation(event.target.value);
  };

  const addressChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAddress(event.target.value);
  };
  const genderChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredGender(event.target.value);
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const userData = {
      profilePicture: file,
      username: enteredUsername,
      name: enteredName,
      email: enteredEmail,
      mobileNo: enteredMobileNo,
      occupation: enteredOccupation,
      address: enteredAddress,
      gender: enteredGender,
    };
    props.onSaveUserData(userData);
    setFile(null);
    setEnteredUsername("");
    setEnteredName("");
    setEnteredEmail("");
    setEnteredMobileNo("");
    setEnteredOccupation("");
    setEnteredAddress("");
    setEnteredGender("");
    setDialogOpen(false);
  };

  const cancelHandler = () => {
    setFile(null);
    setEnteredUsername("");
    setEnteredName("");
    setEnteredEmail("");
    setEnteredMobileNo("");
    setEnteredOccupation("");
    setEnteredAddress("");
    setEnteredGender("");
  };

  const dialogOpenHandler = () => {
    setDialogOpen(true);
  };

  const dialogCloseHandler = () => {
    setDialogOpen(false);
  };

  const style = {
    display: "flex",
    margin: 1,
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "1",
        minWidth: "500px",
        minHeight: "200px",
      }}
    >
      <form onSubmit={submitHandler} id="myform">
        <Paper
          elevation={3}
          sx={{
            mt: 5,
          }}
        >
          <Grid container>
            <InputLabel htmlFor="file" sx={{ ...style }} variant="outlined">
              Upload Profile Picture
            </InputLabel>
            <Input
              type="file"
              id="file"
              sx={{ ...style }}
              onChange={fileUploadHandler}
            />

            <TextField
              sx={{ ...style }}
              id="username"
              label="Username"
              variant="outlined"
              value={enteredUsername}
              onChange={usernameChangeHandler}
            />
            <TextField
              sx={{ ...style }}
              id="name"
              label="Name"
              variant="outlined"
              value={enteredName}
              onChange={nameChangeHandler}
            />

            <TextField
              sx={{ ...style }}
              id="email"
              label="Email"
              variant="outlined"
              value={enteredEmail}
              type="email"
              onChange={emailChangeHandler}
            />
            <TextField
              sx={{ ...style }}
              id="mobileNo"
              label="Mobile No"
              variant="outlined"
              value={enteredMobileNo}
              onChange={mobileNoChangeHandler}
            />

            <TextField
              sx={{ width: 200, mt: 1 }}
              select
              id="occupation"
              label="Occupation"
              value={enteredOccupation}
              defaultValue=""
              onChange={occupationChangeHandler}
            >
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="Engineer">Engineer</MenuItem>
              <MenuItem value="Accountant">Accountant</MenuItem>
            </TextField>

            <TextField
              sx={{ ...style }}
              id="address"
              label="Address"
              variant="outlined"
              value={enteredAddress}
              onChange={addressChangeHandler}
            />

            <FormLabel sx={{ ...style }} id="gender">
              Gender
            </FormLabel>
            <RadioGroup
              aria-labelledby="gender"
              value={enteredGender}
              defaultValue="female"
              name="gender"
              onChange={genderChangeHandler}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>

            <Button
              sx={{ ...style }}
              variant="contained"
              onClick={dialogOpenHandler}
            >
              Submit
            </Button>
            <Dialog
              open={dialogOpen}
              onClose={dialogCloseHandler}
              aria-labelledby="confirm"
              aria-describedby="confirm"
            >
              <DialogTitle id="confirm">{"Attention"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to submit?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={dialogCloseHandler}>Cancel</Button>
                <Button type="submit" form="myform" autoFocus>
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>
            <Button
              sx={{ ...style }}
              variant="contained"
              onClick={cancelHandler}
            >
              Cancel
            </Button>
          </Grid>
        </Paper>
      </form>
    </Box>
  );
};

export default Form;
