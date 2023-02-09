import React from "react";
import { Paper, Table, TableCell, TableHead, TableRow } from "@mui/material";

const ProfileCard = (props: any) => {
  return (
    <Paper elevation={3} sx={{ mt: 5 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Mobile No</TableCell>
            <TableCell>Occupation</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Gender</TableCell>
          </TableRow>
        </TableHead>

        {props.userData.map((user: any) => (
          <TableRow>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.mobileNo}</TableCell>
            <TableCell>{user.occupation}</TableCell>
            <TableCell>{user.address}</TableCell>
            <TableCell>{user.gender}</TableCell>
          </TableRow>
        ))}
      </Table>
    </Paper>
  );
};

export default ProfileCard;
