import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <h2>Not Logged In</h2>;
  return (
    <div>
      <h2>Profile: {user.userName}</h2>
    </div>
  );
}

export default Profile;
