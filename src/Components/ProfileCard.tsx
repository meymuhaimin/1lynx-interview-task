import React from "react";

const ProfileCard = (props: any) => {
  return (
    <div>
      <h1>Profile Card</h1>
      <p>Username: {props.userData.username}</p>
      <p>Name: {props.userData.name}</p>
      <p>Email: {props.userData.email}</p>
      <p>Mobile No: {props.userData.mobileNo}</p>
      <p>Occupation: {props.userData.occupation}</p>
      <p>Address: {props.userData.address}</p>
      <p>Gender: {props.userData.gender}</p>
    </div>
  );
};

export default ProfileCard;
