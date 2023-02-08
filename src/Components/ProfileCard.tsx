import React from "react";

const ProfileCard = (props: any) => {
  return (
    <div>
      {props.userData.map((user: any) => (
        <div key={user.id}>
          <h1>{user.username}</h1>
          <h2>{user.name}</h2>
          <h3>{user.email}</h3>
          <h4>{user.mobileNo}</h4>
          <h5>{user.occupation}</h5>
          <h6>{user.address}</h6>
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;
