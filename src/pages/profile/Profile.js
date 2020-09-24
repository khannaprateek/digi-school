import React from "react";

const Profile = (props) => {
  return (
    <div className="profile-container">
      <span>Name :</span>
      <input type="text" value={props} />
      <span>Email:</span>
      <input type="text" value={props} />
      <span>DOB:</span>
      <input type="text" value={props} />
      <span>Location:</span>
      <input type="text" value={props} />
      <button>Save</button>
    </div>
  );
};

export default Profile;
