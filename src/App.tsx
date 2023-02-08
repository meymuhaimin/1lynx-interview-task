import React, { useState } from "react";
import "./App.css";

import Form from "./Components/Form";
import ProfileCard from "./Components/ProfileCard";
import { Stack, Button } from "@mui/material";
import axios from "axios";

interface UserData {
  profilePic: File | null;
  username: string;
  name: string;
  email: string;
  mobileNo: string;
  occupation: string;
  address: string;
  gender: string;
}

function App() {
  const [userData, setUserData] = useState<UserData>();

  const onSaveUserDataHandler = (enteredUserData: {
    profilePic: File | null;
    username: string;
    name: string;
    email: string;
    mobileNo: string;
    occupation: string;
    address: string;
    gender: string;
  }) => {
    // setUserData(enteredUserData);
    // console.log(enteredUserData);
    axios
      .post("http://localhost:8000/Profile", {
        id: Math.random(),
        username: enteredUserData.username,
        name: enteredUserData.name,
        email: enteredUserData.email,
        mobileNo: enteredUserData.mobileNo,
        occupation: enteredUserData.occupation,
        address: enteredUserData.address,
        gender: enteredUserData.gender,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const refreshHandler = () => {
    axios.get("http://localhost:8000/Profile").then((res) => {
      setUserData(res.data);
      console.log(res.data);
    });
  };

  return (
    <div className="App">
      <Stack direction="row" spacing={4} justifyContent="center">
        <Form onSaveUserData={onSaveUserDataHandler} />
        {userData && <ProfileCard userData={userData} />}
      </Stack>

      <Button onClick={refreshHandler}>Refresh</Button>
    </div>
  );
}

export default App;
