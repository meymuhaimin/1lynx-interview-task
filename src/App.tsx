import React, { useState } from "react";
import "./App.css";

import Form from "./Components/Form";
import ProfileCard from "./Components/ProfileCard";
import { Stack } from "@mui/material";

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
    setUserData(enteredUserData);
    console.log(enteredUserData);
  };

  return (
    <div className="App">
      <Stack direction="row" spacing={4} justifyContent="center">
        <Form onSaveUserData={onSaveUserDataHandler} />
        {userData && <ProfileCard userData={userData} />}
      </Stack>
    </div>
  );
}

export default App;
